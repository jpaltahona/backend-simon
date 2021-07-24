import "@babel/polyfill";
import app from './app';
import './database';
const port = process.env.PORT || 4000;

app.listen(port)
console.log('server on port' + port)