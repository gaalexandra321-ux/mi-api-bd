const { iniciarSesion, verificarToken, reiniciarIntentos } = require('../src/auth');

describe('HU02 - Pruebas de Inicio de Sesión Seguro y Control DevSecOps', () => {
  beforeEach(() => {
    reiniciarIntentos();
  });

  test('1. Permite iniciar sesión con credenciales válidas y emite JWT', async () => {
    const res = await iniciarSesion('paciente@clinica.com', 'Clinica2026*');
    expect(res.status).toBe(200);
    expect(res.success).toBe(true);
    expect(res.token).toBeDefined();
  });

  test('2. Rechaza contraseña incorrecta con mensaje genérico (OWASP A07)', async () => {
    const res = await iniciarSesion('paciente@clinica.com', 'ClaveMala123');
    expect(res.status).toBe(401);
    expect(res.message).toBe('Credenciales inválidas');
  });

  test('3. Rechaza correo inexistente sin revelar existencia (prevención de enumeración)', async () => {
    const res = await iniciarSesion('noexiste@clinica.com', 'Clinica2026*');
    expect(res.status).toBe(401);
    expect(res.message).toBe('Credenciales inválidas');
  });

  test('4. Valida entradas vacías o malformadas', async () => {
    const res = await iniciarSesion('', '');
    expect(res.status).toBe(400);
    expect(res.success).toBe(false);
  });

  test('5. Bloquea intentos repetidos tras superar el límite (fuerza bruta)', async () => {
    await iniciarSesion('paciente@clinica.com', 'err1');
    await iniciarSesion('paciente@clinica.com', 'err2');
    await iniciarSesion('paciente@clinica.com', 'err3');
    const bloqueado = await iniciarSesion('paciente@clinica.com', 'Clinica2026*');
    expect(bloqueado.status).toBe(429);
  });

  test('6. Valida correctamente un token JWT activo (OWASP A01)', async () => {
    const login = await iniciarSesion('paciente@clinica.com', 'Clinica2026*');
    const verificacion = verificarToken(login.token);
    expect(verificacion.valid).toBe(true);
    expect(verificacion.user.rol).toBe('paciente');
  });

  test('7. Rechaza acceso sin token o con token manipulado', () => {
    expect(verificarToken(null).valid).toBe(false);
    expect(verificarToken('token.falso.123').valid).toBe(false);
  });
});
