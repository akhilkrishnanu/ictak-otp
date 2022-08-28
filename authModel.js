const mongoose = require("mongoose")
const DB = process.env.MONGO_URI
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
 console.log("Database Connection Successful")
}).catch((err) => {
 console.log(err)
})

const schema = mongoose.Schema

var Schema = new schema({
 email: String,
 otp:Number
}, {
 versionKey: false
})

var Data = mongoose.model('credentials', Schema)
module.exports = Data