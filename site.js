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
function sumarArray(numeros){
    
    let arrayDeStrings = numeros.split(",");
    let suma = 0;

    for (let i = 0; i < arrayDeStrings.length; i++) {
       
        let numero = Number(arrayDeStrings[i].trim());
        
      
        if (!isNaN(numero)) {
            suma += numero;
        }
    }

   
    document.getElementById("resultadoEj5").innerHTML = "La suma total es: " + suma;

}
   function obtenerPares(numeros) {
   
    let pares = []; 

    for (let i = 0; i < arrayDeStrings.length; i++) {
        
        let textoLimpio = arrayDeStrings[i].trim();
        
       
        if (textoLimpio !== "") {
           
            let numero = parseInt(textoLimpio, 10);
            
           
            if (!isNaN(numero) && numero % 2 == 0) {
                pares.push(numero); 
            }
        }
    }

    
    let elementoResultado = document.getElementById("resultadoEj7");
    
    if (pares.length == 0) {
        elementoResultado.innerHTML = "No se encontraron números pares.";
    } else {
        elementoResultado.innerHTML = "Los números pares son: " + pares.join(", ");
    }
}

const productos = [
    {nombre: "Mouse", precio: 10},
    {nombre: "Teclado", precio: 25},
    {nombre: "Monitor", precio: 200}
];

function calcularPrecioTotal(listaProductos) {
    let total = 0;

 
    for (let i = 0; i < listaProductos.length; i++) {
       
        total += listaProductos[i].precio;
    }

   
    const resultado = document.getElementById("resultadoEj10");
    if (resultado) {
        resultado.innerHTML = "El precio total es: $" + total;
    }
    
    return total; 
}
const usuarios = [
    {nombre: "Ana", edad: 17},
    {nombre: "Juan", edad: 25},
    {nombre: "Pedro", edad: 30}
];

function extraerNombres() {
    
    const nombres = usuarios.map(usuario => usuario.nombre);

  
    document.getElementById("resultadoEj11").innerHTML = (nombres);
    
    console.log(nombres);   
}
const usuarioss = [
    {nombre: "Ana", edad: 17},
    {nombre: "Juan", edad: 25},
    {nombre: "Pedro", edad: 30}
];

const usuariosss = [
    {nombre: "Ana", edad: 17},
    {nombre: "Juan", edad: 25},
    {nombre: "Pedro", edad: 30}
];

function filtrarMayores() {
  
    const mayoresDeEdad = usuariosss.filter(usuario => {
        return usuario.edad >= 18;
    });

    
    const resultado = document.getElementById("resultadoEj12");
    resultado.innerHTML = "Usuarios mayores de 18: " + JSON.stringify(mayoresDeEdad);
    
    console.log(mayoresDeEdad);
}
function sumaEdades() {
   
    const totalEdades = usuarioss.reduce((acumulador, usuario) => {
        return acumulador + usuario.edad;
    }, 0); 

   
    document.getElementById("resultadoEj13").innerHTML = "La suma total de edades es: " + totalEdades;
}
const misProductos = [
    {nombre: "Mouse", precio: 10},
    {nombre: "Teclado", precio: 25},
    {nombre: "Monitor", precio: 200}
];

function buscarProducto(lista, nombreABuscar) {
      const productoEncontrado = lista.find(producto => {
      
        return producto.nombre.toLowerCase() === nombreABuscar.toLowerCase();
    });

    
    const resultado = document.getElementById("resultadoEj16");
    
    if (productoEncontrado) {
        resultado.innerHTML = "Encontrado: " + productoEncontrado.nombre + " - $" + productoEncontrado.precio;
    } else {
        resultado.innerHTML = "Producto no encontrado.";
    }
}
const productosTienda = [
    {nombre: "Mouse", precio: 10},
    {nombre: "Teclado", precio: 25},
    {nombre: "Monitor", precio: 200},
    {nombre: "Laptop", precio: 800},
    {nombre: "Cable HDMI", precio: 15}
];

function obtenerProductosCaros() {
   
    const productosCaros = productosTienda.filter(producto => {
        return producto.precio > 50;
    });

  
    const resultado = document.getElementById("resultadoEj17");
    
    if (productosCaros.length > 0) {
       
        const nombresCaros = productosCaros.map(p => `${p.nombre} ($${p.precio})`);
        resultado.innerHTML = "Productos caros: " + nombresCaros.join(", ");
    } else {
        resultado.innerHTML = "No hay productos que superen los $50.";
    }
}
function calcularPromedio(textoInput) {
    
    let arrayDeStrings = textoInput.split(",");
    let sumaTotal = 0;
    let contadorValido = 0;

    for (let i = 0; i < arrayDeStrings.length; i++) {
        let numero = parseFloat(arrayDeStrings[i].trim());
        
       
        if (!isNaN(numero)) {
            sumaTotal += numero;
            contadorValido++;
        }
    }

    let promedio = contadorValido > 0 ? sumaTotal / contadorValido : 0;

  
    document.getElementById("resultadoEj18").innerHTML = "El promedio es: " + promedio;
}

