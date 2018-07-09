const Signature = require('./Signature');
const EmptySignature = require('./EmptySignature');

module.exports = class Cert
{
    constructor() {
        /**
         * @type {{lectures, seminars, labs, practice, project}}
         * @private
         */
        this._signatures = {};
    }

    /**
     * @returns {number}
     */
    get certId() {
        return this._certId;
    }

    /**
     * @param {number} value
     */
    set certId(value) {
        this._certId = value;
    }

    /**
     * @returns {number}
     */
    get semesterId() {
        return this._semesterId;
    }

    /**
     * @param {number} value
     */
    set semesterId(value) {
        this._semesterId = value;
    }

    /**
     * @returns {string}
     */
    get subjectName() {
        return this._subjectName;
    }

    /**
     * @param {string} value
     */
    set subjectName(value) {
        this._subjectName = value;
    }

    /**
     * @returns {{lectures, seminars, labs, practice, project}}
     */
    get signatures() {
        return this._signatures;
    }

    /**
     * @returns {Signature|EmptySignature|undefined}
     */
    get lecturesSignature() {
        return this._signatures.lectures;
    }

    /**
     * @param {Signature|EmptySignature|undefined} value
     */
    set lecturesSignature(value) {
        this._signatures.lectures = value;
    }

    /**
     * @returns {Signature|EmptySignature|undefined}
     */
    get seminarsSignature() {
        return this._signatures.seminars;
    }

    /**
     * @param {Signature|EmptySignature|undefined} value
     */
    set seminarsSignature(value) {
        this._signatures.seminars = value;
    }

    /**
     * @returns {Signature|EmptySignature|undefined}
     */
    get labsSignature() {
        return this._signatures.labs;
    }

    /**
     * @param {Signature|EmptySignature|undefined} value
     */
    set labsSignature(value) {
        this._signatures.labs = value;
    }

    /**
     * @returns {Signature|EmptySignature|undefined}
     */
    get practiceSignature() {
        return this._signatures.practice;
    }

    /**
     * @param {Signature|EmptySignature|undefined} value
     */
    set practiceSignature(value) {
        this._signatures.practice = value;
    }

    /**
     * @returns {Signature|EmptySignature|undefined}
     */
    get projectSignature() {
        return this._signatures.project;
    }

    /**
     * @param {Signature|EmptySignature|undefined} value
     */
    set projectSignature(value) {
        this._signatures.project = value;
    }
};