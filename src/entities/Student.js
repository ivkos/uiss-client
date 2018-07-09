module.exports = class Student
{
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
     * @returns {string}
     */
    get facultyId() {
        return this._facultyId;
    }

    /**
     * @param {string} value
     */
    set facultyId(value) {
        this._facultyId = value;
    }

    /**
     * @returns {string}
     */
    get facultyName() {
        return this._facultyName;
    }

    /**
     * @param {string} value
     */
    set facultyName(value) {
        this._facultyName = value;
    }

    /**
     * @returns {string}
     */
    get major() {
        return this._major;
    }

    /**
     * @param {string} value
     */
    set major(value) {
        this._major = value;
    }

    /**
     * @returns {string}
     */
    get degreeType() {
        return this._degreeType;
    }

    /**
     * @param {string} value
     */
    set degreeType(value) {
        this._degreeType = value;
    }

    /**
     * @returns {string}
     */
    get email() {
        return this._email;
    }

    /**
     * @param {string} value
     */
    set email(value) {
        this._email = value;
    }

    /**
     * @returns {string}
     */
    get status() {
        return this._status;
    }

    /**
     * @param {string} value
     */
    set status(value) {
        this._status = value;
    }

    /**
     * @returns {number}
     */
    get semester() {
        return this._semester;
    }

    /**
     * @param {number} value
     */
    set semester(value) {
        this._semester = value;
    }

    /**
     * @returns {number}
     */
    get completedSemester() {
        return this._completedSemester;
    }

    /**
     * @param {number} value
     */
    set completedSemester(value) {
        this._completedSemester = value;
    }

    /**
     * @returns {number}
     */
    get stream() {
        return this._stream;
    }

    /**
     * @param {number} value
     */
    set stream(value) {
        this._stream = value;
    }

    /**
     * @returns {number}
     */
    get group() {
        return this._group;
    }

    /**
     * @param {number} value
     */
    set group(value) {
        this._group = value;
    }
};