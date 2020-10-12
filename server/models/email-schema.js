const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    daily: {
        type: Boolean,
        validate() {
            return this.weekly || this.daily;
        }
    },
    weekly: {
        type: Boolean,
        validate() {
            return this.weekly || this.daily;
        }
    }

})

module.exports = mongoose.model("emailSchema", emailSchema)
