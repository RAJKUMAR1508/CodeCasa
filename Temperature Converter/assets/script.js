document.getElementById("convert-button").onclick = convertTemp;
document.getElementById("reset-button").onclick = clearAll;

function convertTemp(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if(fahrenheit != ''){
        celsius = (parseFloat(fahrenheit) - 32)/1.8;
    }
    else{
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

function clearAll(){
    document.getElementById("celsius").value = '';
    document.getElementById("fahrenheit").value = '';
}