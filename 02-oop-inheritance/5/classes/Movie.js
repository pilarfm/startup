
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