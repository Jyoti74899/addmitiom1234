const { default: mongoose } = require("mongoose")

const TecherShema = new mongoose.shema(
    {
        name: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },

    }, {
    timestamps: true
})
const TeacherModel = mongoose.model('teacher', TecherShema)

module.exports = TeacherModel
