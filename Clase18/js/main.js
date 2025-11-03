function sumar(){
    //alert("Se ejecuto la función sumar")
    //print("Hola mundo!")
    //document.writeln("Hola Mundo!")

    res=document.getElementById("resultado")
    numero1=parseFloat(document.getElementById("nro1").value)
    numero2=parseFloat(document.getElementById("nro2").value)
    //res.value="Hola Mundo!"
    //res.style="background-color: yellow;"
    res.value=numero1+numero2
}

function restar(){
    res=document.getElementById("resultado")
    numero1=parseFloat(document.getElementById("nro1").value)
    numero2=parseFloat(document.getElementById("nro2").value)
    res.value=numero1-numero2
}

function multiplicar(){
    res=document.getElementById("resultado")
    numero1=parseFloat(document.getElementById("nro1").value)
    numero2=parseFloat(document.getElementById("nro2").value)
    res.value=numero1*numero2
}

function dividir(){
    res=document.getElementById("resultado")
    numero1=parseFloat(document.getElementById("nro1").value)
    numero2=parseFloat(document.getElementById("nro2").value)
    if(numero2!=0)             res.value=numero1/numero2
    else                    res.value="Error / 0"
}