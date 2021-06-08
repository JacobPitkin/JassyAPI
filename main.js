require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const testingRouter = require('./routes/testing');

const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express running...');
});

app.use('/testing', testingRouter);

app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
