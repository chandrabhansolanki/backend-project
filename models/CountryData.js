const mongoose = require('mongoose')
const {Schema} = mongoose

const CountrySchema = new Schema({
    region:{type: String,unique: true,},
    regionCode: {type: String},
    countries: [
        {
            name: {type: String, unique:true},
            code:{type:String, unique:true },
            flag:{type:String, unique:true },
            alpha_3_code:{type:String, unique:true }
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