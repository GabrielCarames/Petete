const mongoose = require('mongoose');
var url = "mongodb+srv://GabrielCarames:Ab8azzEsDDsh4iCO@clusterparches.npjim.mongodb.net/phacebookdb?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.catch(error => console.log(error))
.then(db => console.log("Base de datos conectada"))
