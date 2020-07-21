// ...........................START OF QUESTION 1...................
var mainContent = document.getElementById("main-content");

var c = mainContent.childNodes;
var txt = "";
var i;
for (i = 0; i < c.length; i++) {
  txt = txt + c[i].nodeName + "<br>";
  // console.log(txt);
}

document.getElementById("demo").innerHTML = txt;
var elem = document.getElementsByClassName("render");

var txt = "";
var i;
for (i = 0; i < elem.length; i++) {
  txt = txt + elem[i].innerHTML + "<br>";
  // console.log(txt);
}

document.getElementById("demo1").innerHTML = txt;
var input = document.getElementById("first-name");
input.value = "Soban";
var input = document.getElementById("last-name");
input.value = "khan";
var input = document.getElementById("email");
input.value = "sobankhan252@gmail.com";
// ...........................END OF QUESTION 1...................




// ...........................START OF QUESTION 2...................

var item = document.getElementById("form-content");
console.log(item.nodeType);
var item = document.getElementById("lastName");

console.log(item);
// b=item.nodeChildNodes
// console.log(b.getNodeType);
// ...........................END OF QUESTION 2...................
