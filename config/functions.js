var moment = require('moment')
var Handlebars = require('handlebars');

exports.converter = (timetoconvert) => { 
    moment.locale('es');
    var time = new moment(timetoconvert);
    var untilNow = time.fromNow(true);
    return untilNow;
};

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    console.log("sosreputio")
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});