const express = require('express');
const cors = require('cors');
const createAppContainer = require('./src/container.js');
const dbPool = require('./src/infrastructure/database/dbFactory');

const app = express();
app.use(cors());
app.use(express.json());

const container = createAppContainer(dbPool);

// Rutas definitivas
app.use('/api/v1/patients', container.patientRouter);
app.use('/api/v1/doctors', container.doctorRouter);
app.use('/api/v1/especialidades', container.especialidadRouter);
app.use('/api/v1/tratamientos', container.tratamientoRouter);
app.use('/api/v1/citas', container.citaRouter);
app.use('/api/v1/pagos', container.pagoRouter);
app.use('/api/v1/insumos', container.insumoRouter);
app.use('/api/v1/metodos_pago', container.metodoPagoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor de la clínica en puerto ${PORT}`));