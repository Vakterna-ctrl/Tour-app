const mongoose = require('mongoose');

// Handling Uncaught exception
process.on('uncaughtException', err => {
  console.log(err);
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

require('dotenv').config({ path: `${__dirname}/config.env` });
const app = require('./app');

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

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Add this to take care of the edge case asynchronous rejections
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  // Give server time to finish the request that are still pending before shutting down
  server.close(() => {
    process.exit(1);
  });
});

// Heroku shuts down the app once every 24 hours with the event 'SIGTERM'. This async function prevents sudden cancellation of request and responses
process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});
