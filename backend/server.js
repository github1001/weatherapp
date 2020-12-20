import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

const app = express();

const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.use("", userRoute);

app.listen(3001, () => {console.log("Server Started at http://localhost:3001")});
