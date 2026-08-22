// --- Importaciones ---
// Repositorios
const PostgresPatientRepository = require('./infrastructure/repositories/PostgresPatientRepository');
const PostgresDoctorRepository = require('./infrastructure/repositories/PostgresDoctorRepository');
const PostgresEspecialidadRepository = require('./infrastructure/repositories/PostgresEspecialidadRepository');
const PostgresTratamientoRepository = require('./infrastructure/repositories/PostgresTratamientoRepository');
const PostgresCitaRepository = require('./infrastructure/repositories/PostgresCitaRepository');
const PostgresPagoRepository = require('./infrastructure/repositories/PostgresPagoRepository');
const PostgresInsumoRepository = require('./infrastructure/repositories/PostgresInsumoRepository');
const PostgresMetodoPagoRepository = require('./infrastructure/repositories/PostgresMetodoPagoRepository');

// Casos de Uso (Simplificado en importación)
const GetPatientsUseCase = require('./application/use-cases/GetPatientsUseCase');
const CreatePatientUseCase = require('./application/use-cases/CreatePatientUseCase');
const UpdatePatientUseCase = require('./application/use-cases/UpdatePatientUseCase');
const DeletePatientUseCase = require('./application/use-cases/DeletePatientUseCase');

const GetDoctorsUseCase = require('./application/use-cases/GetDoctorsUseCase');
const CreateDoctorUseCase = require('./application/use-cases/CreateDoctorUseCase');
const UpdateDoctorUseCase = require('./application/use-cases/UpdateDoctorUseCase');
const DeleteDoctorUseCase = require('./application/use-cases/DeleteDoctorUseCase');

const GetEspecialidadesUseCase = require('./application/use-cases/GetEspecialidadesUseCase');
const CreateEspecialidadUseCase = require('./application/use-cases/CreateEspecialidadUseCase');
const UpdateEspecialidadUseCase = require('./application/use-cases/UpdateEspecialidadUseCase');
const DeleteEspecialidadUseCase = require('./application/use-cases/DeleteEspecialidadUseCase');

const GetTratamientosUseCase = require('./application/use-cases/GetTratamientosUseCase');
const CreateTratamientoUseCase = require('./application/use-cases/CreateTratamientoUseCase');
const UpdateTratamientoUseCase = require('./application/use-cases/UpdateTratamientoUseCase');
const DeleteTratamientoUseCase = require('./application/use-cases/DeleteTratamientoUseCase');

const GetCitasUseCase = require('./application/use-cases/GetCitasUseCase');
const CreateCitaUseCase = require('./application/use-cases/CreateCitaUseCase');
const UpdateCitaUseCase = require('./application/use-cases/UpdateCitaUseCase');
const DeleteCitaUseCase = require('./application/use-cases/DeleteCitaUseCase');

const GetPagosUseCase = require('./application/use-cases/GetPagosUseCase');
const CreatePagoUseCase = require('./application/use-cases/CreatePagoUseCase');
const UpdatePagoUseCase = require('./application/use-cases/UpdatePagoUseCase');
const DeletePagoUseCase = require('./application/use-cases/DeletePagoUseCase');

const GetInsumosUseCase = require('./application/use-cases/GetInsumosUseCase');
const CreateInsumoUseCase = require('./application/use-cases/CreateInsumoUseCase');
const UpdateInsumoUseCase = require('./application/use-cases/UpdateInsumoUseCase');
const DeleteInsumoUseCase = require('./application/use-cases/DeleteInsumoUseCase');

const GetMetodosPagoUseCase = require('./application/use-cases/GetMetodosPagoUseCase');
const CreateMetodoPagoUseCase = require('./application/use-cases/CreateMetodoPagoUseCase');
const UpdateMetodoPagoUseCase = require('./application/use-cases/UpdateMetodoPagoUseCase');
const DeleteMetodoPagoUseCase = require('./application/use-cases/DeleteMetodoPagoUseCase');

// Controladores y Routers (Asumiendo que tienes los archivos creados)
const PatientController = require('./infrastructure/Controllers/PatientController');
const createPatientRouter = require('./infrastructure/routes/patientRoutes');
const DoctorController = require('./infrastructure/Controllers/DoctorController');
const createDoctorRouter = require('./infrastructure/routes/doctorRoutes');
const EspecialidadController = require('./infrastructure/Controllers/EspecialidadController');
const createEspecialidadRouter = require('./infrastructure/routes/especialidadRoutes');
const TratamientoController = require('./infrastructure/Controllers/TratamientoController');
const createTratamientoRouter = require('./infrastructure/routes/tratamientoRoutes');
const CitaController = require('./infrastructure/Controllers/CitaController');
const createCitaRouter = require('./infrastructure/routes/citaRoutes');
const PagoController = require('./infrastructure/Controllers/PagoController');
const createPagoRouter = require('./infrastructure/routes/pagoRoutes');
const InsumoController = require('./infrastructure/Controllers/InsumoController');
const createInsumoRouter = require('./infrastructure/routes/insumoRoutes');
const MetodoPagoController = require('./infrastructure/Controllers/MetodoPagoController');
const createMetodoPagoRouter = require('./infrastructure/routes/metodoPagoRoutes');

