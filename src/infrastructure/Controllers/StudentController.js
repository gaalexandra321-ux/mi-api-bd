class StudentController {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async getStudents(req, res) {
    try {
      const students = await this.studentRepository.getAll();
      res.status(200).json({ success: true, data: students });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async createStudent(req, res) {
    try {
      const newStudent = await this.studentRepository.create(req.body);
      res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}

module.exports = StudentController;