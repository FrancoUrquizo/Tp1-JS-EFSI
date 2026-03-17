function formatearNombre(nombre) {

    let nuevoNombre =
        nombre.charAt(0).toUpperCase() +
        nombre.slice(1).toLowerCase();

    const resultado = document.getElementById("resultadoEj1");

    resultado.innerHTML = "El nombre con la forma adecuada: " + nuevoNombre;
}


function ContarLetras(texto) {

let nuevoTexto = texto.trim().replaceAll(" ", "").length
    

    const resultado = document.getElementById("resultadoEj2");

    resultado.innerHTML = "El numero de letras es: " + nuevoTexto;
}

function NumeroMayor(num1, num2, num3) {
let NumeroMayor = 0

if (num1 >= numb2 )
{
    if(num1 >= num3)
    {
NumeroMayor = num1
    }
if(numb3 >= num1)
{
    NumeroMayor = numb3
}
}


if(numb2 >= num3)
{
    NumeroMayor = num2
}


    const resultado = document.getElementById("resultadoEj3");

    resultado.innerHTML = "El numero mayor: " + NumeroMayor;
}