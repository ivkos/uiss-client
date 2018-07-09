const moment = require('moment');
const Student = require('../../entities/Student');
const Grade = require('../../entities/Grade');
const ParseException = require('../../exceptions/ParseException');

module.exports = class GradesPageParser
{
    /**
     * @param $
     * @returns {Grade[]}
     */
    static parse($) {
        const semesterSubtitles = $('.subtitle', '.list_table').parent();

        const grades = [];

        semesterSubtitles.each((i, e) => {
            // Skip the last "subtitle" that is a footer
            if (i >= semesterSubtitles.length - 1)
                return;

            const current = $(e);
            const next = $(semesterSubtitles[i + 1]);

            const semesterMatches = current.text().trim().match(/^Семестър (\d+)$/);
            if (semesterMatches == null) {
                throw new ParseException("Could not parse grades for semester: " + current.text());
            }

            const semesterId = semesterMatches[1];

            current.nextUntil(next).each((i, e) => {
                const fields = $('td', $(e)).map((i, e) => $(e).text().trim());

                const theGrade = new Grade();

                theGrade.gradeId = parseInt(fields[0]);
                theGrade.name = fields[1];
                theGrade.semesterId = parseInt(semesterId);

                if (fields[2] === "Няма") {
                    grades.push(theGrade);
                    return;
                }

                theGrade.controlForm = fields[2];

                if (fields[3] === "-") {
                    grades.push(theGrade);
                    return;
                }

                const gradeDescriptionMatches = fields[3].match(/^(.+)\((\d)\)$/);
                if (gradeDescriptionMatches == null) {
                    throw new ParseException("Could not parse grade: " + fields[3]);
                }

                theGrade.gradeText = gradeDescriptionMatches[1];
                theGrade.gradeNumeric = parseInt(gradeDescriptionMatches[2]);

                if (fields[4] !== undefined) {
                    theGrade.lastUpdate = moment(fields[4], "DD.MM.YYYY");
                }

                return grades.push(theGrade);
            })
        });

        return grades;
    }
};