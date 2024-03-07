const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const indexRoute = require('./routes/index');

const PORT = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('Server running...');
});
