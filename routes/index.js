const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'Hey!',
    user: 'Robercik',
    added: new Date(),
  },
];

router.get('/', (res, req) => {
  req.render('index', {messages});
});

module.exports = router;
