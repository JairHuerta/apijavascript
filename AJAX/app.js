document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    // Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    //Una vez que carga la página
    // xhr.onload = function(){
    //     //200 : correcto | 403 : Prohibido | 404 : No encontrado
    //     if(this.status === 200){
    //        document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }

    xhr.onreadystatechange = function(){
        
        console.log(`Estado ${this.readyState}`);

        if(this.readyState === 4){
            // console.log(this.responseText)
        }
    }

    // Ready status
    /*

    0- no inicalizado
    1.- Conexión establecida
    2.- Recibido
    3: Procesando
    4: Respuesta lista
    */



    // Enviar el request
    xhr.send();
}