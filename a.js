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
//CHAPTER 21-25
// Q NO 1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + lastName;
alert(fullName);
// Q NO 2
var phone = prompt("Enter your mobile model");
var length = phone.length;
document.write("My favorite phone is:  " + phone + "<br>" + "Length of string is: " + length);
//Q NO 3
var string = "Pakistan";
var index = string.indexOf("n");
document.write("String: Pakistan" + "<br>"); 
document.write("index of n Pakistan is : " + index+ "<br>"); 

//Q NO 4
var string = "Hello world";
var index = string.lastIndexOf("l");
document.write("String: Hello world" + "<br>"); 
document.write("index of n Hello world is : " + index+ "<br>"); 
// Q NO 5
var string = "Pakistani";
var character = string.charAt(3);
document.write("String: Pakistani" + "<br>"); 
document.write("character at 3rd index  is : " + character +"<br>");
// Q NO 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = "";
 fullName = fullName.concat(firstName," ",lastName);
alert(fullName);
// Q NO 7
var city = "Hyderabad";
var cityReplace = city.replace(city, "Islamabad");
document.write("City :" + city + " <br>" + "After replacement : " + cityReplace);
// Q NO 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(message+"<br>");
document.write(newMessage);
// Q NO 9
var value = "472";
document.write("value: "+value + " <br>");
document.write("value: "+typeof (value) + ": <br>");
document.write("value: "+value + " <br>");
value = parseInt("value: "+value);
document.write("value: "+typeof(value) + "<br>");
// Q NO 10
var input = prompt("Enter any text");
document.write("input: "+input + "<br>");
input = input.toUpperCase();
document.write("input: " + input);
// Q NO 11
var input = prompt("Enter any text");
document.write("input: "+input + "<br>");
var x= input.charAt(0).toUpperCase() + input.slice(1);
document.write("input: " + x);
// Q NO 12
// END OF CHAPTER 21-25....................................
// START OF CHAPTER 26-30.............................
//  Q NO 1
a = +prompt("Enter any positive  value: ");
document.write("Number is: " + a+"<br>");
document.write("Round off value is: " + Math.round(a)+"<br>");
 document.write("Floor value is: " + Math.floor(a)+"<br>");
 document.write("Ceil value is is: " + Math.ceil(a)+"<br>");
// Q NO 2
a = prompt("Enter any negative value: ");
document.write("Number is: " + a+"<br>");
document.write("Round off value is: " + Math.round(a)+"<br>");
document.write("Floor value is: " + Math.floor(a)+"<br>");
document.write("Ceil value is is: " + Math.ceil(a)+"<br>");
// Q NO 3
a = prompt("Enter any  value: ");
document.write("The absolute value of " + a + "  is: " + Math.abs(a) + "<br>");
// Q NO 4 
document.write("random dice value is  "+Math.floor((Math.random()*6)+1)+"<br>");
document.write("random dice value is  "+Math.floor((Math.random()*6)+1)+"<br>");
// Q NO 5
a = Math.floor((Math.random() * 6) + 1);
document.write(a + "<br>");
if (a !== 1) {
    document.write("random coin value is:   Head"+"<br>");
}
else {
    document.write("random coin value is:   Tails"+"<br>");
}
//Q NO 6
document.write("random  value  between 1-100:::  " + Math.floor((Math.random() * 100) + 1) + "<br>");
//Q NO 8
a = Math.floor((Math.random() * 10) + 1);
user = +prompt("Guess number between 1-10: ");
if (a === user) {
    alert("Happy congratulation you guess it");
}
else {
    alert("Sorry Try again!");
}

