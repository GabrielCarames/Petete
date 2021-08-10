const mongoose = require('mongoose');
var url = "mongodb+srv://dbparchesarmas:5tTkT0IWxkgwCQpy@clusterparches.npjim.mongodb.net/dbparchesarmas?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.catch(error => console.log(error))
.then(db => console.log("Base de datos conectada"))
