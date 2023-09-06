// JavaScript Array concat() Method
const arr1=["C","C++","Python"];
const arr2=["Java","JavaScript","Android"];
const arr3=["Ruby","Kotlin"];
const dept = ['CSE', 'EEE', 'ME', 'BBA', 'CIVIL', 'LAW', 'Pharmacy'];

let conCat = arr1.concat(arr2,arr3,'Vue.js');
console.log(conCat);//return new array

// JavaScript Array length
console.log(arr2.length);//return array length

// JavaScript Array toString()
console.log(dept.toString()); //return  string

// JavaScript Array join()
console.log(dept.join('*')); //return string

// JavaScript Array pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitRemove = fruits.pop();//Return value that was popped out
console.log(fruitRemove);
console.log(fruits);

// JavaScript Array push()
let fruitAdd = fruits.push('Kiwi'); //Return array length
console.log(fruitAdd);
console.log(fruits);

// JavaScript Array shift()
const player = ['Messi', 'Ronaldo', 'Neymer', 'Martinez'];
let playerShift = player.shift();//Return value that was shifted out
console.log(playerShift);
console.log(player);

// JavaScript Array unshift()
let playerUnshift = player.unshift('Pedri');//return array length
console.log(playerUnshift);
console.log(player);
