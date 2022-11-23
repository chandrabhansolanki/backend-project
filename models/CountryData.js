const mongoose = require('mongoose')
const {Schema} = mongoose

const CountrySchema = new Schema({
    region:{type: String,unique: true,},
    regionCode: {type: String},
    countries: [
        {
            name: {type: String},
            code:{type:String},
            flag:{type:String},
            alpha_3_code:{type:String}
        }
    ],
    organization: {type:String},
    created:{ type:Date,
        default:Date.now},
    createdBy:{type:String},
    updated: {type:String},
    updatedBy:{type:String}
})

const country = mongoose.model("country",CountrySchema)
module.exports = country