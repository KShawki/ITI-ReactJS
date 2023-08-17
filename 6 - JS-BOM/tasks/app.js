

// task 2.1.2
function displayMsg() {
  var page = open("", "_blank", "width=300,height=300");
  page.document.write("Hello, World!")
  setTimeout(() => { page.close()}, 3500)
}



// task 1.1 BOM
var query = location.search; 
var newQuery = query.substring(1, query.length).split("&"); 
document.querySelector(".namee").innerHTML = `<h3>Name = ${newQuery[0].split("=")[1]}</h3>`
document.querySelector(".emaill").innerHTML = `<h3>Email = ${newQuery[1].split("=")[1]}</h3>`
