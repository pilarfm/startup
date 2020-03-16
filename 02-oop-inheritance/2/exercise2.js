
class EventEmitter{
    constructor(){
        this.events= {};
    }

    on(eventName,callback){
        if( !this.events[eventName] ) {
            this.events[eventName] = [];
         }           
         this.events[eventName].push(callback);
    }


    emit(eventName){
        if (!this.events[eventName]){
            throw new Error("The event does not exist");
        }
        else{
            this.events[eventName].forEach((callback) => {
                callback(eventName);
            });
        }
    }

    off(eventName,callback2){
        if (!this.events[eventName]){
            throw new Error("The event does not exist");
        }
        else{
            this.events[eventName] = this.events[eventName].filter(callback => callback !== callback2);
        }
    }

    getEvents(){
        return this.events;
    }
}


class Movie extends EventEmitter{

    constructor(title,year,duration) {
        super();
        this.title = title;
        this.year=year;
        this.duration=duration;
    }

    play() {
        super.emit('play');
    }
    pause(){
        super.emit('pause');

    }
    resume(){
        super.emit('resume');
    }
}






// Creating instances and Console Testing

const movieA= new Movie('Pirates of the Caribean','2005','2hs 10min');
const movieB= new Movie('Harry Potter 1','2004','3hs 18min');

movieA.on('play', function(){
    console.log("playing "+ movieA.title);
});
movieA.on('pause',function(){
    console.log("pausing "+movieA.title);
});
movieB.on('play',function(){
    console.log("playing "+movieB.title);
});
movieB.on('pause',function(){
    console.log("pausing "+movieB.title);
});
movieA.on('resume',function(){
    console.log("resuming "+movieA.title);
});
movieB.on('resume',function(){
    console.log("resuming "+movieB.title);
});

movieA.play();
movieA.pause();
movieB.play();
movieB.pause();
movieA.resume();

