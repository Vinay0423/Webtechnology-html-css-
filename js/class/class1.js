
class SuperClass{


    static topic='inheritance'

    constructor(){
        this.name='Vinay'
        this.age='27'
    }

    async profile(){
        console.log(`the name is ${this.name} and age is ${this.age}`)
    }

    static cand(){
        console.log(this.name) //undefined, because static members not able to access constructor variable

        //accessing static variable
        console.log(this.topic); 
        console.log(SuperClass.topic); 
        
    }
}


class SubClass extends SuperClass{
    constructor(){
        super()
    }

    async profile(){
        super.profile()
    }

    static cand(){
        super.cand()
    }
}


// const ref=new SuperClass()
const ref=new SubClass()
ref.profile()
SubClass.cand()





//points

//Accessing static variable:

// Using Class Name: You can access static variables inside a static method using the class name directly (MyClass.myStaticVariable).
// Using this: In static methods, this refers to the class itself, so you can access static variables using this.myStaticVariable.


// does static function as an access to constructor variable:


// No, a static function in JavaScript does not have access to instance-specific variables (i.e., variables declared in the constructor). 
// This is because static methods are tied to the class itself, not to any specific instance of the class.

