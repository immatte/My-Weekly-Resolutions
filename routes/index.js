var express = require('express');
var router = express.Router();
var db = require('../model/helper.js');
const { ensureUserLoggedIn } = require('../middleware/guards')

/**
 * AUTHENTICATION GET /
 **/

router.get('/', function(req, res) {
  res.send({ message: 'Welcome to the AuthAuth homepage! Try /users' });
});


/**
* GET /members-only
**/

router.get('/members-only', ensureUserLoggedIn, function(req, res) {
  res.send({ message: 'Here is your Members Only content from the server...' });
});




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

router.get("/days/:day_id", (req, res) => { //IT WORKS
  let day_id = req.params.day_id;
  db(`SELECT * FROM days WHERE id = ${day_id}`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

//get RESOLUTIONS
router.get("/resolutions", (req, res) => {//IT WORKS 
    db("SELECT * FROM resolutions ORDER BY day_id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//get RESOLUTIONS by day
router.get("/days/:day_id/resolutions", (req, res) => {//IT WORKS 
  let day_id = req.params.day_id;
  db(`SELECT * FROM resolutions where day_id = ${day_id} ORDER BY day_id ASC ;`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

//get RESOLUTIONS by user
router.get("/resolutions/:user", (req, res) => {//IT WORKS 
  let userId = req.params.user;
  db(`SELECT * FROM resolutions where userId = ${userId} ORDER by day_id ASC;`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});


//THE POST WORKS on APP but not on POSTMAN
router.post("/days/:day_id/resolutions", async (req, res) => { //do I need the day_id? 
  
  let { text, complete, userId}= req.body; 
  let day_id = req.params.day_id;
  let sql = `
    INSERT INTO resolutions ( day_id, text, complete,userId)
    VALUES ( ${day_id}, "${text}", ${complete}, ${userId}); 
  `; //don't forget to put '' if they are strings.

  try {
    await db(sql);
   
    let results = await db("SELECT * FROM resolutions");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//:r_id it was written like this
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
        SET day_id = ${day_id}, text = "${text}", complete = ${complete}
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



