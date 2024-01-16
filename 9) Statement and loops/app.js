console.log('Learning Loops & Statements');


// JavaScript if statement
var hour = new Date().getHours();
if (hour < 16) {
    greeting = "Good day";
    console.log(greeting);
}
// Javascript if else statement
if (hour < 16) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}
//else if Statement
if (hour < 10) {
    greeting = "Good morning";
    console.log(greeting);
} else if (hour < 20) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}


// JavaScript Switch Statement
var day = new Date().getDay();
console.log(day);
switch (day) {
    case 1:
        day = "Today is Monday"
        break;
    case 2:
        day = "Today is tuesday"
        break;
    case 3:
        day = "Today is Wednesday"
        break;
    case 4:
        day = "Today is Thursday"
        break;
    case 5:
        day = "Today is Friday"
        break;
    default:
        text = "Its Weekend";
}
console.log(day);

//Common Code Blocks
var text;
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);


// loops
//For Loop:
for (var i = 0; i < 5; i++) {
    console.log(i);
}

//While Loop:
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


var i = 374;
do {
    console.log(i);
    i++;
} while (i < 365);

