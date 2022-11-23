const Country = require("../models/CountryData");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const countryInfo = await Country.updateMany(
      {
         region: req.body.region ,
        // "countries.name":"Canada"
     },
      {$pull: {
              countries: {
                 _id:"637de5618bfed6a65fd058b8",
              },
          }
      }
    );

console.log(countryInfo);
    if (countryInfo) {
      // for(let i=0; i<body.countries.length; i++){
      //    newcountries.push(body.countries[i]);
      // }

  await Country.updateOne(
    { _id: countryInfo._id },
    {$pull: {
              countries: {
                //  _id:"637de5618bfed6a65fd058b9",
              },
          }
      }
      // {
      //   $push: {
      //     countries: req.body.countries
      //   },
      // }
  );
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
