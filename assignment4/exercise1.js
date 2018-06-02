/**
 * Write a Node code with a function checkSystem() that is responsible on checking if the system memory size
 * is at least 4 GB and the processor has more that 2 cores (use os module).
 *  1- When you call the function, you should receive and immediate message on the console "Checking your system..".
 *  2- If the system dosn't have enough memory we should print a message to the console "This app needs at least 4 GB of RAM".
 *  3- If the system doesn't have at least 2 cores,  print this message to the console "Processor is not supported".
 *  4- If the system has enough specs, print the following message "System is checked successfully.".
 * 
 * Rewrite the last question using observables.
 */
const os = require('os');
const {from, Observable}=require('rxjs');

/////////////////////////////// solution using ///////////////////////////////
function checkSystem() {

    return new Promise((resolve, reject) => {
        console.log("Checking your system..");

        if ((os.totalmem() / (1024 * 1024 * 1024)) < 4) {
            reject("This app needs at least 4 GB of RAM");
        } else if (os.cpus().length <= 2) {
            reject("Processor is not supported");
        } else {
            resolve("System is checked successfully.");
        }

    });
}

checkSystem().then((data) => console.log(data)).catch((error) => console.log(error));
/// converting Promise to Observable
// from(checkSystem())
//     .subscribe(
//         (data)=>console.log(data),
//         (error)=>console.log(error),
//         ()=>console.log("Done")
        
// );


///////////////////////// another solution using Observables ////////////////////

var obs=Observable.create(function(observer){
    console.log("Checking your system..");

    if ((os.totalmem() / (1024 * 1024 * 1024)) < 4) {
        observer.error("This app needs at least 4 GB of RAM");
    } else if (os.cpus().length < 2) {
        observer.error("Professor is not supported");
    } else {
        observer.next("System is checked successfully.");
    }
    observer.complete();

});

obs .subscribe(
            (data)=>console.log(data),
            (error)=>console.log(error),
            ()=>console.log("Done"));
            