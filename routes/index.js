var express = require('express');
var router = express.Router();
var db = require('../model/helper.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { message: 'Hello from the backend' });
});

router.get("/resolutions", (req, res) => {
  // Send back the full list of daily resolutions
  db("SELECT * FROM weeklyResolutions ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// const allInfo = {
//   title: formData.title,
//    reward: formData.reward,
//   resolutions: allResolutions,
// };

router.post("/resolutions", async (req, res) => { //I can change the name.
  //to differenciate it from weekly resolutions, I will call it resolutions/daily
  //this is what I have to type in the server to use this table. I can call it as I want
  //this way I know that the post is going to add that information in that table
  //and not in the weekly resolutions table. I have to add another router.post for this.
  //al final puse las dailyresolutions dentro de weekly resolutions y estoy intentando hacer un super post 
  
  let { day, description, weekId, title, reward }= req.body; //see what I wrote in name in NewResolutionForm.js
  let sql = `
    INSERT INTO dailyresolutions (day, description, weekId)
    VALUES ('${day}', '${description}', ${weekId}); INSERT INTO weeklyresolutions (title, reward)
    VALUES ('${title}', '${reward}')
  `; //don't forget to put '' if they are strings.

  try {
    await db(sql);
    // Return updated array of items
    let results = await db("SELECT * FROM dailyresolutions", "SELECT * FROM weeklyresolutions");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
//});

//router.post("/resolutions/weekly", async (req, res) => { //I can change the name.
  //to differenciate it from weekly resolutions, I will call it resolutions/daily
  //this is what I have to type in the server to use this table. I can call it as I want
  //this way I know that the post is going to add that information in that table
  //and not in the weekly resolutions table. I have to add another router.post for this. 
  
  // let { title, reward } = req.body; //see what I wrote in name in NewResolutionForm.js
  // let sql = `
  //   INSERT INTO weeklyresolutions (title, reward)
  //   VALUES ('${title}', '${reward}')
  // `; //don't forget to put '' if they are strings.

  // try {
  //   await db(sql);
  //   // Return updated array of items
  //   let results = await db("SELECT * FROM weeklyresolutions");
  //   res.send(results.data);
  // } catch (err) {
  //   res.status(500).send({ error: err.message });
  // }
});









// router.put("/resolutions/:resolution_id", async (req, res) => {
//   let resolutionId = req.params.todo_id;

//   try {
//     // See if resolution exists
//     let results = await db(`SELECT * FROM resolutions WHERE id = ${resolutionId}`);
//     if (results.data.length === 0) {
//       // Resolution not found
//       res.status(404).send({ error: "Resolution not found" });
//     } else {
//       // Resolution found!
//       let { text, complete } = req.body;
//       let sql = `
//         UPDATE resolutions 
//         SET text = '${text}', complete = ${complete}
//         WHERE id = ${resolutionId}
//       `;
//       // Do the UPDATE
//       await db(sql);
//       // Return updated array of items
//       let results = await db("SELECT * FROM resolutions");
//       res.send(results.data);
//     }
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

// router.delete("/resolutions/:resolution_id", async (req, res) => {
//   let resolutionId = req.params.resolution_id;

//   try {
//     // See if resolution exists
//     let results = await db(`SELECT * FROM resolutions WHERE id = ${resolutionId}`);
//     if (results.data.length === 0) {
//       // Resolution not found
//       res.status(404).send({ error: "Resolution not found" });
//     } else {
//       // Resolution found! Now delete it!
//       await db(`DELETE FROM resolutions WHERE id = ${resolutionId}`);
//       // Return updated array of resolutions
//       results = await db("SELECT * FROM resolutions");
//       res.send(results.data);
//     }
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

module.exports = router;



