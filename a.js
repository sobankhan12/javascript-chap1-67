//ASSIGNMENT NO 1 START ....................................
alert("Hello world");
alert("Error! Enter a valid password ");
alert("Welcome to js Landing.. " + '\n' + "Happy Coding");
alert("Welcome to js Land..");
//ASSIGNMENT NO 1 END .......................................
//ASSSIGMENT NO 2 START ......................................
var username;
usename = "Muhammad soban";
var message;
message = "Hello World";
alert(message);
var name = "Soban";
var age = 20;
var message = "Certified mobile developer";
alert(name);
alert(age+" years old");
alert(message);
var name = "PIZZA\nPIZZ\nPIZZ\nPIZ\nPI\nP";
alert(name);
var email = "sobankhan252@gmail.com";
alert("My email address is " + email);
var message = "A smarter way to learn a javascript";
alert("I am trying to learn from this book " + message);
document.write("Yeah i can write html content through javascript");
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(message);
//ASSIGNMENT NO 2 END...............................
//ASSIGNMENT NO 3 START ............................
var age = 15;
alert("i am " + age + " years old");
var n = 12;
alert("you have visited my website " + n + " times");
var birthYear = 2000;
document.write("My birth year is " + birthYear + "</br>");
document.write("Data type of my declared variable is integer");
var visitorName = "soban";
var siteName = "XYZ Clothing store";
var productTitle = " T-shirt";
var quantity = 4;
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on " + siteName);
//ASSIGNMENT NO 3 START ............................
//ASSIGNMENT NO 4 START ............................
// 5 ligel variable names 
// var a, b, c;
// var _name;
// var Sonan;
// var soba12khan;
// var soban1234;
// var sobakah_;
// var $doba;
// 5 illegal names
// var 12sobamm;
// var soba@khan;
// var sobankh%;
// var !sobankh;
// var soba(dda;
document.write(" A heading stating Rules for naming JS variables" + " </br>");
document.write("Variable names can only contain $ and _ for example $soban_khan" + " </br>");
document.write("Variables must begin with a $, _ or. For example $name, _name or name" + " </br>");
document.write("Variable names are case sensitive" + " </br>");
document.write("Variable names should not be JS keywords" + " </br>");
//ASSIGNMENT NO 4 END...............................

//ASSIGNMENT NO 5 START...............................
//Q NO 1
var a = +prompt("enter value of n1");
var b = +prompt("enter value of n2");
var c = a + b;
document.write("sum of " + a + " " + "and " + b + "is " + c);
//Q NO 2
var a = +prompt("enter value of n1");
var b = +prompt("enter value of n2");
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
document.writeln("sum of " + a + " " + "and " + b + "is " + c + "<br>");
document.writeln("subtraction of " + a + " " + "and " + b + "is " + d + "<br>");
document.writeln("multiplication of " + a + " " + "and " + b + "is " + e + "<br>");
document.writeln("division of " + a + " " + "and " + b + "is " + f + "<br>");
//Q NO 3
var a = 4;
document.writeln("value of a is " + a + "<br>");
a++;
document.writeln("value of a after increment is  " + a + "<br>");
a += 8;
document.writeln("value of after addition of 8 is " + a + "<br>");
a--;
document.writeln("value of a after decrement is " + a + "<br>");
var remainder = a % 3;
document.writeln("remainder  of a%3 is " + remainder + "<br>");
//Q No 4
var ticket = 600;
var token = +prompt("how many tickets that you want from us ");
var price = ticket * token;
document.write("your buy " + token + " your prices pkr " + price);
//Q NO 5
var table = 5;
document.write("Table of " + table + "</br>");
document.write(table + " * 1 = " + (table * 1) + "</br>");
document.write(table + " * 2 = " + (table * 2) + "</br>");
document.write(table + " * 3 = " + (table * 3) + "</br>");
document.write(table + " * 4 = " + (table * 4) + "</br>");
document.write(table + " * 5 = " + (table * 5) + "</br>");
document.write(table + " * 6 = " + (table * 6) + "</br>");
document.write(table + " * 7 = " + (table * 7) + "</br>");
document.write(table + " * 8 = " + (table * 8) + "</br>");
document.write(table + " * 9 = " + (table * 9) + "</br>");
document.write(table + " * 10 = " + (table * 10) + "</br>");


