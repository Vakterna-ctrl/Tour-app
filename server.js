const mongoose = require('mongoose');
require('dotenv').config({ path: `${__dirname}/config.env` });
const app = require('./app');

console.log(`${__dirname}/config.env`);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection is successful');
  });

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
