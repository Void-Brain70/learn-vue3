const href = document.getElementById('href');
const hostName = document.getElementById('hostName');
const pathName = document.getElementById('pathName');
const protocol =document.getElementById('protocol');
const port =document.getElementById('port');

href.innerHTML = location.href;
hostName.innerHTML = location.hostname;
pathName.innerHTML =location.pathname;
protocol.innerHTML =location.protocol;
port.innerHTML =location.port;

function load(){
    window.location.assign('https://www.w3schools.com');
}
