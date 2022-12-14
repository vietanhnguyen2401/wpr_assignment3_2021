const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/question')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.urlencoded({extended: true}))

const mongoUri = 'mongodb://localhost:27017/wpr-quiz';

// connect database
mongoose.connect(mongoUri, () => console.log("DB is connected!!!"));
mongoose.connection.on("error", console.error.bind(console, 'MongoDB connection error!'));

const PORT = 3002;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

