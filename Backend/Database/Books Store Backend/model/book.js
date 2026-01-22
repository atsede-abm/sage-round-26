const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({

    title: {type:String, required:true},
    author: {type:String, required:true},
    year: {type:Number, min : 0,max : 3030}
})
const Book =mongoose.model('Book',bookSchema)
module.exports = Book