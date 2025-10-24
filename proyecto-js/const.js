//Declaramos la variable tipo const. Esto nos permite fijar un valor constante a la variable. No podrá reasignarse otro valor.
const textoConsola="Este es mi nuevo texto desde la consola con una variable const. Como su nombre lo dice es una variable con un valor constante";

//Intentamos cambiar el valor de la variable const. Esto genera error.
textoConsola="Cambiamos texto de la variable const";

console.log(textoConsola);