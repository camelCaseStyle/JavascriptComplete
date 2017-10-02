
if(false){
/* 
    Lecture: Variables
    
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);
var age = 26;

console.log(age);

var fullAge = false;
console.log(fullAge);

*/

/* Lecture: Variables 2

var name = 'John';
var age = 26;

console.log(name+age);
var job, isMarried; // These variables are currently undefined

console.log(job);
job = 'Engineer';
isMarried = false;

console.log(job+isMarried);

age = 'Thirty Six';
job = 'Shopper';

console.log(job+isMarried);
var lastName = prompt("What is the last name?");
console.log(lastName);
alert('Your name is: '+lastName);
*/


/*Boolean logic and switch*/

var age = 16;

if(age < 16){
    console.log("John is a teenager");
}else{
    console.log("John is a man");
}


//Coding challenge 

var heightJohn = 170;
var ageJohn = 30;
var heightMark = 155;
var ageMark = 21;
var ageAnubhav = 70;
var heightAnubhav = 165;

var scoreMark = heightMark + 5*ageMark;
var scoreJohn = heightJohn + 5*ageJohn;
var scoreAnubhav = heightAnubhav + 5*ageAnubhav;
findGreatest(scoreAnubhav, scoreMark, scoreJohn);

function findGreatest(scoreAnubhav, scoreMark, scoreJohn){
    if(scoreAnubhav === scoreJohn === scoreMark){
        console.log("Its a draw !");
    }else if(scoreAnubhav > scoreMark && scoreAnubhav > scoreJohn){
        console.log("Anubhav Wins");
    }else if(scoreMark > scoreAnubhav && scoreMark > scoreJohn){
        console.log("Mark Wins!")
    }else if(scoreJohn > scoreAnubhav && scoreJohn > scoreMark){
        console.log("John Wins")
    }
}


//Function statements and expressions 
/*
function statement(var par){
    //some code here 
    
    // this is a function statement 
    
    // a statement does not produce a value, a variable or an immediate product
}

var someVar = function expression(var par){
    //code 
    
    //this is a function expression as they produce a value 
}
*/
/****************/
//Lecture Objects//
/****************/


// write in key-value pairs 
var john =  {
    name: 'John', 
    lastName: 'Smith',
    job: 'teacher',
    isMarried: false
};
console.log(john.lastName);

//another way of creating an object

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane.yearOfBirth = 1969;
jane.job = 'Retired';
jane.isMarried  = true; 
console.log(jane);



/****************/
//Lecture Objects and Methods//
/****************/

var kris = {
    name: 'Kris',
    lastName: 'Denver',
    job: 'Teacher',
    age: 24,
    isMarried: false,
    yearsUntilRetirement: function(age){
        var retirement = 65 - age;
        if(retirement < 0){
            retirement = 0;
        }
        return retirement;
    }
    
};

console.log(kris);

var tanish = {
    name: 'tanish',
    yearOfBirth: 2010,
    job: 'being naughty',
    eyeColor: 'Dark Chocolate',
    family: ['anubhav', 'kanu', 'amit', 'nan'],
    skinColor: 'brownish',
    oldAfterYears: function() {
        return this.age+63;
    },
    calculateAge: function(){
        this.age = 2017 - this.yearOfBirth;
    }
    
};

tanish.calculateAge();
console.log(tanish.oldAfterYears());

tanish.afterSixty = tanish.oldAfterYears();

console.log(tanish);




/********************************/
//Lecture loops and iteration 
/********************************/


for(var i = 0; i < 100; i++){
    console.log(i);
}

var names = ['anubhav', 'pekka', 'kris', 'michael'];

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

for(var j = names.length -1; j >= 0; j--){
    console.log(names[j]);
}

//use of continue -- continue allows you to skip iteration 

for(var i = 0; i < 8; i++){
    if(i === 3){
        //Skips the printing of three when i === 3
        continue;
    }
    console.log(i);
}


/*-----------------------*/

/*Coding challenge three*/

/*-----------------------*/

//ensure that nothing above is printed 
}

var birthYears = [1990, 1994, 1965, 2010, 2017, 1947];


function printFullAge(birthYears){
    var agesOfPerson = [];
    var isPersonOfAge = [];
    var currentYear = 2017;
    for(var i = 0; i < birthYears.length; i++){
        agesOfPerson[i] = currentYear - birthYears[i];
        if(agesOfPerson[i] >= 18){
            isPersonOfAge[i] = true;
        }else{
            isPersonOfAge[i] = false;
        }
    }
    return isPersonOfAge;
}

var full_1 = printFullAge(birthYears);
console.log(full_1);

birthYearsSecond = [1965, 2008, 1992];
console.log(printFullAge(birthYearsSecond));




