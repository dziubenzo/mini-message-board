const express = require('express');
const indexRoute = require('./routes/index');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('Server running...');
});
