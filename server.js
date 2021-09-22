require('dotenv').config();
const express   = require('express');
const app       = express();
const PORT      = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

// < -------  ------- Cors  -------  ------- > 
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

//< -------  -------  -------  -------  ------- >

app.use(cors(corsOptions))


//< -------  ------- Database connection ------- -------  >
const connectDB = require('./config/db');
connectDB();
//< -------  -------  -------  -------   -------  ------- >

app.use(express.json());

//< -------  ------- template engine and others  ------- >
app.use(express.json());
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//< -------  -------  -------  -------  -------  ------- >

//< -------  To perform clean up without scheduler  ------- >
app.use((req, res, next) => {
  require('./script_cleanUp').cleanUp();
  next()
})
//< -------  -------  -------  -------  -------  ------- >

//< -------  -------  routes  -------  ------- >
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));
//< -------  -------  -------  -------  ------- >

app.listen(PORT, console.log(`Listening on port ${PORT}. @ => ${process.env.APP_BASE_URL}`));