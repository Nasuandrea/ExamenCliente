//Declarar un array de objetos de clientes
const datosClientes = [
    { id: 1, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson" },
    { id: 2, email: "lindsay.ferguson@reqres.in", first_name: "Lindsay", last_name: "Ferguson" },
    { id: 3, email: "tobias.funke@reqres.in", first_name: "Tobias", last_name: "Funke" },
    { id: 4, email: "byron.fields@reqres.in", first_name: "Byron", last_name: "Fields" }
];
// Array de objetos pizzas
const datosPizza = [
    { nombre: "Pizza margarita", precio: 20, identificador: 1, ingredientes: ["Champiñones", "Jamón Cocido"] },
    { nombre: "Pizza barbacoa", precio: 25, identificador: 2, ingredientes: ["Carne", "Salsa barbacoa", "Extra de queso"] },
    { nombre: "Pizza atún", precio: 22, identificador: 3, ingredientes: ["Atún", "Aceitunas negras", "Anchoa"] }
];

const idIntroducido = prompt("Introduce el id de cliente");
const clienteEncontrado = datosClientes.find(cliente=>cliente.id==idIntroducido);
const pizzaEncontrada =  datosPizza.find(pizza=>pizza.identificador==idIntroducido);
const divCliente = document.getElementById("cliente");
const divIngredientes = document.getElementById("ingredientes");
const divPizza = document.getElementById("pizzas");
let pizza = null;
document.addEventListener("DOMContentLoaded",ev => {

//Apartado 1
const mostrarDatosCliente = (idIntroducido) =>{

    if(clienteEncontrado){
      const nombre = clienteEncontrado.first_name +" "+clienteEncontrado.last_name;
      const linea= document.createElement("h1");
      linea.innerHTML= nombre;
      divCliente.appendChild(linea);
    }
    else{
        alert("Cliente no encontrado");
    }
}
mostrarDatosCliente(idIntroducido);

//Apartado 3
const mostrarIngredientesPizza = (idIntroducido)=>{
    if(pizzaEncontrada){
        const nombre =   pizzaEncontrada.nombre;
        const ingredientes = pizzaEncontrada.ingredientes;
        const linea= document.createElement("h1");
        linea.innerHTML= "Los ingredientes de la "+nombre+" son:";
        divIngredientes.appendChild(linea);
        // for (let i = 0; i < pizzaEncontrada.ingredientes.length; i++) {
        //     const parrafo = document.createElement("h2");
        //     parrafo.innerHTML=ingredientes[i];
        //     divIngredientes.appendChild(parrafo);
        // }
        ingredientes.forEach(ingrediente => {
            const parrafo = document.createElement("h2");
            parrafo.innerHTML = ingrediente;
            divIngredientes.appendChild(parrafo);
        });
    }
    else{
        alert("Pizza no encontrada");
    }
}
//Apartado 7: Al cargar los ingredientes de la pizza que el resultado se muestre transcurrido unos segundos.
setTimeout(()=>{
    mostrarIngredientesPizza(idIntroducido);
},2000);


//Apartado 2
const mostrarTablaDatosPizza = ()=>{

    const table = document.createElement("table");
    const encabezado = document.createElement("tr");
    const thNombre = document.createElement("th");
    const thPrecio = document.createElement("th");thNombre.textContent="NOMBRE";

    encabezado.appendChild(thNombre);
    thPrecio.textContent="PRECIO";
    encabezado.appendChild(thPrecio);
    table.appendChild(encabezado);

    datosPizza.forEach(pizza =>{
        const tr = document.createElement("tr");
        const tdNombre = document.createElement("td");
        tdNombre.textContent= pizza.nombre;
        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = pizza.precio + "€";
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        table.appendChild(tr);
    })
    divPizza.appendChild(table);
}
mostrarTablaDatosPizza();

//Apartado 4
const crearBotonComprar=()=>{
    const boton = document.createElement("button");
    boton.textContent = "Comprar";
    divIngredientes.appendChild(boton);
    //Apartado 5
    boton.addEventListener("click",() =>{
        comprarPizza(pizzaEncontrada);
    });
}
crearBotonComprar();
//Apartado 5
// Función para almacenar en el LocalStorage al hacer clic en el botón Comprar
const comprarPizza = (pizzaEncontrada) =>{
    let { identificador } = pizza;
    localStorage.setItem(identificador,JSON.stringify(pizzaEncontrada));
    console.log("pizza almacenada en carrito");
}

//Apartado 6 : Utilizar find, funciones flecha, o/y map, declaración correcta de variables, etc.

})





