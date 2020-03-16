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


class Movie extends EventEmitter{

    constructor(title,year,duration) {
        super();
        this.cast=[];
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

    getCast(){
        return this.cast;
    }

    addCast(cast){
        if (Array.isArray(cast)) {
            this.cast = this.cast.concat(cast);
        } else {
            this.cast.push(cast);
        }
    }
        
}

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
console.log(terminator.getCast());
