// Local Storage 
let name = "Anik Das"
localStorage.setItem('secret' , name); 

let result;
result = localStorage.getItem('secret');
console.log(result);

localStorage.removeItem('secret');

//Session Storage
let id = 70;
sessionStorage.setItem('ID', id);

let display;
display = sessionStorage.getItem('ID');
console.log(display);

sessionStorage.removeItem('ID');

//JSON
let data = {
    name: "Anik Das",
    id : 18101070,
    dept: 'CSE',
    session: '2018-2022',
    cgpa: 3.74
}

localStorage.setItem('data', JSON.stringify(data))

let show;

show = JSON.parse(localStorage.getItem('data'));
console.log(show);


