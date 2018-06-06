const express = require('express');
const router = express.Router();
const app = express();
const logger = require('morgan');
const { MongoClient } = require('mongodb');
const crypto = require('crypto');



app.use(logger('dev'));
app.use(express.json());

app.post('/resturants',function(req, res,next){
    MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, client) {
        if (err) throw err;

        const db = client.db('mydb');

        console.log(req.body);
        

        db.collection('restaurants').insert(req.body,function(err,docInserted){
            if (err) throw err;
            client.close();
            res.status(200).json("Success");
        });
    });
});

app.get('/resturants', function (req, res, next) {
    // res.send("secret");

    MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, client) {
        if (err) throw err;

        const db = client.db('mydb');

        db.collection('restaurants').find({}).project({_id:0}).toArray(function (err, doc) {
            if (err) throw err;

            console.log(doc);
            res.send(doc);
            client.close();
        })
    })


});

app.get('/resturants/nearme', function (req, res, next) {
    // res.send("secret");

    MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function (err, client) {
        if (err) throw err;

        const db = client.db('mydb');

        db.collection('restaurants').find({location:{$near:[-91.9665342,41.017654]}}).project({_id:0}).limit(10).toArray(function (err, doc) {
            if (err) throw err;

            console.log(doc);
            res.send(doc);
            client.close();
        })
    })


});

const port = 5555;
const host = "127.0.0.1";

app.listen(5555, '127.0.0.1', (x) => { console.log(`Server started at http://${host}:${port}/`) });

module.exports = app;


