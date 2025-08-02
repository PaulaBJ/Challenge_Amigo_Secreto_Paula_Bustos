// El principal objetivo de este desafío es fortalecer tus 
// habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

//Variable tipo array global que contendra el nombre de los amigos.
let amigos = [];

// Agregar nombres: Los usuarios escribirán el nombre de un amigo 
// en un campo de texto y lo agregarán a una lista visible al hacer 
// clic en "Adicionar".
//Funcion para agregar amigos.
function agregarAmigo() {

    //Variable para obtener el valor del amigo escrito en el recuadro.
    let nombre = document.getElementById('amigo').value.trim();
    
    // Validar entrada: Si el campo de texto está vacío, el programa 
    // mostrará una alerta pidiendo un nombre válido.
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    //Condición para validar que no se repitan nombres.
    if(amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())){
        alert("No pueden repetirse nombres.");
        return;
    }
    
    //Agregar el nombre al array si es válido.
    amigos.push(nombre);

    //Agregar los nombres a la lista.
    actualizarListaAmigos();
    //Limpia el campo de entrada en donde se escribe el nombre del amigo.
    document.getElementById("amigo").value="";
}

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", 
// se seleccionará aleatoriamente un nombre de la lista y se 
// mostrará en la página.
function sortearAmigo(){

    //Comprobación para que determinar que el array no este vacío.
    if(amigos.length === 0){
        alert("No hay amigos agregados en la lista.");
        return;
    } 
    
    //Se genera un número aleatorio para la elección del amigo.
    let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
    //Se guarda el nombre del amigo elegido en una variable.
    let amigoElegido = amigos[indiceAleatorio];

    //Se muestra en pantalla el nombre del amigo sorteado.
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>El amigo sorteado es: ${amigoElegido}</li>`;
}

// Visualizar la lista: Los nombres ingresados aparecerán en una 
// lista debajo del campo de entrada.
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpiar lista existente
    lista.innerHTML = "";

    // Recorrer array amigos con un ciclo for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


