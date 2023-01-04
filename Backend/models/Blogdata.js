const mongoose = require('mongoose')

const Blogdata = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Blogdata', Blogdata)