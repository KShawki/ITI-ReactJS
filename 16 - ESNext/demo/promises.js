//  sync 
// Async 
// -timers 
// -events
// -Ajax
//crud  create read update delete
// var x=17;
// var myPromise=new Promise(function(resolve, reject){
//     var xhr=new XMLHttpRequest();
//     xhr.open("GET","https://jsonplaceholder.typicode.com/users");
//     xhr.onreadystatechange=function(){
//         if (xhr.readyState==4){
//             if(xhr.status>=200 && xhr.status<300){
//                 resolve(xhr.responseText)
//             }
//             else{
//                 reject('error')
//             }
//         }

//     }
//     xhr.send()
    
    
    
//     // if (x==10)
//     //     resolve("success")
//     // else
//     //     reject("fail")

// })

// myPromise.then((data)=>{
//     var result=JSON.parse(data)
//     console.log(result[0].email)})
// .catch((err)=>{console.log(err)})
// async function myFun(){
// var x=10
// var myPromise1=new Promise(function(resolve,reject){
//     if (x==10){
//         setTimeout(()=>{
//             resolve("success")
//         },5000)
//     }
//     else{
//         reject("err")
//     }
// })

// var y=10;
// var myPromise2=new Promise(function(resolve,reject){
//     if (y==10){
//         setTimeout(()=>{
//             resolve("success promise2")
//         },1000)
//     }
//     else{
//         reject("err promise2")
//     }
// })


// await myPromise1;

// myPromise1.then((data)=>{console.log(data)})
// .catch((e)=>{console.log(e)})

// myPromise2.then((data)=>{console.log(data)})
// .catch((e)=>{console.log(e)})

// }



// myFun()

// fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//     //   response.json()
//       .then(json => console.log(json))

// console.log("jbhgh")

// generators
// function fun(){
//     //logic










//     return "hjbjknjk"
// jhhh
// }



function *fun(){
    // logic
    console.log("start")
    yield 10;
    // logic
    var a=12;
    console.log(a);
    yield "abc";
    // logic
    console.log("hii");
    yield [1,2,3,5];
    // console.log("end");

}

var iter=fun()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())





















