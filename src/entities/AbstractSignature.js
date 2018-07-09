const moment = require('moment');

module.exports = class AbstractSignature
{
    constructor(signeeName, date) {
        this.signeeName = signeeName;
        this.date = date;
    }

    /**
     * @returns {string}
     */
    get signeeName() {
        return this._signeeName;
    }

    /**
     * @param {string} value
     */
    set signeeName(value) {
        this._signeeName = value;
    }

    /**
     * @returns {moment}
     */
    get date() {
        return this._date;
    }

    /**
     * @param {moment} value
     */
    set date(value) {
        this._date = value;
    }
};