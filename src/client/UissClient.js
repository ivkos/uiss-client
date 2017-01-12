const rp = require('request-promise');
const cheerio = require('cheerio');
const Urls = require('./support/Urls');
const StudentInformationPageParser = require('./page-parsers/StudentInformationPageParser');
const GradesPageParser = require('./page-parsers/GradesPageParser');
const CertsPageParser = require('./page-parsers/CertsPageParser');
const UissDatabaseException = require('../exceptions/UissDatabaseException');
const InvalidLoginException = require('../exceptions/InvalidLoginException');
const ParseException = require('../exceptions/ParseException');

const USER_AGENT = "UISS Client";

module.exports = class UissClient {
    constructor(cookieJar) {
        this.request = rp.defaults({
            jar: cookieJar,
            baseUrl: Urls.URL_BASE,
            transform: body => cheerio.load(body),
            headers: {
                "User-Agent": USER_AGENT
            }
        });
    }

    /**
     * @returns {Promise.<Student>}
     */
    getStudent() {
        return this.request.get(Urls.URL_INFO).then(StudentInformationPageParser.parse);
    }

    /**
     * @returns {Promise.<Grade[]>}
     */
    getGrades() {
        return this.request.get(Urls.URL_MARKS).then(GradesPageParser.parse);
    }

    /**
     * @returns {Promise.<Cert[]>}
     */
    getCerts() {
        return this.request.get(Urls.URL_CERTS).then(CertsPageParser.parse);
    }

    /**
     * @returns {Promise.<$>}
     */
    logout() {
        return this.request.get(Urls.URL_LOGOUT);
    }

    /**
     * @param egn
     * @param facultyId
     * @returns {Promise.<UissClient>}
     */
    static login(egn, facultyId) {
        const jar = rp.jar();

        return rp.post({
            url: Urls.URL_BASE,

            jar: jar,

            maxRedirects: 2,
            followAllRedirects: true,

            transform: (body, response) => response,

            form: {
                egn: egn,
                fn: facultyId
            },

            headers: {
                "User-Agent": USER_AGENT
            }
        }).then(response => {
            const body = response.body;

            if (body.includes("Няма връзка с базата от данни.")) {
                return Promise.reject(new UissDatabaseException())
            }

            if (body.includes("Студент с въведеното ЕГН и/или факултетен номер")) {
                return Promise.reject(new InvalidLoginException("Invalid egn or facultyId"));
            }

            if (!body.includes(Urls.URL_LOGOUT)) {
                return Promise.reject(new ParseException("Could not login"))
            }

            return Promise.resolve(new UissClient(jar));
        });
    }
};