//Q NO 6

var Celsius = 25;
var temp1 = Celsius * (9 / 5) + 32;
var fahrenheit = 70;
var temp2 = (fahrenheit - 32) * (5 / 9);
console.log(temp1);
console.log(temp2);
document.write(Celsius + "C is " + temp1 + "F" + "<br>");
document.write(fahrenheit + "F is " + temp2 + "C" + "<br>");
//Q NO 7
var item1Price = 650;
var item2Price = 200;
var shipping = 100;
document.write("price of item1 is " + item1Price + "</br>");
var quantity1 = +prompt(" plz tell quantity of item1");
document.write("quantity of item1 is " + quantity1 + "</br>");
document.write("price of item2 is " + item2Price + "</br>");
var quantity12 = +prompt("plz tell quantity of item2 ");
document.write("quantity of item2 is " + quantity12 + "</br>");
document.writeln("shipping charges is " + shipping + "<br>");
document.write("Total cost of your ordered is  " + ((item1Price * quantity1) + (item2Price * quantity12)) + "<br>");

//Q NO 8
document.write("<h1>Marks Sheet</h1>" + "</br>");
var obtain = +prompt("Enter your obtained marks");
var total = +prompt("Enter your total marks");
var percentage = (obtain / total) * 100;
document.write("your obtained marks are " + obtain + "</br>");
document.write("your total    marks are " + total + "</br>");
document.write("your total percentage  is " + percentage + "</br>");
//Q NO 9
document.write("Currency in pkr")




//ASSIGNMENT NO 5 END......................................
//CHAPTER 6-9 START ....................................
var a = 10;
document.write("Result is" + "<br>"+"The value of a is"+ a+"<br>");
document.write("The value of ++a " + (++a)+"<br>");
document.write("now  value of a  is " + (a) + "<br>");
document.write("The value of a++ " + (a++)+"<br>");
document.write("now  value of a  is " + (a) + "<br>");
document.write("The value of --a " + (--a)+"<br>");
document.write("now  value of a  is " + (a) + "<br>");
document.write("The value of a-- " + (a--)+"<br>");
document.write("now  value of a  is " + (a) + "<br>");
//Q NO 3
var name = prompt("Ënter your name");
document.write("hello by " + name);
//Q no 6
 var n = prompt("Enter number that you want multiplication");
document.write(n + "*1 =" + (n * 1) +"<br>");
document.write(n + "*2 =" + (n * 2) +"<br>");
document.write(n + "*3 =" + (n * 3) +"<br>");
document.write(n+"*4 ="+(n*4) +"<br>");
document.write(n+"*5 ="+(n*5) +"<br>");
document.write(n+"*6 ="+(n*6) +"<br>");
document.write(n+"*7 ="+(n*7) +"<br>");
document.write(n+"*8 ="+(n*8) +"<br>");
document.write(n+"*9 ="+(n*9) +"<br>");
document.write(n+"*10 ="+(n*10) +"<br>");
//Q NO 7
var sub1 = prompt("name of first subject");
var sub2 = prompt("name of 2nd subject");
var sub3 = prompt("name of 3rd subject");
var mark1 =+ prompt("marks of "+sub1);
var mark2 =+prompt("marks of "+sub2);
var mark3 = +prompt("marks of " + sub3);
document.write("SUBJECT TOTAL MARKS OBTAIN MARKS PERCENTAGE");
var obtained = mark1 + mark2 + mark3;
var percentage = (obtained / 300) * 100;
document.write("Total marks are "+300+"<br>")
document.write("obtained marks are "+obtained+"<br>")
document.write("percentage is"+percentage+"<br>")







