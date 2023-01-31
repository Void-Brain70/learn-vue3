//Array and Array Methods

let fifa = ['France', 'Croatia', 'Morocco'];

//array length
console.log(fifa.length);

//Add element
//push() --- add last 
//unshift() --- add first
fifa.push('Brazil');
fifa.unshift("Argentina");
console.log(fifa);

//Remove element
//pop() --- remove last element
//shift() --- remove first element
fifa.pop();
console.log(fifa);
fifa.shift();
console.log(fifa);

//Array concat
let arr1 = ['a','b','c','d'];
let arr2 = ['A','B','C','D'];
console.log('concat->', arr1.concat(arr2));

//Array reverse
console.log(arr1.reverse());

//Array convert in string
console.log(arr2.toString(), arr1.toLocaleString());

//includes() check if this array has the given element
// return boolean
console.log(arr1.includes('c'));

//map()
//specific callback function run for each element return another array
let team = ['Argentina','France', 'Croatia', 'Morocco','Brazil'];

let result = team.map(el=> el + "-> Qualifiy");
console.log(result);

//filter()
//filter out on a single condition applied on each elememt and return an new array
let teamPoints = [6,7,5,6,6];
// let r = teamPoints.filter(el => el > 5);
//every() return boolean value depend on all value
// let r = teamPoints.every(el => el > 4);
//findIndex() return index number
// let r = teamPoints.findIndex(el => el > 5);
//reduced(prev,current) 
let r = teamPoints.reduce((p,c) => p+c);
console.log(r);

//find()
//return first matched single element 
let winnerTeam = ['Argentina','France', 'Croatia', 'Morocco','Brazil'];
// let w = winnerTeam.find(el => el =='Argentina');
//splice()
// let w = winnerTeam.splice(0,1);
//slice()
let w = winnerTeam.slice(0,1);
console.log(w);




