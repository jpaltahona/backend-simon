import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

const app = express();

//settings
app.use( morgan('dev') );
app.use( express.json() );
app.use(cors());
routes(app);


export default app;