const texto = document.getElementById("texto");
const btnCrear=document.getElementById("crearBtn");
const lista= document.getElementById("lista");

//document.addEventListener("DOMContentLoaded", () => {});
window.onload =() => {

    const crearVinheta = () => {

        btnCrear.addEventListener("click", () => {
            const contenido =texto.value.trim();
            if (isNaN(contenido)) {
                crearLista(contenido);
                //limpiar el cuadro de texto y asignar el foco
                texto.value = '';
                texto.focus();
            } else if (texto.value === '') {
                alert("Debes introducir un texto");
                texto.value = '';
                texto.focus();
            } else {
                alert("El valor introducido es numérico");
                texto.value = '';
                texto.focus();
            }
        })

    }
    const crearLista = (contenido) => {
        const linea = document.createElement("li");
        linea.innerHTML = contenido;
        lista.appendChild(linea);
    }
    const cambiarAspecto=()=>{
        lista.addEventListener("contextmenu",(evt)=>{
            evt.preventDefault();
            console.log("Clic derecho detectado");
            if(evt.target.tagName = 'li'){
                cambiarColorYTexto(evt.target);
            }
        })
        lista.addEventListener("click",(evt)=>{
            if (evt.target.tagName === 'LI') { // Verifica si el elemento clicado es un <li>
                lista.removeChild(evt.target); // Elimina el elemento de la lista
            }
        })

    }
    const cambiarColorYTexto = (elemento) =>{
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        //cambiar color
        elemento.style.backgroundColor=randomColor;
        //Hacer tachado
        elemento.style.textDecoration="line-through";
        //Color del texto blanco
        elemento.style.color="white";
        //tamaño 20px
        elemento.style.fontSize="20px";
    }
//crea una nueva linea(li) dentro de la lista (<ul>);

    crearVinheta();
    cambiarAspecto();
}