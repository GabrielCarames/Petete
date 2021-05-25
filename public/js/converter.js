function convertDate(datetime){
    moment.locale('es')
    var time = moment(datetime);
    var untilNow = time.fromNow(true);
    return untilNow;
}