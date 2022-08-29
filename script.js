// alert("Este programa es de una calculadora básica");
// function suma(a,b){
//   return a+b;
// }

// function resta(a,b){
//   return a-b;
// }

// function multiplicacion(a,b){
//   return a*b;
// }

// function division(a,b){
//   return a/b;
// }

/*let seleccion = parseInt(prompt("Seleccione la operación que desee\n 1: Suma\n 2:Resta\n 3:Multiplicación\n 4:División\n 5:Salir\n"));

while (seleccion<5){
let n1 = parseInt(prompt("Ingrese el número 1"));
let n2 = parseInt(prompt("Ingrese el número 2"));
var s
if(seleccion===1){
  alert("Seleccionaste de operación la suma y el resultado es  "+suma(n1,n2))
}else if(seleccion===2){
   alert("Seleccionaste de operación la resta y el resultado es  "+resta(n1,n2))
}else if(seleccion===3){
   alert("Seleccionaste de operación la multiplicación y el resultado es  "+multiplicacion(n1,n2))
}else if(seleccion===4){
   alert("Seleccionaste de operación la división y el resultado es  "+division(n1,n2))
}else{
  alert("Ingresaste un valor inválido")
}
seleccion = parseInt(prompt("Seleccione la operación que desee\n 1: Suma\n 2:Resta\n 3:Multiplicación\n 4:División\n 5:Salir\n"));
}
alert("Decidiste salir Hasta Pronto")*/

class Calculadora {
  sumar(num1, num2) {
      return num1 + num2;
  }

  restar(num1, num2) {
      return num1 - num2;
  }

  dividir(num1, num2) {
      return num1 / num2;
  }

  multiplicar(num1, num2) {
      return num1 * num2;
  }
} 