function createAppContainer(dbPool) {
    const repos = {
        patient: new PostgresPatientRepository(dbPool),
        doctor: new PostgresDoctorRepository(dbPool),
        especialidad: new PostgresEspecialidadRepository(dbPool),
        tratamiento: new PostgresTratamientoRepository(dbPool),
        cita: new PostgresCitaRepository(dbPool),
        pago: new PostgresPagoRepository(dbPool),
        insumo: new PostgresInsumoRepository(dbPool),
        metodoPago: new PostgresMetodoPagoRepository(dbPool)
    };

    return {
        patientRouter: createPatientRouter(new PatientController({ 
            getPatientsUseCase: new GetPatientsUseCase(repos.patient), 
            createPatientUseCase: new CreatePatientUseCase(repos.patient),
            updatePatientUseCase: new UpdatePatientUseCase(repos.patient),
            deletePatientUseCase: new DeletePatientUseCase(repos.patient)
        })),
        doctorRouter: createDoctorRouter(new DoctorController({ 
            getDoctorsUseCase: new GetDoctorsUseCase(repos.doctor), 
            createDoctorUseCase: new CreateDoctorUseCase(repos.doctor),
            updateDoctorUseCase: new UpdateDoctorUseCase(repos.doctor),
            deleteDoctorUseCase: new DeleteDoctorUseCase(repos.doctor)
        })),
        especialidadRouter: createEspecialidadRouter(new EspecialidadController({ 
            getEspecialidadesUseCase: new GetEspecialidadesUseCase(repos.especialidad),
            createEspecialidadUseCase: new CreateEspecialidadUseCase(repos.especialidad),
            updateEspecialidadUseCase: new UpdateEspecialidadUseCase(repos.especialidad),
            deleteEspecialidadUseCase: new DeleteEspecialidadUseCase(repos.especialidad)
        })),
        tratamientoRouter: createTratamientoRouter(new TratamientoController({ 
            getTratamientosUseCase: new GetTratamientosUseCase(repos.tratamiento),
            createTratamientoUseCase: new CreateTratamientoUseCase(repos.tratamiento),
            updateTratamientoUseCase: new UpdateTratamientoUseCase(repos.tratamiento),
            deleteTratamientoUseCase: new DeleteTratamientoUseCase(repos.tratamiento)
        })),
        citaRouter: createCitaRouter(new CitaController({ 
            getCitasUseCase: new GetCitasUseCase(repos.cita),
            createCitaUseCase: new CreateCitaUseCase(repos.cita),
            updateCitaUseCase: new UpdateCitaUseCase(repos.cita),
            deleteCitaUseCase: new DeleteCitaUseCase(repos.cita)
        })),
        pagoRouter: createPagoRouter(new PagoController({ 
            getPagosUseCase: new GetPagosUseCase(repos.pago),
            createPagoUseCase: new CreatePagoUseCase(repos.pago),
            updatePagoUseCase: new UpdatePagoUseCase(repos.pago),
            deletePagoUseCase: new DeletePagoUseCase(repos.pago)
        })),
        insumoRouter: createInsumoRouter(new InsumoController({ 
            getInsumosUseCase: new GetInsumosUseCase(repos.insumo),
            createInsumoUseCase: new CreateInsumoUseCase(repos.insumo),
            updateInsumoUseCase: new UpdateInsumoUseCase(repos.insumo),
            deleteInsumoUseCase: new DeleteInsumoUseCase(repos.insumo)
        })),
        metodoPagoRouter: createMetodoPagoRouter(new MetodoPagoController({ 
            getMetodosPagoUseCase: new GetMetodosPagoUseCase(repos.metodoPago),
            createMetodoPagoUseCase: new CreateMetodoPagoUseCase(repos.metodoPago),
            updateMetodoPagoUseCase: new UpdateMetodoPagoUseCase(repos.metodoPago),
            deleteMetodoPagoUseCase: new DeleteMetodoPagoUseCase(repos.metodoPago)
        }))
    };
}

module.exports = createAppContainer;