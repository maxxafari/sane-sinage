// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const __PROJECT_ROOT = path.join(__dirname, '../');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.get('/api/test', (req, res) => {
  return res.json({ test: 'It works' });
});

app.get('/api/*', (req, res) => {
  return res.status(404).send('This is not the path youre looking for...');
});

// link all static files
app.use(express.static(path.join(__PROJECT_ROOT, 'dist')));

app.get('*', (req, res) => {
  // return 404 and not index when reqesting missing .js .img and so on
  const fileEnding =
    req._parsedOriginalUrl.pathname.split('/').pop().split('.')[1] || '';
  if (!['', '.html'].includes(fileEnding)) return res.res.sendStatus(404);

  return res.sendFile(path.join(__PROJECT_ROOT, 'dist', '__app.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `backend server is listening on port: ${process.env.PORT || 3001}

    `
  );
});
