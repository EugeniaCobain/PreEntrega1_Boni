let total = 0;
let interes = 0.05;

//0- LOG IN
//Función para loguearse e ingresar al sistema con 3 intentos
function loguear(){
    let usuario = "Euge";
    let pass = "123";
    let nombre = "Eugenia";
    let usuarioIngresado;
    let passIngresado;
    let intentos = 0;
    let acceso = false;
 
 while (intentos < 3 && !acceso) {
    usuarioIngresado = prompt("Por favor, ingrese su usuario");
    passIngresado = prompt("Por favor, ingrese su clave");
 
    if (usuario === usuarioIngresado && pass === passIngresado){
       acceso = true;
       alert(`Bienvenido, ${nombre}`);
       mostrarMenu();
    } else {
       intentos++;
       if(intentos < 3){
          alert("Usuario o contraseña incorrectos. Por favor, intente nuevamente");
       } else {
          alert("Ha superado el número máximo de intentos. Espere unos instantes y vuelva a ingresar.");
       }
    } 
 }
 }

//1- FUNCIONES DE COMPRA
//1.1- Agregar productos al carrito
function agregarCarrito(producto, precio) {
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto}`+'s que desea comprar:'));

    if (cantidad > 0) {
        let subtotal = cantidad * precio;
        alert(`Se agregaron ${cantidad} ${producto}(s) al carrito. Subtotal: $${subtotal}`);
        total += subtotal;
        comprar();
    } else {
        alert('Debe agregar al menos un producto');
        agregarCarrito(producto, precio);
    }
 }

 //1.2- Función multiplicar cantidad de productos por su precio
    //Experiemntando con función anónima
const multiplicar = function (cantidad, precio){ 
    let total = cantidad * precio;
    return total;
 }

 //1.3- Función para calcular el interés del monto cuotificado
    //Experimentando con función flecha
 const calcularInteres = () =>{
    let cuotas;
    let totalConInteres;
    let montoAabonar;
    cuotas = parseInt(prompt("Elija el número de cuotas a pagar"));
    if (cuotas<= 3){
         totalConInteres = total + (total * interes);
    console.log(totalConInteres);
    montoAabonar = totalConInteres / cuotas;
    console.log(montoAabonar);
    alert(`Abonará $${totalConInteres} en ${cuotas} cuotas de $${montoAabonar}`);
    continuar();
    } else {
        alert(`Ofrecemos hasta tres cuotas con un ${interes}% de recargo. Elija la cantidad de cuotas en las que desea abonar`)
        calcularInteres();
    }
}

 //1.4- Ir a comprar
 function comprar(){
    let respuesta;
     do{
          respuesta = prompt("Para ir a pagar presione la letra P; para volver al menú principal, presione la letra M. Para salir, presione la letra S");
        } while (!(respuesta.toLowerCase() == "p" || respuesta.toLowerCase() == "m" || respuesta.toLowerCase() == "s"));
        
        //Ir a pagar
        if (respuesta.toLowerCase() == "p") {
           pagar();
        //Salir del programa
        } else if (respuesta.toLowerCase() == "s"){
            alert("Gracias por elegirnos. ¡Hasta pronto!");
            return;
        } else {
        //Volver al menú principal
        mostrarMenu();
        }             
}

//1.5- Ir a pagar
 function pagar(){
    let pago = prompt(`Total a pagar: $${total}. ¿Cómo deseas abonar? \n 1- En un pago. Presione 1 \n 2- Crédito en hasta 3 cuotas con un ${interes}% de recargo. Presione 2`);
    //Pago en cuotas interés
    if (pago === "2"){
        calcularInteres();
    //1 pago sin interés
    } else if (pago === "1") {
        alert(`Usted pagará $${total}`);
        continuar();
    } else {
        alert("Elija una de las formas de pago ofrecidas");
        pagar();
    } 
 }

//2- FUNCIONES PARA IR Y VOLVER DENTRO DEL PROGRAMA
//2.1- Función para volver al menú o salir del programa
    //Experimentando con la función flecha
 const volverSalir = () =>{
    let respuesta;
     do{
          respuesta = prompt("Para volver al menú principal, presione M. Para salir, presione S");
        } while (!(respuesta.toLowerCase() == "m" || respuesta.toLowerCase() == "s"));
        
    //Salir del programa
        if (respuesta.toLowerCase() == "s") {
           alert("Gracias por elegirnos. ¡Hasta pronto!");
           return;
        }              
    //Volver al menú principal
        mostrarMenu();
 }

 //2.3- Función para continuar con el pago, volver al menú o salir del programa
 function continuar(){
    let respuesta=prompt("¿Desea continuar con el pago? S/N")
     if (respuesta.toLowerCase() == "s") {
         alert("Procesando el pago...");
         alert("¡Pago exitoso! Muchas gracias por su compra");
         volverSalir();
         total = 0;
      } else if (respuesta.toLowerCase() == "n") {
         volverSalir();
      } else {
         continuar();
      }
 }
 
//3- MENÚ
 function mostrarMenu(){
    total = 0;
    let opcion = prompt("Ingrese el número de lista del producto que desea agregar al carrito: \n1- Fotos. Precio unitario: $100 \n2- Pósters. Precio unitario: $200 \n3- Tazas. Precio unitario: $300" );
    switch(opcion){
       case "1":
          precio = 100; //Declaro el precio de cada producto porque puede aumentar en cualquier momento, jeje
          producto = "foto";
          agregarCarrito(producto, precio);
       break;
       
       case "2":
          precio = 200;
          producto = "póster";
          agregarCarrito(producto, precio);
       break;
 
       case "3":
          precio = 300;
          producto = "taza";
          agregarCarrito(producto, precio);
       break;

       default:
          alert("Lo sentimos. No contamos con esa opción. Elija un producto de la lista:");
          mostrarMenu();
          break;
    }
    }
   
    //LLAMADA A LA FUNCIÓN QUE EJECUTA TODO EL PROGRAMA
    loguear();
