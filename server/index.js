const bodyParser = require('body-parser');
const express = require('express')
const app = express();
require('dotenv').config()
const dbconnect = require('./dbconnect')
const router = require('./routes/taskRoutes');

// app.get('/', function (req, res) {
//   res.send('Hi')
// })

app.use(express.json());
app.use(bodyParser.json());
app.use('/', router);

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port" + process.env.PORT)
})