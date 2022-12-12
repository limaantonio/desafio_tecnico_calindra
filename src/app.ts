import express from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';
import mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PWD}@cluster0-7t1fg.mongodb.net/dbGeocode?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

export { app };
