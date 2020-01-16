const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://<Gerjunior>:<omnistack>@cluster0-n7sva.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true})

app.use(express.json())
app.use(routes)


app.listen(3333);