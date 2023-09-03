class Person{
    // const a=2;
    static #counter=0;
    #personName;
    constructor (pName="Ali",pAge=20){
        if (this.constructor==Person)
            throw "Abstract class"
        var x=20;
        Person.#counter+=1;
        this.#personName=pName;
        this.personAge=pAge;
    }
    set PersonName (val){
        this.#personName=val
    }
    get PersonName(){
        return this.#personName;
    }

    static fun(){
        return Person.#counter;
    }
    display(){
        this.#preFun();
        return `welcome ya ${this.#personName} and age is ${this.personAge}`
    }
    #preFun(){
        console.log("private func")
    }
    toString(){
        return `welcome ya from toString ${this.#personName} and age is ${this.personAge}`

    }

}


class Employee extends Person {
    constructor (nm="Ahmed",age=50,salary=4000){
        super(nm,age);
        this.salary=salary;
    }

}

var emp=new Employee();
emp.PersonName="Amany"
var emp1=new Employee("Ayman",10,1000)
console.log(emp1)   //



// var p1=new Person();
// p1.Age=20;
// console.log(p1)
// var p2=new Person("Ahmed",30)
// console.log(p2)
// // p1.ersonName="Asmaa"
// console.log(p1.PersonName)
// var p3=new Person("Ahmed",30)
// // Person.counter=5;
// // console.log(Person.#counter)
// console.log(p1.toString())
// // console.log(Person.fun())
// // console.log(p1.display())

// // console.log(p1.p)