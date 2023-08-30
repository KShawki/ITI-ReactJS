// var obj={
//     namee:"Ahmed",
//     age:20,
//     dispaly (){
//         console.log(this.namee)
//     }
// }
// obj.dispaly()

// function Employee(nm="Omar",age=30){

//     return {
//         nm,
//         age
//     }
// }
// var emp1=Employee(40)
// console.log(emp1)

// function fun(x=10,y=20,obj){
//     var defaultObj={nm:"Ali" , age:10};
//     var z=Object.assign({},defaultObj,obj)
//     console.log(z)
//     // logic
//     return `user name is ${z.nm} & age is ${z.age} 
//     your sum is ${x+y}`
// }
// // var obj={nm:"",age:34}
// // obj={age:60}

// console.log(fun(1,2,{age:50}))
// console.log(fun(7,3,{nm:"Ayman",Age:80 ,userAddr:"klhjhn"}))

// Number Api
// console.log(isFinite(123)) //true
// console.log(isFinite("123")) //true
// console.log(isFinite("abc")) //false

// console.log(Number.isFinite(123)) //true
// console.log(Number.isFinite("123")) //false

// console.log(Number.isInteger(123))
// console.log(Number.isInteger(123.555))


// console.log(isNaN(123))  //false
// console.log(isNaN("123"))  //false
// console.log(isNaN("abghhg"))  //true

// console.log(Number.isNaN(123))
// console.log(Number.isNaN("123"))
// console.log(Number.isNaN("jkhj"))
// console.log(Number.isNaN(NaN))    //true

// var mySet=new Set ();

// mySet.add(1)
// mySet.add("abc")
// mySet.add(1)

// console.log(mySet)

// console.log(mySet.keys())
// console.log(mySet.values())
// console.log(mySet.entries())

// // console.log(mySet[0])
// console.log(mySet.size)


// for (var i=0;i<mySet.size;i++){
//     console.log(mySet[i])
// }
// console.log(mySet.entries())
// Enumerable
// for (var i in mySet.entries()){
//     console.log(i)
// }


// for of iterable obj

// for (var [key,value] of mySet.entries()){
//     console.log(`key is ${key}  value is ${value}`)
// }
// console.log(mySet.has("abcjbhkhj"))
// console.log(mySet["has"]("abcjbhkhj"))
// mySet.delete(1)

// var arr=[1,2,3]
// mySet.add(arr)
// // arr=[1,2]
// arr.push(5)

// mySet.add(arr)
// mySet.add([...arr,9])

// mySet.add([1,2,3])
// console.log(mySet)


// var mySet2=new Set([1,"xyz",function(){},[1,2,3]])

// console.log(mySet2)

// var myMap=new Map();

// myMap.set("abc",1)
// myMap.set(2,"xy")
// myMap.set(2,"abcs")
// myMap.set(3,"abcs")



// console.log(myMap.get(2))
// console.log(myMap.has(9))
// // myMap.delete(2)

// console.log(myMap)

// var myMap2=new Map([[1,2],[2,[1,2,3]],["xy",function(){}]])

// for(var elem of myMap.entries()){
//     console.log(elem)
// }

// function fun(){
//     // return [2,3]
//     // return "hi"
//     return {nm:"ali"}
// }
// var [x,y]=fun()

// iterable obj
// set map arr string

// number string boolean undefined null  Symbol

// var myObj={
//     namee:"Ahmed",
//     age:20,
//    [Symbol.iterator]:function(){
//     var myKeys=Object.keys(myObj);
//     console.log(myKeys)
//     var counter=0;
//     var myLength=myKeys.length;
//     return {
//         next:function(){
//         if (counter==myLength)
//             return {value:undefined ,done:true}
//         else
//         return {value:{key:myKeys[counter],value:myObj[myKeys[counter++]]} ,done:false}

//         }
//     }

//     }
// }

// console.log(myObj)

// var iter=myObj[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// var x=new Symbol();   ////xxxxxxxxxxx
// console.log(x)

// var x= Symbol("abc")
// var y= Symbol("abc")
// var a= 2;
// var b=2;
// console.log(a===b)
// console.log(x)
// console.log(y)
// console.log(x===y)
// var arr=[]
// console.log(typeof arr)

// var x=Symbol.for(10)

// var y= Symbol.for(10)
// console.log(x===y)
var val=Symbol("info")
var obj={
    userName:"ali",
    [val]:"abc"
}

for (var i in obj){
    console.log(`key is ${i} value is ${obj[i]}`)
}

console.log(obj[val])



//































