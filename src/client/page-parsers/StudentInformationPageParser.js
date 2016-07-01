const Student = require('../../entities/Student');
const ParseException = require('../../exceptions/ParseException');

module.exports = class StudentInformationPageParser {
    /**
     * @param $
     * @returns {Promise.<Student>}
     */
    static parse($) {
        const student = new Student();

        student.name = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(1) > td:nth-child(3)').text();
        student.facultyId = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(2) > td:nth-child(2)').text();

        // Really simple check that would probably fail if layout ever changes
        if (!student.name || !student.facultyId) {
            return Promise.reject(new ParseException("Could not parse student name or faculty number"));
        }

        student.facultyName = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(3) > td:nth-child(2)').text();

        student.major = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(4) > td:nth-child(2)').text();
        student.degreeType = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(5) > td:nth-child(2)').text();

        student.email = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(8) > td:nth-child(2)').text();

        student.status = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(1) > td:nth-child(6)').text();

        student.semester = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(2) > td:nth-child(4)').text();
        student.completedSemester = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(3) > td:nth-child(4)').text();

        student.stream = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(4) > td:nth-child(4)').text();
        student.group = $('body > table > tr:nth-child(2) > td > table > tr > td > table > tr:nth-child(1) > td > table > tr:nth-child(5) > td:nth-child(4)').text();

        // cast numeric types to numbers
        student.semester = parseInt(student.semester);
        student.completedSemester = parseInt(student.completedSemester);
        student.stream = parseInt(student.stream);
        student.group = parseInt(student.group);

        return Promise.resolve(student);
    }
};