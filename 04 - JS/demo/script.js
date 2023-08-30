
// console.log(x)


// var x;
// console.log(x)
// x=8;
// console.log(x)
// // x="hi"
// console.log(x)
// x=null
// // number - string - undefined - boolean - null - symbol - bigint 

// console.log(typeof x)

// console.log(4%3)
// console.log(!false)
// var x=1;
// // var y;
// x+=5;   // x=x+5
// console.log(x)  
// x++;  postfix
// ++x;   prefix


// y=x++;
// // y=++x
// console.log(x);       
// console.log(y) ;  

var x=10;
var y="10"

// console.log(x==y)  //true  
// // coersion    auto cast
// console.log(x===y)//false
// console.log(typeof(x+1))  //  11
// console.log(y+1)   //"101"
// console.log(10+"1")
// console.log("10"+1)



// console.log(x-1)
// console.log(y-1)


// var z= parseInt(y)
// console.log(z)
// y=10.25
// console.log(parseFloat(y)+1)   
// console.log(Number(y)+1)   
// console.log(+(y)+1)
// console.log(8&&undefined)   
// console.log(undefined||8)   //
// console.log(!!null) 

// falsy values
// 0  , null ,undefined , false, "" , NaN

// (condition)?   :

// var a,b;

// for(var i=0 ,j=5;i<5;i++){

// }

// sum(3,5)
// alert("good morning")
// var x= 29<28
// console.log(3<2)

// console.log(3<2<1)   // true
// document.write("hello")

// document.writeln("<h1>hello</h1>")
// parseInt,+ ,Number
// var age=parseInt(prompt("enter your age"))
// // console.log(age)
// if(age !==null)
//     console.log(age+10)
// else
//     alert("invalid data")

// console.log(parseInt("12abc"))
// console.log(parseInt("0101",2))
// console.log(parseInt("a",16))

// console.log(typeof String(12))

// console.log(isNaN("123"))
//false<1
// 0<1   //true

// function funcName(){
//     return "jhgbhj"
// }

// funcName()

// function sum(){
//     // console.log(arguments[1])
//     // var result=x+y;
//     console.log(arguments.length)
//     return arguments[0]+arguments[1];
// }


// // console.log(sum())  //Nan 
// // console.log(sum(2,3,4,5,6,7))  //
// console.log(sum (3,"hi"))   
console.log(isNaN("123ahjghgh"))
console.log(isNaN("123"))

// console.log(isNaN(123))

// function isNaN(){
//     if (typeof arguments[0] =="number")
//         return false;
//     else if (typeof arguments[0] =="string"){

//     }
// }

// string object
console.error("hello")
//literal creation
var str="this is javascript string object demo"
console.log(str.length)
//constructor creation
var str2=new String("hello everone")
console.log(str2.length)
console.log(str.charCodeAt(0))
console.log(str.split("i" ))

console.log(str.split("i" ,4))
console.log(str.lastIndexOf("s"))

console.log(str.substr(5,14))
console.log(str.substring(5,14))
console.log(str.replace("i","_"))
























