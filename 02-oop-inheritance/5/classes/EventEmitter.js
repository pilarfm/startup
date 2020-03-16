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

