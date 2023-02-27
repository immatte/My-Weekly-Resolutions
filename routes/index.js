var express = require('express');
var router = express.Router();
var db = require('../model/helper.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { message: 'Hello from the backend' });
});

router.get("/days", (req, res, next) => { //IT WORKS
   db("SELECT * FROM days ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/days/:day_id", (req, res) => { //IT DOESN'T WORK
  db(`SELECT * FROM days WHERE id = ${dayId}`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.get("/days/:day_id/resolutions", (req, res) => {//IT WORKS BAD
  //BECAUSE IT RETURNS ALL THE RESOLUTIONS
    db("SELECT * FROM resolutions ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//THE POST DOESN'T WORK
router.post("/days/:day_id/resolutions", async (req, res) => { //do I need the day_id? 
  
  let { text, complete }= req.body; 
  let day_id = req.params.day_id;
  let sql = `
    INSERT INTO resolutions ( day_id, text, complete)
    VALUES ( ${day_id}, '${text}', ${complete}); 
  `; //don't forget to put '' if they are strings.

  try {
    await db(sql);
   
    let results = await db("SELECT * FROM resolutions");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//:r_id it was written it like this
router.delete("/days/:day_id/resolutions/:r_id", async (req, res) => {
    let rId = req.params.r_id;
  
    try {
      // See if resolution exists
      let results = await db(`SELECT * FROM resolutions WHERE id = ${rId}`);
      if (results.data.length === 0) {
        // Resolution not found
        res.status(404).send({ error: "Resolution not found" });
      } else {
        // Resolution found! Now delete it!
        await db(`DELETE FROM resolutions WHERE id = ${rId}`);
        // Return updated array of resolutions
        results = await db("SELECT * FROM resolutions");
        res.send(results.data);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

 // :r_id it was written like that
router.put("/days/:day_id/resolutions/:r_id", async (req, res) => {
  let rId = req.params.r_id;

  try {
    
    let results = await db(`SELECT * FROM resolutions WHERE id = ${rId}`);
    if (results.data.length === 0) {
      // Resolution not found
      res.status(404).send({ error: "Resolution not found" });
    } else {
      // Resolution found!
      let { day_id, text, complete } = req.body;
      let sql = `
        UPDATE resolutions 
        SET day_id = ${day_id}, text = '${text}', complete = ${complete}
        WHERE id = ${rId}
      `;
      // Do the UPDATE
      await db(sql);
      
      let results = await db("SELECT * FROM resolutions");
      res.send(results.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});



module.exports = router;



