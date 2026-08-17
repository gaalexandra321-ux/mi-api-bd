const dbPool = require('./infrastructure/database/dbFactory');
const PostgresStudentRepository = require('./infrastructure/repositories/PostgresStudentRepository');

const studentRepository = new PostgresStudentRepository(dbPool);

module.exports = {
  studentRepository,
};