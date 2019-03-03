const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// GET
router.get('/', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

router.delete('/:id', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
});

async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect('mongodb://stradtkt:abcd1234@ds159025.mlab.com:59025/vue_express', {
    useNewUrlParser: true
  });
  return client.db('vue_express').collection('posts');
}

module.exports = router;
