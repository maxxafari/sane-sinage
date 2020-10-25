const express = require('express');

const apiRouter = express.Router();

// /api/me
apiRouter.get('/me', (req, res) => {
  // this return the currently loged in user
  return res.json({ name: 'max' });
});

// defualt path
apiRouter.get('*', (req, res) => {
  return res.status(404).send('This is not the path you are looking for...');
});

module.exports = apiRouter;
