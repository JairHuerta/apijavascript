const cargarPost = document.querySelector('#cargar').addEventListener('click', cargarAPI);



function cargarAPI(){
    // console.log('presionando...');

    //Crear el objeto
    const xhr = new XMLHttpRequest();
    //Abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    //Cargar y leer datos
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(JSON.parse(this.responseText));
            const respuesta = JSON.parse(this.responseText);
              
            let contenido = '';
            respuesta.forEach(function(post){
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    //Enviar la conexion (siempre revisar que esa linea este escrita en caso de que el codigo no funcione)
    xhr.send();
}