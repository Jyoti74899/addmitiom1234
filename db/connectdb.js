const mongoose = require("mongoose")

const connectdb = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/addmitiom1234')
        .then(() => {
            console.log("connecting succesfully")
        }).catch(() => {
            console.log("error")
        })
}

module.exports = connectdb