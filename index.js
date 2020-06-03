// Arrays
let num = new Array(10);
let numArray = [1,2,3,4,5,6,7,8,9,10];
let mixedArray = ["one",2,"three",4,"five"];
let anotherMixedArray = ["six",7,"eight",9,"ten"];
let emptyArray = [];
// Create an array of numbers, 1 through 10
for(let i = 1; i <= 10; i++) {
  emptyArray.push(i)
}

console.log(emptyArray)


// Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.

function forLoop(arr) {
  for(let el in arr) {
    console.log(arr[el])
  }
}

forLoop(mixedArray)

// Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

function whileLoop(arr) {
  let i = 0;
  while(i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

whileLoop(anotherMixedArray)


// Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.
//Map
let map = numArray.map((num) => num * 2);
console.log(map);

//Filter
let filter = numArray.filter((el) => el % 2 == 0);
console.log(filter);

//Reduce
let reduce = numArray.reduce((el, index) => {
  return el + index;
});

console.log(reduce);

// Objects

// Begin with the starter code below ...
let people = ['Kookla','Fran','Ollie'];

let stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

// Using spread and destructuring assignment, create a new array called `newPeople', which is a copy of the `people` array, with a person named 'Odie' added to the beginning and one named 'Garfield' added to the end.

let newPeople = ['Odie',...people,'Garfield'];
console.log(newPeople);

// Using spread and destructuring assignment, create a new object called `newStuff', which is a copy of the `stuff` object, with a new car added to the end of the `cars` array within it

let newStuff = {...stuff};
newStuff.cars.push('Jeep');
console.log(newStuff);

// Create a `state` object with keys of people and stuff that contain the `people` and `stuff` data.
// Do this using object destructuring assignment

let state = {"People" : people, "Stuff" : stuff};
console.log(state);

// Using spread and destructuring assignments, create a new object called `newSate`, repeating the `newPeople` and `newStuff` steps above but directly within the people and stuff nodes of the state object (don't just spread in `newPeople` and `newStuff`)

let newState = {"People" : newPeople, "Stuff" : newStuff};
console.log(newState);

// Prove that the original people, stuff, and state are unchanged.
// const people = ['Kookla','Fran','Ollie'];

console.log(people);
console.log(stuff);
