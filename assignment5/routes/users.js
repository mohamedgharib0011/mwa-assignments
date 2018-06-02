var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
const { Observable, from } = require('rxjs');
const { map } = require('rxjs/operators');

/* GET users listing. */
router.get('/', function (req, res, next) {

  // solution using Promises
  var usersPromise = fetch('http://jsonplaceholder.typicode.com/users/');

  usersPromise.then(data => data.json())
    .then(data => res.send(data));

  // solution using Observables

  // from(usersPromise)
  //   .subscribe((data) => {
  //     console.log(data);
  //     res.send(data.json());
  //   })


  // solution using Async/Await

  // getData().then((x) => {
  //   console.log(x.data.json());
  //   res.send(x.data.json())
  // }).catch(x => {
  //   console.log(x.data.json());
  //   res.send(x.data.json())
  // });



});

async function getData() {
  console.log("start getting data");
  try {
    var usersPromise = await fetch('http://jsonplaceholder.typicode.com/users/');
    //console.log(usersPromise);
    return usersPromise;
  } catch (error) {
    console.log("error while fetching the data");
  }
  console.log("after getting data");

}

module.exports = router;
