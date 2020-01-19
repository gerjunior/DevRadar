const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http')
const {setupWebSocket} = require('./websocket')

 //To Do: Finalizar CRUD (index - show all, destroy - delete, update, show - create, store - create)

const app = express();
const server = http.Server(app) 

setupWebSocket(server)

mongoose.connect('mongodb+srv://Gerjunior:admin@123@cluster0-nfnvf.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true})

app.use(cors())
app.use(express.json())
app.use(routes)


server.listen(3333);