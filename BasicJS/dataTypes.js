//Primitive Data Types
//->String
//->Number
//->Boolean
//->Undefiend
//->Symbol
//->Null

let a = "CSE";
let b = 3.14;
let c = true;
let d
let e = null;

// console.log(a, b, c, d ,e);

//Non-Primitive
//->object
//->Array
//->function

let person = {
    name : "Anik Das",
    dept: "CSE",
    age : 24,
    id : 70,
    hobby : ["photography", "football", "travel"],
    Concat(){
        return this.name+this.dept;
    }
}
// console.log(person.hobby[2])

function fullName(fName="Anik", lName="Das"){
    return fName+lName;
}
console.log(fullName());
console.log(person.Concat());
