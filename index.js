const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/user.route');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use("/user/", router)

app.get('/', (req, res) => {
    res.send("home page")
})


app.all('*', (req, res) => {
    res.send("no route found")
})

app.listen(3000, () => {
    console.log('running on 3000');
})
