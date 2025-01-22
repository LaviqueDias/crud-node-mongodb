var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await db.find();
  res.render('index', { title: 'crud-node-mongdb', result });
});

router.post("/save", async (req, res) => {
  const customer = req.body;
  const result = await db.insert(customer);
  console.log(result);
  res.redirect('/');

})

router.post("/delete", async (req, res) => {
  const id = req.body.id;
  const result = await db.remove(id);
  console.log(result);
  res.redirect('/');

})

router.post("/update", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const result = await db.update(id, name, age);
  console.log(result);
  res.redirect('/');

})


module.exports = router;
