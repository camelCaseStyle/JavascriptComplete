///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

var year = 1994;
calculateAge(year);
function calculateAge(year){
    console.log(2016-year);
    console.log(this);
}

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge : function(){
        console.log(2016-this.yearOfBirth);
    }
}
john.calculateAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1984    
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();



