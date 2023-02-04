// Date Object

const date = new Date();
console.log(date);
console.log(date.toString()); //long format
console.log(date.toUTCString()); // UTC Format
console.log(date.toDateString()); // Short fotmat
console.log(date.toTimeString()); // Time Short Format
console.log(date.toISOString()); //ISO Format

let y = date.getFullYear(); //return year
let m = date.getMonth(); //return month (0)JAN - (11)DEC
let d = date.getDay(); //0-SUN 1-MON 2-TUE 3-WED 4-THU 5-FRI 6-SAT
let t = date.getTime();
let h = date.getHours();

console.log(y,m,d,t,h);