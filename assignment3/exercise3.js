/**
 * - Build a pseudo-class named 'Clock' that emits a 'tick' event every 1 second.
 * - Build a script that creates one Clock Object and bind to the 'tick' event, printing 'woohooo' every time it gets one
 * 
 */
const EventEmitter=require('events');

// creating the class
class Clock extends EventEmitter{
    constructor(){
        super();
        setInterval(() => {clock.emit('tick')}, 1000);
    }
    

}


// creating object and event
const clock=new Clock();

clock.on('tick',()=>console.log('woohoo'));


