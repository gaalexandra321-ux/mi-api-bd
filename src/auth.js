const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'clave_segura_ejemplo_clinica';
const MAX_INTENTOS = 3;
const intentosFallidos = {};

// Simulación de usuario registrado en base de datos con contraseña hasheada ('Clinica2026*')
const MOCK_PASSWORD_HASH = bcrypt.hashSync('Clinica2026*', 10);
const MOCK_USER = {
  id: 1,
  email: 'paciente@clinica.com',
  passwordHash: MOCK_PASSWORD_HASH,
  rol: 'paciente'
};

async function iniciarSesion(email, password) {
  // 1. Validación de entradas obligatorias (OWASP Input Validation)
  if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
    return { status: 400, success: false, message: 'Datos de acceso incompletos o inválidos' };
  }

  // 2. Control de fuerza bruta (OWASP A07)
  if ((intentosFallidos[email] || 0) >= MAX_INTENTOS) {
    return { status: 429, success: false, message: 'Cuenta bloqueada temporalmente por múltiples intentos fallidos' };
  }

  // 3. Verificación neutra para evitar enumeración de usuarios (OWASP A07)
  if (email !== MOCK_USER.email) {
    intentosFallidos[email] = (intentosFallidos[email] || 0) + 1;
    return { status: 401, success: false, message: 'Credenciales inválidas' };
  }

  // 4. Comparación criptográfica con bcrypt (OWASP A07)
  const esValida = await bcrypt.compare(password, MOCK_USER.passwordHash);
  if (!esValida) {
    intentosFallidos[email] = (intentosFallidos[email] || 0) + 1;
    return { status: 401, success: false, message: 'Credenciales inválidas' };
  }

  // Reiniciar contador tras acceso exitoso y emitir JWT de corta duración (OWASP A01)
  intentosFallidos[email] = 0;
  const token = jwt.sign({ id: MOCK_USER.id, rol: MOCK_USER.rol }, JWT_SECRET, { expiresIn: '15m' });

  return { status: 200, success: true, message: 'Inicio de sesión exitoso', token };
}

function verificarToken(token) {
  if (!token) {
    return { valid: false, message: 'Token no proporcionado' };
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, user: decoded };
  } catch (err) {
    return { valid: false, message: 'Token inválido o expirado' };
  }
}

function reiniciarIntentos() {
  for (const key in intentosFallidos) delete intentosFallidos[key];
}

module.exports = { iniciarSesion, verificarToken, reiniciarIntentos };
