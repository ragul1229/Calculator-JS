let display=document.getElementById("display");

window.onload=()=>{
    const saved=localStorage.getItem('calci')
    if(saved){
        display.value=JSON.parse(saved)
    }
}


function savetolocal(){
    localStorage.setItem('calci',JSON.stringify(display.value))
}

function appendValue(value){
    display.value+=value;
    savetolocal()
}
function clearvalue(){
    display.value=''
    savetolocal();
}
function calculate(){
    try{
        display.value=eval(display.value)
        savetolocal()
    }
    catch(error){
        display.value='error'
        savetolocal()
    }

}