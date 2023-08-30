// function clickMe(ourDiv){
//     // event.stopPropagation();
// console.log(ourDiv.id)
// }

// elem.addEventListener("click",function(){

// })




// var ourDivs=document.getElementsByTagName("div");
// for (var i=0;i<ourDivs.length;i++){
//     ourDivs[i].addEventListener("click",function(){
//         console.log(this.id)
//     },true)
// }


// document.onkeydown=function(){
//     console.log(event.altKey)
// }



// custome event
// 1-create your own event
// 2-addEventListener
// 3-fire event

// var ourEvent= new Event("seen")

// document.getElementById("whatsApp").addEventListener("seen",function(){
//     this.innerHTML +="<sub>✓✓</sub>";
// })

//  setTimeout(function(){
//     document.getElementById("whatsApp").dispatchEvent(ourEvent)
//  },3000)



// console.lo("ay7aga")
// 1-syntax error
// alert("hello"

// 2-type error
var n=100;
// console.log(n.toUpperCase())

// 3-RangeError
// console.log(n.toFixed(101))

// 4-ReferenceError
//  console.log(a)


// console.log(decodeURIComponent("%40"))

//5- URIError
// console.log(decodeURI("%%%%"))


// var ourError=new SyntaxError("this is our Error")
// console.log(ourError)

// throw ourError

// throw "this is invalid"


// try{
   
// }
// catch(err){

//     throw "new error"
//     // console.log(err)
// //     if (err instanceof RangeError)
// //     console.log( "out of range ")
// //     else if(err instanceof TypeError)
// //     console.log("khnjhkk")
// // else if(err =="out of Range")
// // console.log("out of Range2")
// }
// finally{
// console.log("end")

// }





// onload=function(){
//     var x=prompt("enter number");
//     if(x>=10 && x<=20)
//         alert("okaaay")
//     else
//       throw "out of Range"
// }

// onerror=function(msg,url,l,c,err){
//     console.log(msg)
//     console.log(url)
//     console.log(l)
//     console.log(c)
//     console.log(err)
// return true
// }


// var obj={}
// obj.objName="newObj"
// obj.count=1
// obj.category=["js","html","css"]
// obj["prop"]="val"
// obj.disp=function(){
//     console.log(obj.objName)
// }
// // var num=100
// console.log(obj.toString())
// console.log(obj.disp())


// var obj2={namee:"Ali" ,age:20}
// obj2.address="stklnkjnjkj"

// obj2.propobj={color:"yellow", model:"abc"}
// console.log(obj2)
// console.log(obj2.age)

// console.log(obj2.propobj.model)

// // var x="key"
// // obj[x]="value" ==== obj.key === obj["key"]
// // console.log(obj)
// console.log(obj.hasOwnProperty("count"))
// console.log(Object.entries(obj))



// //statement func
// function sum(){
// console.log("sum")
// // return
// }
// console.log(sum())

// //anonymouse fun 


// //Expression func
// var func=function (x,y){
//     return x+y
// }

// sum()
// console.log(func(1,2))


console.log("start")
wait5sec();
fun();
console.log("end")
setTimeout(function(){
    console.log('timeout after 1 sec')
},1000)



function fun(){
    setTimeout(function(){
        console.log("Time out immed")
        
    },0)
}

function wait5sec(){
    console.log("waaait")
}
5 //start   end  Time out immed    1sec 
//start Time out immed"  end timeout after 1 sec



