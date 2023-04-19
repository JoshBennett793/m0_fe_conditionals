// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`

// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = '4';
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log(
  'Is numberTeachers greater than numberStudents?',
  numberTeachers > numberStudents,
);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log(
  'Is numberTeachers less than numberStudents?',
  numberTeachers < numberStudents,
);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(
  'Is numberTeachers strictly equal to stringTeachers?',
  numberTeachers === stringTeachers,
);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(
  'Is numberTeachers not equal to numberStudents?',
  numberTeachers !== numberStudents,
);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log('Is numberStudents greater than or equal to 20?', numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log('Is numberStudents greater than or equal to 21?', numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log('Is numberStudents less than or equal to 20?', numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log('Is numberStudents less than or equal to 21?', numberStudents <= 21);
// this should log: true

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
/* Line 71 will log a boolean to the console based on whether 4 is less than 9. In this case, since 4 is 
less than 9, it will log 'true' to the console. */

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/* Line 76 is assigning the number 3 to a variable with the name of 'books'. Line 77 will log a boolean
to the console based on whether 4 is less than the value of the variable 'books'. In this case, since
'books' has been assigned the value of 3 and 3 is less than 4, '4 < books' will evaluate to 'false', 
thus logging 'false' to the console. */

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/* Line 84 is assigning the number 6 to a variable with the name of 'friends'. Line 85 is assigning 
the number 2 to a variable with the name of 'siblings'. Line 86 will log a boolean to the console based
on whether the value of 'friends' is greater than the value of 'siblings'. In this case, since 'friends' 
has been assigned the value of 6 and 'siblings' has been assigned the value of 2, 'friends > siblings' 
or '6 > 2' will evaluate to 'true', thus logging 'true' to the console. */

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/* Line 94 is assigning the number 9 to a variable with the name of 'attendees'. Line 95 is assigning 
the number 8 to a variable with the name of 'meals'. Line 96 will log a boolean to the console based on
whether the value of 'attendees' is not strictly equal to the value of 'meals'. In this case, since the 
value of 'attendees' is not equal to the value of 'meals', 'attendees !== meals' will evaluate to 'true', 
thus logging 'true' to the console.  */

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
/* I decided to evaluate whether the dog loves to play and is a puppy by writing a 
conditional to determine whether the 'lovesToPlay' variable is true and the age 
is less than or equal to 1. This would be based on an agreed upon determination that 
any dog with an age less than or equal to 1 is considered a puppy. In this case, both 
conditionals evaluated to 'true', thus logging 'true' to the console.*/
