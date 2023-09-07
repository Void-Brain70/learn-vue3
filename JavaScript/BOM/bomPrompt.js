const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert(){
    window.alert('Hello Anik');
}

function showConfirm(){
    let txt;
    if(window.confirm('Press a button')){
        txt = 'You Pressed OK';
    }
    else{
        txt = 'You Pressed Canceled';
    }
    confirm.innerHTML = txt;
}

function showPrompt(){
    let data = window.prompt("Plz enter any data or value");
    let txt;
    if(data === null || data === ''){
        txt ='Canceled';
    }
    else{
        txt ='Given Data or value';
    }
    prompt.innerHTML =txt;
}