//END OF CHAPTER 26-30.............................
//Start  OF CHAPTER 31-34.............................
//Q NO 1
date = new Date();
document.write(date);
//Q NO 2
date = new Date();
var month = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
document.write("Current month is :  " + month[date.getMonth()]+"<br>");
//Q NO 3
date = new Date();
var day= ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
document.write("Current day is :  " + day[date.getDay()] + "<br>");
//Q NO 4
date = new Date();
day = date.getDay();
if (day === 0 || day === 6) { 
document.write("Its a Fun day :  " +"<br>");
}
//Q NO 5
date = new Date();
day = date.getDate();
if (day<16 ) { 
document.write("first  Fifteen days of month :  " +"<br>");
}
else {
    document.write("Last  Fifteen days of month :  " +"<br>");
}
//Q NO 6
var d = new Date();
var n = d.getTime();
document.write("Current date is: "+d +"<br>");
document.write("elapsed  million seconds since january 1 1970 :"+n+"<br>");
document.write("elapsed  minutes since january 1 1970 : " + n / (1000 * 60)+"<br>");
//Q NO 7
var d = new Date();
var n = d.getHours();

if (n > 13) {
    
document.write("its PM"+"<br>");
}
else {
    
document.write("its AM"+"<br>");
}
//Q NO 8
var d = new Date("2020-12-31");
document.write("Later date : " + d + "<br>");
// Q NO 9
var d = new Date("2015-06-18");

document.write("Later date : "+d + "<br>");
//END OF CHAPTER 31-34.............................
//Start  OF CHAPTER 35-38.............................
//Q NO 1
function todayDate() {
    date = new Date();
    document.write(date + "<br>");
}
todayDate();
//Q NO 2
function greet(a,b) {
    document.write("HELLO" + (a + b) + "<br>");
}


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
greet(firstName, lastName);
//Q NO 3
function add(a,b) {
    document.write("sum of two number" + (a + b) + "<br>");
}


var a = +prompt("Enter your first number");
var b = +prompt("Enter your second number");
add(a, b);
//Q NO 4
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            
            return (document.write("sum of two number: " + (a + b) + "<br>"))
            break;
        case "-":
            
            return document.write("difference of two number: " + (a - b) + "<br>");
            break;
        case "*":
            
            return document.write("multiplication of two number: " + (a * b) + "<br>");
            break;
        case "/":
            
            return document.write("division of two number: " + (a / b) + "<br>");
                break;
        default:
            return document.write("you have to enter valid operator "+"<br>");
    }

}


var a = +prompt("Enter your first number");
var b = +prompt("Enter your second number");
var operator = prompt("Enter your operator +,-,*,/");
//Q NO 5
function square(n) {
    document.write("square of number is : " + (n * n) + "<br>");
} 
var n = +prompt("Enter any number")
square(n);
//Q NO 6 is not cover in class
function factorial(number) {
    a = 1;
    for (i = 1; i <= number; i++){
        a *= i;
    }
    return a;
    
}
number = +prompt("Enter any number");
alert(factorial(number));
//Q NO 7
function counting(start,end) {
    
    for (i = start; i <= end; i++){
        document.write(i + "<br>");
    }
    
    
}
start = +prompt("Starting number");
end = +prompt("Ending number");
document.write("counting start from  " + start + " to " + end);
counting(start, end);
//Q NO 8
function Hypotenuse(base, per) {
    a = base;
    b = per;
    function square(base, per) {
       return((base*base)+(per*per))
    }     
    hypo = square();
    document.write(hypo);


}
base = +prompt("Enter base number");
per = +prompt("Enter perpendicular number");
Hypotenuse(start, end);






