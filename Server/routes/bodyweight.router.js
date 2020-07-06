const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { response } = require('express');

router.get('/', (req, res) => {
  console.log('In GET /api/bodyweight');
  pool.query('SELECT * from "bodyweight"').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/bodyweight', error)
    res.sendStatus(500);
  });
})

router.get('/:id', (req, res) => {
  console.log(`In GET /api/bodyweight/ID`);
  let id = req.params.id;
  const queryText = `SELECT * FROM bodyweight WHERE id=$1`;
  pool
    .query(queryText, [id])
    .then((result) => {      
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error GET /api/bodyweight/ID', error)
      res.sendStatus(500);
    });
});

module.exports = router;