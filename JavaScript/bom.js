let myWindow;

const width = document.getElementById('width');
const height = document.getElementById('height');

width.innerHTML = window.innerWidth;
height.innerHTML = window.innerHeight;

function openWindow(){
    myWindow =  window.open('http://google.com');
}

function closeWindow(){
    myWindow.close();
}