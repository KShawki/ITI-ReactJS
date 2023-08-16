// // var arr=[];
// // arr["key1"]="value1"
// // arr["key2"]="value2"
// var arr=[1,2,3,4,5]
// console.log(arr.length)
// console.log(arr["length"])
// console.log(arr.join("*"))
// console.log(arr["join"]("*"))
// var prop="length"
// console.log(arr[prop])
// console.log(arr.prop) 

// // date object
// var today=new Date();
// console.log(today)
// console.log(today.getMonth())
// console.log(today.getYear()+1900)
// console.log(today.getFullYear())
// console.log(today.getDay())
// console.log(today.getDate())

// today.setDate(25)
// console.log(today)

// console.log(today.toDateString())
// console.log(today.toLocaleString("ar-eg"))

// // falsy values
// 0, null ,undefined , " ",NaN ,false

var win;
function openWin(){
    // if(win.closed){
    // var win=open("page2.html","","width=300,height=300")
    // }
     win=open("","","width=300,height=300")

//    win.document.write("Hello")
//    win.document.bgColor="red"
}


function moveWin(){
    // if(!win.closed){
    console.log("kjjhbjhj")
    win.moveBy(100,100)
    win.focus();
    // }
}

function closeWin(){
    win.close()
}
var timer;
function startCount(){
    // setInterval(func,duration)
    // anonymouse fun
    // timer= setInterval ("alert('helllo')",1000)
    // timer= setInterval (alert,1000,"hello")
    // timer= setInterval (fun,1000)
    timer= setInterval (
        function  (){
                alert('hello')
            }
        ,1000)

}
function fun (){
    alert('hello')
}

function stopCount(){
    clearInterval(timer)
}

function startTimeOut(){
    setTimeout(fun,2000)
}


// console.log(navigator.userAgent)

// console.log(location.protocol)
// console.log(location.port)
// console.log(location.host)


function changeInfo(){
//  document.getElementById("d1").innerHTML="<h1>msg</h1>"

// document.getElementsByTagName("h1")[0].innerHTML+="hiiiiiiii"
// document.getElementsByTagName("input")[0].value="send"
// document.getElementsByTagName("input")[0].type="text"
// document.getElementsByClassName("c1")[1].innerHTML="ahhhhhhhhhhhh"


document.querySelector("#d1").innerHTML="hjj"
// document.querySelector("h1+p")
console.log(document.querySelector(".c1"))
}



console.log(document.getElementById("img1"))

console.log(document.images[0])
console.log(document.images.item(0))


function  changephoto(){
    document.images[0].src="./images/2.jpg"

}






