//CHAPTER 6-9 END............................
//CHAPTER 6-9 START........................................
//Q NO1
var city = prompt("Enter your city");
if (city === "karachi") {
    document.write("Welcome to the city of lights");
}
//Q NO 2
var gender = prompt("Enter your gender ");
if (gender === "Male" || gender === "male") {
    document.write("Welcome good morning sir");
}
else if (gender === "female" || gender === "Female") {
    document.write("Welcome good morning mam");
}
//Q no 3
var signal = prompt("Enter color of traffic light");
if (signal === "green") {
    document.write("You can go ");
} 
else if (signal === "red") {
    document.write("You must stop");
}
else if (signal === "orange") {
    document.write("Be ready");
}
//Q NO 4
var fuel = +prompt("Enter remaining fuel");
if (fuel < 0.25) {
    document.write("plz refill your fuel ");
}
//Q no 8
var n = prompt("Enter your number");
if (n % 3 === 0) {
    document.write("this number is divisible ")
} 
else {
    document.write("this is not divisible ")
}
//Q NO 9
var n = prompt("Enter your number");
if (n % 2 === 0) {
    document.write("this number is even ")
} 
else {
    document.write("this is  odd ")
}
//Q NO 10
var n = prompt("Enter the temperature");
if (n> 40) {
    document.write("today is very hot outside ")
} 
else if(n>=30) {
    document.write("today weather is normal  ")
}
else if(n>=20) {
    document.write("today weather is cool  ")
}
else {
    document.write("today is too cool")
}
//Q NO 11
var n1 = +prompt("Enter the first number")
var n2 = +prompt("Enter second number");
var op = prompt("Enter operation any one +-\%*");
if (op === "+") {
    document.write("sum of two number is " +( n1 + n2));
}
else if (op === "-") {
    document.write("diff of two number is " + (n1 - n2));
}
else if  (op === "/") {
    document.write("division of two number is " + (n1 / n2));
}
else if (op === "%") {
    document.write("remainder of two number is " + (n1 + n2));
}
else if (op === "*") {
    document.write("multiplication of two number is " + (n1 * n2));
}

//CHAPTER 6-9 END........................................

//Chapter 12-13 START ........................................
//Q NO 1


var ch = prompt("plz enter any character from your keyboard");
var index = 0;
var i = ch.charCodeAt(index);
if (i>= 65 && i <= 90) {
    document.write("This is uppercase character");
}
else if (i >= 97 && i <= 122) {
    document.write("This is lowercase character");
}
else {
    document.write("This is number");
}
//Q NO 2
var n1 = +prompt("Enter number1");
var n2 = +prompt("Enter number2");
if (n1 < n2) {
    document.write(n2 + " is greater "+ n1);
}
else if (n2 < n1) {
    document.write(n1 + " is greater "+n2); 

}
else if (n1 === n2) {
    document.write(n1 + " is equal to "+n2); 
}
//Q NO 3
var n = prompt("Enter number");
if (n < 0) {
    document.write(n1 + " is negative ");
}
else if (n >0) {
    document.write(n + " is positive "); 

}
else if (n === 0) {
    document.write(n1 + " is 0 "); 
}
//Q No 4
var a = prompt("Enter any character");
if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
    document.write("It is a vowel");
}
else {
    document.write("it is not vowel");
}
//Q NO 5
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
greeting = "Good evening";
}



