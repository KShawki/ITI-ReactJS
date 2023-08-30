onload=function (){



function changeSrc(myImg){
    console.log(myImg)
    myImg.src="./images/marble3.jpg"
}
function returnOrigin(myImg){
    myImg.src="./images/marble1.jpg"
}

function displayVal(MyInp){
var val =MyInp.value;
document.getElementById("d1").innerHTML=val
}

function focusInp(){
    document.getElementById("txt").focus()
}


function showSelection(){
var sel=document.getElementById("menue");
var idx=sel.selectedIndex;
// console.log(idx)
if(idx==0) alert("not allow")
else
document.getElementById("d1").innerHTML=sel.options[idx].text

}

function showSelection2(){
    document.getElementById("d1").innerHTML=""
    var sel=document.getElementById("menue");
    for(var i=0;i<sel.options.length;i++){
        if(sel.options[i].selected==true){
            document.getElementById("d1").innerHTML += sel.options[i].text+"<br>"
        }
    }

}

function addVal(val){
    document.querySelector("#txt").value=val.value
}

// elem.onclick=function(){
//     alert("jkhbjhb");
//     return false;
//     location.assign(elem.href)
// }



document.getElementById("d1").innerHTML="hello"





}


