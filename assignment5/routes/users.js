var express = require('express');
var axios = require('axios');
var router = express.Router({ caseSensitive: true, strict: true });
const { Observable, from } = require('rxjs');
const { map } = require('rxjs/operators');

/**
 * I provided three solutions (Promise, Observables, and Async/Await)
 */
router.get('/', function (req, res, next) {


  // Solution#1 (Promise)
  //axios.get('http://jsonplaceholder.typicode.com/users/').then(data => data.data).then(data => res.json(data));

  // Solution#2 (Observables)
  // from(axios.get('http://jsonplaceholder.typicode.com/users/'))
  //   .pipe(map(x => x.data))
  //   .subscribe((data) => { console.log(data); res.send(data) });

  // Solution#3 (Async/Await)
  // getData().then((x) => {
  //   res.send(x.data)
  // });



});

/**
 * asysc function to get the data
 */
async function getData() {
  console.log("start getting data");
  try {
    var usersPromise = await axios.get('http://jsonplaceholder.typicode.com/users/');
    return usersPromise;
  } catch (error) {
    console.log("error while fetching the data");
  }
  console.log("after getting data");

}

module.exports = router;
