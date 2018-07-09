const moment = require('moment');
const Cert = require('../../entities/Cert');
const Signature = require('../../entities/Signature');
const EmptySignature = require('../../entities/EmptySignature');
const ParseException = require('../../exceptions/ParseException');

module.exports = class CertsPageParser
{
    /**
     * @param $
     * @returns {Cert[]}
     */
    static parse($) {
        const semesterSubtitles = $('.subtitle', '.list_table').parent();

        const certs = [];

        semesterSubtitles.each((i, e) => {
            const current = $(e);
            const next = $(semesterSubtitles[i + 1]);

            const semesterMatches = current.text().trim().match(/^Семестър (\d+)$/);
            if (semesterMatches == null) {
                throw new ParseException("Could not parse certs for semester: " + current.text());
            }

            const semesterId = semesterMatches[1];

            current.nextUntil(next).each((i, e) => {
                const fields = $('td', $(e)).map((i, e) => $(e).text().trim());

                const theCert = new Cert();

                theCert.certId = parseInt(fields[0]);
                theCert.subjectName = fields[1];
                theCert.semesterId = parseInt(semesterId);

                [
                    theCert.lecturesSignature,
                    theCert.seminarsSignature,
                    theCert.labsSignature,
                    theCert.practiceSignature,
                    theCert.projectSignature
                ] = fields.slice(2, 7).get().map(s => CertsPageParser.parseSignature(s));


                return certs.push(theCert);
            })
        });

        return certs;
    }

    /**
     * @param text
     * @returns {Signature|undefined}
     */
    static parseSignature(text) {
        if (text === "-") return undefined;

        if (text === "Не") return new EmptySignature();

        const matches = text.match(/^(.+), (\d{2}\.\d{2}\.\d{4})$/i);

        if (matches === null) {
            throw new ParseException("Could not parse cert: " + text);
        }

        const [professorName, date] = [matches[1], moment(matches[2], "DD.MM.YYYY")];

        return new Signature(professorName, date);
    }
};