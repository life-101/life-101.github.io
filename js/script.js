// VARIABLES
// You don't have to explicitly declare type; the interpreter works it out
var x = 5;
var y = 4.2;
var result = x + y;


// OPERATORS
// All as you would typically expect
c = a + b;
c = a - b;
c = a * b;
c = a / b;

c = a++; // increments a
c = ++a; // increments c

var myVar = (x == y); //evaluates to FALSE
var myVar = (x >= y);  //evaluates to TRUE
var myVar = (x != y); //evaluates to TRUE

// STRINGS
var str1 = 'Hello, world';
var str2 = "How's it going?";

var str3 = str1 + '. ' + str2;

var strSize = str3.length;

// ARRAYS
// (zero-indexed);
var allNumbers = [1,2,3,4,5];
var myNumber = allNumbers[3]; //=4

// CONDITIONALS
var country = 'England';

if(country == 'England') {
	weather = 'bad';
	food = 'bad';
	currency = 'GBP';
}
else if(country == 'France') {
	weather = 'good';
	food = 'great';
	currency = 'EUR';
}
else {
	weather = 'unknown';
	food = 'unknown';
	currency = 'unkown';
}

if(food == 'bad' && weather == 'good');



// MAKING CHANGES TO HTML
// We operate on the DOM with the document object

// eg: change the properties of an element
document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById("demo").style.fontSize = "25px";

// other DOM objects
document.getElementsByClassName('header');
document.getElementsByTagName('div');
document.write('var x = 4;');