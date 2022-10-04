const express = require("express");
const cors = require("cors");
const validationRouter = require('./routes/validation');

const app = express();

app.use(express.json());
app.use(cors()); //—> for dev: allowing all origins to access your


app.use('/test', validationRouter);



app.listen(3002, () => console.log(`Demo server listening on port 3002!`));