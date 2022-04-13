const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('dotenv').config();
const projectRouter = require('./router/projectRouter');
const localRouter = require('./router/localRouter');


app.use(cors());
app.use(express.json());
app.use(bodyParser())
app.use('/public', express.static('public'));


app.use(methodOverride('_method'));



//Set Views
// app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Database Connected')
    })
    .catch((err) => console.log(err))

// app.get('/', (req, res) => {
//     res.end()
// })
app.use('/', localRouter);
app.use('/api/projects', projectRouter);



app.listen(process.env.PORT || 3210)