/***
 * This File is Entry point for Local Express Developer environment.
 */
const express = require('express')
const lambda = require('./src/app')
const app = express()

app.get('/', function (req, res) {
    lambda.handler(null, null).then((data) => {
        console.log(data);
        res.send(data.body);
    }, (error) => {
        console.log(error);
    });
})

app.listen(3000)
