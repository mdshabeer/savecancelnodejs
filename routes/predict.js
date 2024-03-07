var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get('/',async function(req, res, next) {
  const defaultData = { 
    "Inputs": {
      "input1": [
        {
          "tr_num": 0,
          "trans_date_trans_time": "6/21/2020 12:14",
          "cc_num": 2290000000000000.0,
          "merchant": "fraud_Kirlin and Sons",
          "category": "personal_care",
          "amt": 2.86,
          "first": "Jeff",
          "last": "Elliott",
          "gender": "M",
          "street": "351 Darlene Green",
          "city": "Columbia",
          "state": "SC",
          "zip": 29209,
          "lat": 33.9659,
          "long": -80.9355,
          "city_pop": 333497,
          "job": "Mechanical engineer",
          "dob": "3/19/1968",
          "trans_num": "2da90c7d74bd46a0caf3777415b3ebd3",
          "unix_time": 1371816865,
          "merch_lat": 33.986391,
          "merch_long": -81.200714
        },
        {
          "tr_num": 1,
          "trans_date_trans_time": "6/21/2020 12:14",
          "cc_num": 2290000000000000.0,
          "merchant": "fraud_Sporer-Keebler",
          "category": "personal_care",
          "amt": 29.84,
          "first": "Joanne",
          "last": "Williams",
          "gender": "F",
          "street": "3638 Marsh Union",
          "city": "Altonah",
          "state": "UT",
          "zip": 84002,
          "lat": 40.3207,
          "long": -110.436,
          "city_pop": 302,
          "job": "Sales professional, IT",
          "dob": "1/17/1990",
          "trans_num": "324cc204407e99f51b0d6ca0055005e7",
          "unix_time": 1371816873,
          "merch_lat": 39.450497999999996,
          "merch_long": -109.960431
        },
        {
          "tr_num": 2,
          "trans_date_trans_time": "6/21/2020 12:14",
          "cc_num": 2290000000000000.0,
          "merchant": "fraud_Swaniawski, Nitzsche and Welch",
          "category": "health_fitness",
          "amt": 41.28,
          "first": "Ashley",
          "last": "Lopez",
          "gender": "F",
          "street": "9333 Valentine Point",
          "city": "Bellmore",
          "state": "NY",
          "zip": 11710,
          "lat": 40.6729,
          "long": -73.5365,
          "city_pop": 34496,
          "job": "Librarian, public",
          "dob": "10/21/1970",
          "trans_num": "c81755dbbbea9d5c77f094348a7579be",
          "unix_time": 1371816893,
          "merch_lat": 40.49581,
          "merch_long": -74.196111
        }
      ]
    }, 
    "GlobalParameters": {}
  };
  const data = Object.assign(defaultData, req.body);
  //const data = req.body; // The data to send to your endpoint
   const endpoint = "http://172.170.62.22:80/api/v1/service/savecancelep/score";
   const apiKey = "Kud4KD2OX4nSGBgEAuEZaBAhc0OhUvFU";
   const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
   };
   try {
      const { data: prediction } = await axios.post(endpoint, data, { headers });
      res.send(prediction);
   } catch (e) {
      res.status(500).send(e);
   }
});

module.exports = router;
