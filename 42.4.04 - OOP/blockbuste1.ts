// public - everybody can acess.
// private - Only ***this*** class.
// protected - This class and inhiritence
// Instance - mofa (מופע)
// abstract - cant do new class.


abstract class Humen {
    protected _name: string = ''
    protected _rating: number = 0
    protected _dateOfBirth?: Date;

    // overloading function - there is no suck thing in JS.
    // moshe(name: string)
    // moshe()
    // moshe(age: number)
    // this is no!!!
    // moshe(blablab: string)

    constructor(name?: string, rating?: number, dateOfBirth?: Date){
        this.setName(name);
        this.setRating(rating);
        this.setDateOfBirth(dateOfBirth)
    }
    //this can be only from 1-5
    setRating(rating: number){
        if (rating < 6 && rating > 1){
            this._rating = rating
        }
    }
    setName(name: string){
        if (name.length > 1){
            this._name = name
        }
    }
    setDateOfBirth(date: Date){
        if (date < new Date()){
            this._dateOfBirth = date
        }
    }
}
class Client extends Humen {
    exprationDate?: Date;
    constructor(name: string, rating: number, dateOfBirth: Date, exprationDate?: Date){
        super(name, rating, dateOfBirth)
        this.setExpressionDate(exprationDate)
    }
    setExpressionDate(exprationDate: Date){
        if (exprationDate > new Date()){
            this.exprationDate = exprationDate;
        }
    }
}



interface canDie {
    isDied(): boolean
    whenDied(): Date
}

// const first = new Acture()
// const producer = new Producer()
// [first, producer].each(function(member)=>{
//     member.whebDied()
// })

abstract class MovieMember extends Humen {
    protected isDead: boolean = false;
    protected diedIn?: Date;
    // override - will overide functions in the parant.
    // syntax - 
    override setRating(rating: number){
        if (this._rating < 10 && this._rating > 1){
            this._rating = rating
        }
    }
    // isDied(){
    //     return this.isDead
    // }
    // whenDied(){
    //     return this.diedIn
    // }
    // died() {
    //     if (!this.isDead){
    //         this.isDead = true
    //         this.diedIn = new Date();
    //     } else {
    //         throw new Error("moshe is already dead")
    //     }
    // }
}

class Acture extends MovieMember  {

}
class Producer extends MovieMember {}
class Cast extends MovieMember {}



const client = new Client("moshe", 4, new Date())

// moshe.isDead = true;