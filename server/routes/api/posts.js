const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// GET
router.get('/', (req, res) => {
  res.send("Hello");
});


