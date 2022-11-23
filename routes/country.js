const Country = require("../models/CountryData");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  // obj = {
  //     region : "AMERICAS",
  // regionCode : "AMERICAS",
  // countries : [
  //     {
  //         name : "Canada",
  //         code : "CA",
  //         flag : "https://console-skyview-dev.s3.amazonaws.com/console-master/flags/ca.svg",
  //         alpha_3_code : "CAN"
  //     }
  // ]
  // }
  // console.log(req.body);
  try {
    const countryInfo = await Country.findOne(
      { region: req.body.region }

      // {$pull: {
      //         countries: {
      //            _id:"6379dd4231ff6cf0abc666b2"
      //         },
      //     }
      // }
    );
    let newcountries = {}
    // console.log(countryInfo.countries[0].name);
    if (countryInfo) {
      let data = req.body.countries.map((item) => ({
        name: item?.name,
        code: item?.code,
        flag: item?.flag,
        alpha_3_code: item?.alpha_3_code,
      }));

      var body = req.body
      console.log(data[0].name);
      await Country.updateOne(
        { _id: countryInfo._id },
        {
          $push: {
            countries: {
                "name" : body,
            "code" : "EC",
            "flag" : "https://console-skyview-dev.s3.amazonaws.com/console-master/flags/ec.svg",
            "alpha_3_code" : "ECU"
            },
          },
        }
      );
     
      // {
      //     $push: {
      //         countries : {
      //             "name" : "United States",
      //             "code" : "US",
      //             "flag" : "https://console-skyview-dev.s3.amazonaws.com/console-master/flags/us.svg",
      //             "alpha_3_code" : "USA"
      //         }
      //     }
      // }
    } else if (!countryInfo) {
      await Country.create({
        region: req.body.region,
        regionCode: req.body.regionCode,
        countries: req.body.countries,
           
        organization: req.body.organization,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        created: req.body.created,
      });
    }
    // if(countryInfo){
    //     return res.status(400).json({error:'region already exist'})

    // }

    // (req.body)
    // countryInfo.save()
    // console.log(req.body);
    res.json(countryInfo);
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = router;
