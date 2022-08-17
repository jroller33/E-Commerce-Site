const express = require('express');
const path = require('path');
const routes = require('./routes');
// const api = require('./routes/indes.js')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// app.use('/api', api);

app.use(express.static('public'));


// GET route for landing page                             
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// wildcard route for 404 page. should ALWAYS be below ALL other routes.
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/404.html'))
// );


// TODO: sync sequelize models to the database, then turn on the server


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
