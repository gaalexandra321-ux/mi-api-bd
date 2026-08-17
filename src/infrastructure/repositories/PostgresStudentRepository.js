class PostgresStudentRepository {
  constructor(dbPool) {
    this.dbPool = dbPool;
  }

  async getAll() {
    const result = await this.dbPool.query('SELECT id, code, name, email FROM estudiantes');
    return result.rows;
  }

  async create(studentData) {
    const { code, name, email } = studentData;
    const result = await this.dbPool.query(
      'INSERT INTO estudiantes (code, name, email) VALUES ($1, $2, $3) RETURNING *',
      [code, name, email]
    );
    return result.rows[0];
  }
}

module.exports = PostgresStudentRepository;