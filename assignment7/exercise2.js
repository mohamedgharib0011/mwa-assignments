const express = require('express');
const router = express.Router();
const app = express();
const logger = require('morgan');
const { MongoClient } = require('mongodb');
const crypto = require('crypto');



app.use(logger('dev'));

app.get('/secret', function (req, res, next) {
    // res.send("secret");

    MongoClient.connect('mongodb://127.0.0.1:27017/secret', function (err, client) {
        if (err) throw err;

        const db = client.db('secret');
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');

        db.collection('message').findOne({}, function (err, doc) {
            if (err) throw err;

            console.log(doc.message);
            decipher.setAutoPadding(false);
            var decrypted = decipher.update(doc.message, 'hex', 'utf8');
            decrypted += decipher.final('utf8');

            res.send(decrypted);
            client.close();
        })
    })


});

const port = 5555;
const host = "127.0.0.1";

app.listen(5555, '127.0.0.1', (x) => { console.log(`Server started at http://${host}:${port}/`) });

module.exports = app;


