import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morganMiddleware from './middleware/morgan.middleware';

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(morganMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/submit-form', (req, res) => {
  res.send('Form submitted');
});

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
