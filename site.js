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
  
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let mayor;

 
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

   
    const resultado = document.getElementById("resultadoEj3");
    resultado.innerHTML = "El número mayor es: " + mayor;
}