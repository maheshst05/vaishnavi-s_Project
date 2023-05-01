const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://vaishnavi:vaishnavi@cluster0.5nytmpp.mongodb.net/project?retryWrites=true&w=majority")


module.exports={
    connection
}

//error yetoy re