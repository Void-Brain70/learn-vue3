//if else

let age = 17;
if(age>18 && age<60){
    console.log("you have NID");
}
else if(age>60 && age<80){
    console.log("NID");
}
else{
    console.log("you are a child");
}

//switch case
let color = 'red';
switch(color){
    case 'red':
        console.log("Red color");
        break;
    case 'green':
        console.log("Green Color");
        break;
    default:
        console.log("Unknown color");        
}