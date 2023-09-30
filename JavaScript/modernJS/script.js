// Modern JS Truth and False
let value = ""
//False,0, "", NULL, NaN, undefined
if(value){
    console.log(`'It's True`);
}
else{
    console.log(`It's False`);
}

//Arrow Function
let myArrowFunction = () =>{
    console.log("I am Arrow Function");
}
myArrowFunction();

//Ternary Operator
let age = 11;
let r = (age>=18) ? 'Adult' : (age<10) ? 'Child' : 'Young' ;
console.log(r);

//Array find() method
const arr = ['CSE','EEE','ME','BBA'];
let result = arr.find(function (currentValue){
  return currentValue === 'ME';
})
console.log(result);

//Array findIndex() method
const arr2 = [1,2,3,4,5,6,7];
const res = arr2.findIndex((currentValue)=>{
    return currentValue >10
})
console.log(res)
