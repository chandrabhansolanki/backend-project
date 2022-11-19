const Country = require('../models/CountryData')
const express = require("express");
const router = express.Router()



router.get('/',(req, res) => {
    obj = {
        a: 'chandra',
        number:17
    }
    res.json(obj)
})
module.exports = router
 
