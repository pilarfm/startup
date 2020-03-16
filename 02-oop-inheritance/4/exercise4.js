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


// Creating instances and Console Testing

let social = {
    share(friendName){
        console.log(friendName + ' shares '+ this.title);
    },

    like(friendName){
        console.log(friendName + ' likes '+ this.title);
    }
};


const terminator = new Movie('Terminator I', 1985, 60);


Object.assign(terminator, social);

terminator.share('Pili');
terminator.like('Maria');