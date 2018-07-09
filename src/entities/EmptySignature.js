const Signature = require('./AbstractSignature');
const moment = require('moment');

module.exports = class EmptySignature extends Signature
{
    constructor() {
        super("Незаверен", moment(null));
    }
};