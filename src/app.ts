import express from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

export { app };
