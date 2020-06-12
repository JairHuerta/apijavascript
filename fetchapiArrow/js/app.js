// function

let aprendiendo;

aprendiendo = function(){
    console.log('aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}

// Una linea no requiere llave 
aprendiendo = () => console.log('Aprendiendo JavaScript');
// Retornar un valor
aprendiendo = () => 'Aprendiendo JavaScript';
// Retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
// Pasar parametros
aprendiendo = (tecnología) => console.log( `Aprendiendo ${tecnología}`);
// Pasando 1 parametro
aprendiendo = tecnología => console.log( `Aprendiendo ${tecnología}`);
// Pasando 2 parametros
aprendiendo = (tecn1, tecn2) => console.log( `Aprendiendo ${tecn1} y ${tecn2}`);

const productos = ['Disco', 'Camisa', 'Guitarra'];
/*
const letrasProducto = productos.map(function(producto){
    return producto.length;
});
console.log(letrasProducto)
*/

// const letrasProducto = productos.map((producto)=>{
//     return producto.length;
// });

// const letrasProducto = productos.map(producto => producto.length);

// console.log(letrasProducto)

productos.forEach(producto => console.log(producto));