import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is running in ${port} port.`);