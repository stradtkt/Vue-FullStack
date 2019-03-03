const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(parser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App listening on port ${port}`));

