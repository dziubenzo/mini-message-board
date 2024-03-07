const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString('en-GB'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString('en-GB'),
  },
  {
    text: 'Hey!',
    user: 'Robercik',
    added: new Date().toLocaleString('en-GB'),
  },
];

router.get('/', (res, req) => {
  req.render('index', { messages });
});

module.exports = router;