//CHAPTER 12-13 END.........................................
//Chapter 14-16 Start.....................................
//Q NO 1
var Array = [];
//Q NO 2;
var array1 = newArray();
//Q NO 3
var array2 = ["hello", "world", "soban", "mango"];
//NO 4
var array3 = [1, 2, 3, 4, 5, 6];
//Q NO 5
var array4 = [true, false];
//Q NO 6
var array5 = ["hello", 4, 5, true, "world"];
//Q NO 7
var qualification = ["SSC", "HSC", "BCS","BS", "POST", "MS", "M. Phil", "PhD"];
document.write("<h2>Qualification</h2>");
for (var i = 0; i < qualification.length; i++){
    document.write(i+1 + ") " + qualification[i] + "<br>");
} 
//Q NO 8
var names = ["soban", "bilal", "asad"];
var scores = [460, 350, 270];
for (var i = 0; i < names.length; i++){
    document.write("Scores of " + names[i] + " is " + scores[i] + ".Percentage is " + scores[i] / 500 * 100 + "%<br>");
}
//Q NO 10
var scores = [320, 540, 230, 440, 190];
document.write("scores of student: " + scores+"<br>");
scores.sort();
document.write("ORdered scored in array: " + scores+"<br>");
//Q NO 11
var cities = ["islamabad", "lahore", "faisalabad", "rawalpindi", "karachi"];
document.write("Cities of pakistan are "+cities+"<br>");
var selected = cities.slice(0, 2);
document.write("Selected cities of pakistan : " + selected);
//Q NO 12
var arr = ["This", "is", "my","Cat"];
document.write(" Array "+"<br>" + arr+"<br>");
var pet = arr.join(" ");
document.write("String : "+"<br>" + pet+"<br>");
//Q NO 13
var arr = ["keyboard", "mouse", "printer", "monitor"];
for (var i = 0; i < arr.length; i++){
    document.write("Output :" + "<br>");
    document.write(arr[i] + "<br>");
}
//Q NO 14
var arr = ["keyboard", "mouse", "printer", "monitor"];
for (var i = arr.length-1; i > 0; i--){
    document.write("Output :" + "<br>");
    document.write(arr[i] + "<br>");
}






//Chapter 14-16 End
//Chapter 17-20 Start ..............................
//Q NO 1
var a = [1, 2, 3, 4, [5, 6, 7, 8, 9]];
//Q NO 2
var b = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write(b);
//Q NO 3
for (var i = 1; i <= 10; i++) {
    document.write(i+"<br>");
}
//Q NO 4
var a = +prompt("Enter the number to its multiplication table");
var b = +prompt("Enter the length of multiplication table");
for (var i = 1; i <= b; i++){
    document.write(a + "*" + i + "=" + (a * i)+"<br>");
}
//Q NO 5
var fruits = ["apple", "banana", "strawberry", "mango", "orange"];
for (var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
for (var i = 0; i < fruits.length; i++){
    document.write("Element at "+i+" index is "+fruits[i] + "<br>");
}
//Q NO 6
document.write("<h3>Counting</h3> "+"<br>");
for (var i = 1; i <= 10; i++){
    document.write(i+" ");
}
document.write("<br>"+"<h3>Reverse counting</h3>"+"<br> ");
for (var i = 10; i > 0; i--)
{
    document.write(i+" ");
}
document.write("<br>"+"<h3>Even counting</h3>"+"<br> ");
for (var i = 0; i <= 20; i++)
{
    if (i % 2 === 0) {
        document.write(i+" ");
    }
    
}
document.write("<br>"+"<h3>Odd counting</h3>"+"<br> ");
for (var i = 0; i <= 20; i++)
{
    if (i % 2 != 0) {
        document.write(i+" ");
    }
    
}
document.write("<br>"+"<h3>Series counting</h3>"+"<br> ");
for (var i = 2; i <= 20; i++)
{
    if (i % 2 === 0) {
        document.write(i+"k ");
    }
    
}
//Q NO 7
var array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery what you want search here");
search = search.toLowerCase();
var save = 0;
for (var i = 0; i < array1.length; i++){
    
    if( search == array1[i]){
        save++;
        document.write(array1[i]+" is available at index "+i+" in bakery");
        
    }
}
if (save === 0) {
    document.write("We are Sorry "+search+" is not  available in  bakery");
}
//Q NO 8
A = [24, 53, 78, 91, 12];
document.write("Array items:");
var large = A[0];
for (var i = 0; i < A.length; i++){
    document.write(A[i] + ",");
    if (A[i] > large) {
        large = A[i];
    }
}
document.write("<br>" + "The Largest number is "+large);
//Q NO 9
A = [24, 53, 78, 91, 12];
document.write("Array items:");
var small = A[0];
for (var i = 0; i < A.length; i++){
    document.write(A[i] + ",");
    if (A[i] < small) {
        small = A[i];
    }
}
document.write("<br>" + "The smallest number is "+small);
//Q NO 10
for (var i = 1; i <= 100; i++){
    if (i % 5 == 0) {
        document.write(i+", ")
    }
} 
    
    
//Chapter 17-20 End...............................