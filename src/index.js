import express, {json} from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers/index.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(json());

app.use(router);

app.listen(port, () => console.log(`Server running in port: ${chalk.magenta(port)}`));