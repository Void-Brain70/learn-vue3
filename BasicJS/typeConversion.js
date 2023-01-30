//Type Conversion
//String to Number Conversion
// let pi = "3.1416";
let pi = Math.PI
// console.log(typeof(pi),Number(pi),typeof(Number(pi)),Number(""),Number(" "),Number("A"));
console.log(typeof(pi),parseFloat(pi),parseInt(pi));

//Number to String Conversion
let str = String(10+"1");
console.log(str,String(10+10));

let x =18.101070;
console.log(x,x.toString(),x.toPrecision(3));

//Boolean to Number Conversion
console.log(Number(false),Number(true));

//Boolean to String Conversion
console.log(false,String(true),false.toString());