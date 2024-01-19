/*

VARIABLES EN JS:

--> Existen 3 formas de crear variables en JS
    var
    const
    let

    En las nuevas versiones solo se utilizan 2
*/

//Inicializar una variable con un valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto);

//Las variables se pueden reasignar, reasignamos/cambiamos el valor de la variable 'producto'
producto = "Monitor de 19 Pulgadas";
console.log(producto);

//Javascript es un lenguaje de tipo dinámico, no se especifica el tipo de dato, por eso aca a la variable producto le estamos guardando un número
producto = 20;
console.log(producto)

//Se puede inicializar sin valor y asignar el valor después
var disponible;
disponible = true;
disponible = false;

//Inicializar múltiples variables, estamos inicializando y asignando valores a 3 variables.
var categoria = "Computadoras",
    marca = "Marca Famosa",
    calificacion = 5;

//Las variables NO PUEDEN INICIAR con números. ❌
var 99dias; 

//Pero, si pueden contener numeros, guiones bajo despues de una letra(s) ✔
var dias99;
var d1;
var dias_99;
var diasNuevos;
var _21;
var __33;