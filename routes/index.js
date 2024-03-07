const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router
  .route('/new')
  .get((req, res) => {
    res.render('form');
  })
  .post((req, res) => {
    const user = req.body.user;
    const text = req.body.text;

    // Do nothing if any field is empty but do not erase data
    if (!user || !text) {
      res.render('form', { user, text });
      // Add message to array and redirect to '/' otherwise
    } else {
      messages.push({ text, user, added: new Date().toLocaleString('en-GB') });
      res.redirect('/');
    }
  });

module.exports = router;
