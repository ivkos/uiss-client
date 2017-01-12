const AbstractSignature = require('./AbstractSignature');

module.exports = class Signature extends AbstractSignature {
    constructor(signeeName, date) {
        super(signeeName, date);
    }
};