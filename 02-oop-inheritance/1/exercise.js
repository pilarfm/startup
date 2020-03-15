
class Movie {

    constructor(title,year,duration) {
        this.title = title;
        this.year=year;
        this.duration=duration;
    }

    play() {
        console.log('Playing '+ this.title);
    }
    pause(){
        console.log('Pausing '+ this.title);

    }
    resume(){
        console.log('Resuming '+ this.title);
    }


}


class Actor{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}


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


// Creating instances and Console Testing

let movieA= new Movie('Pirates of the Caribean','2005','2hs 10min');
let movieB= new Movie('Harry Potter 1','2004','3hs 18min');
let movieC= new Movie('Rocky Balboa','2006','2hs 35min');
let movieD= new Movie('The Godfather','1972','2hs 58min');

movieA.play();
movieA.pause();
movieA.resume();
movieB.play();
movieD.play();

let actorA= new Actor('Leonardo Di Caprio', 43);
let actorB= new Actor('Brad Pitt', 50);
let actorC= new Actor('Robert De Niro', 75);

let ee = new EventEmitter();
let callbackA = () => {
    console.log("Callback A");
  };
ee.on("EventA", callbackA);

let callbackB = () => {
    console.log("Callback B");
  };
ee.on("EventA", callbackB);

console.log("EventA :");
ee.emit("EventA");
