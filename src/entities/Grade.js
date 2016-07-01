module.exports = class Grade {
    /**
     * @returns {number}
     */
    get gradeId() {
        return this._gradeId;
    }

    /**
     * @param {number} value
     */
    set gradeId(value) {
        this._gradeId = value;
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * @param {string} value
     */
    set name(value) {
        this._name = value;
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
    get controlForm() {
        return this._controlForm;
    }

    /**
     * @param {string} value
     */
    set controlForm(value) {
        this._controlForm = value;
    }

    /**
     * @returns {number}
     */
    get gradeNumeric() {
        return this._gradeNumeric;
    }

    /**
     * @param {number} value
     */
    set gradeNumeric(value) {
        this._gradeNumeric = value;
    }

    /**
     * @returns {string}
     */
    get gradeText() {
        return this._gradeText;
    }

    /**
     * @param {string} value
     */
    set gradeText(value) {
        this._gradeText = value;
    }

    /**
     * @returns {Moment}
     */
    get lastUpdate() {
        return this._lastUpdate;
    }

    /**
     * @param {Moment} value
     */
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
};