// END   OF CHAPTER 35-38.............................
// ..................... START CHAPTER 38-42..................
// Q NO 1
var a = prompt('Enter the value of a');
var b= prompt('Enter the Power of a');
document.write("the answer is  " + (Math.pow(a, b)))
//Q NO 2
var year = prompt('Enter the year ');
var message=""
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            message="yes this year is leap year"
            
        }
    }
    
}
else {
    message="Sorry this year is not leap year"
    
}
document.write(message);
//Q NO 3
document.write("AREA OF triangle")
var a =+ prompt('Enter the value of a');
var b= +prompt('Enter the value of b');
var c = +prompt('Enter the value of c');
function sum(a, b, c) {
    return( ( a + b + c ) / 2)
}
var S = sum(a, b, c);
function Area(S) {
    return(S*(S-a)*(S-b)*(S-c)
    )
}
document.write("Area of triangle is : " + Area(S))
//Q NO 4
var a =+ prompt('Enter the marks of English');
var b =+ prompt('Enter the marks of Urdu');
var c =+ prompt('Enter the marks of Math');
function mainFunction(a, b, c) {
    console.log(a,b,c)
    var aver=average(a,b,c);
    var percent = percentage(a,b,c);
    document.write("You average score are : "+aver+"</br>")
    document.write("You percentage is : "+percent+"</br>")
    
}
function average(a, b, c) {

    return(((a+b+c)/3))
}
function percentage(a, b, c) {
    console.log(((a+b+c)/300)*100)
    return(((a+b+c)/300)*100)
}
mainFunction(a,b,c)
//Q NO 5
var str = prompt("Enter any string that you want:");
document.write(str + "<br>")
var search=prompt("ENter the character that you want search this string")
function index(str, search) {
    for (var i = 0; i < str.length; i++){
        if (search == str[i]) {
            document.write("index of " + search + " is : " + (i))
            break;
        }
    }
    
    
}
index(str,search)
//Q NO 6
var a = prompt("Enter any sentence and i will remove all vowels from sentence");
document.write("The original sentence is " + " : " + a + " <br>");
var update = "";

for (var i = 0; i < a.length; i++){
    if (a[i] == "o" || a[i]=="O" || a[i]=="i" || a[i]=='I' || a[i] == "a" || a[i]=="A" || a[i]=="e" || a[i]=='E' || a[i] == "u" || a[i]=="U"  ) {
        
        console.log('')
    }
    else {
        
        update += a[i];
    }
}
document.write("after removal of vowels "+" : "+update);


//..................... END CHAPTER 38-42..................


//..................... START OF CHAPTER 43-48..................
//Q NO 4
function changImg() {
    var change = document.getElementById('lion');
    change.src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/E0F0/production/_112548575_gettyimages-492611032-1.jpg"
}
function previousImg() {
    var change = document.getElementById('lion');
    change.src="https://cdn.mos.cms.futurecdn.net/J9KeYkEZf4HHD5LRGf799N.jpg"
}
//Q NO 5
function increase() {
    var elem = document.getElementById('number').innerText;
    elem++;
    document.getElementById('number').innerText=elem
}
function decrease() {
    var elem = document.getElementById('number').innerText;
    elem--;
    document.getElementById('number').innerText=elem
    
}






//..................... END OF CHAPTER 43-48..................




//..................... START OF CHAPTER 49-52................
//Q NO 1
function display() {
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var  email= document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var p = document.createElement('h4');
    p.innerHTML = "your First name is " + first;
    document.body.appendChild(p);  
    var p = document.createElement('h4');
    p.innerHTML = "your Last name is: " + last;
    document.body.appendChild(p);  
    var p = document.createElement('h4');
    p.innerHTML = "your email  is: " + email;
    document.body.appendChild(p);  
    var p = document.createElement('h4');
    p.innerHTML = "your Password is " + password;
    document.body.appendChild(p);  
    
    
}
//Q NO 2
function readMore() {
    var a = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus tempore magni, quae saepe fugiat sit incidunt porro est facilis, dolores nihil debitis in laborum assumenda impedit reiciendis excepturi quo.Vero perferendis earum excepturiautem odio tempore accusamus maiores nam voluptatum. Numquam illo eius, omnis architecto quos consequatur explicabo ipsam, quaerat cum quae et fuga assumenda, suscipit totam quibusdam? Numquam?";
    document.getElementById('text').innerHTML = a;
    
}
//Q NO 3





// ..................... END OF CHAPTER 49-52................











