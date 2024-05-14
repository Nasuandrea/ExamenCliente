//Declarar un array de objetos de clientes
var datosClientes = [{
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson"
},
    {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay", "last_name": "Ferguson"
    }
    , {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke"
    },
    {
        id: 4,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields"
    }];
//Declara un array de objetos de pizzas
var datosPizza = [
    {
        nombre: "Pizza margarita",
        precio: 20,
        identificador: 1,
        ingredientes: [
            "Champiñones",
            "Jamón Cocido"
        ]
    },
    {
        nombre: "Pizza barbacoa",
        precio: 25,
        identificador: 2,
        ingredientes: [
            "Carne",
            "Salsa barbacoa",
            "Extra de queso"
        ]
    },
    {
        nombre: "Pizza atún",
        precio: 22,
        identificador: 3,
        ingredientes: [
            "Atún",
            "Aceitunas negras",
            "Anchoa"
        ]
    }
];

let idIntroducido = prompt("Introduce el id de cliente");

//Apartado 1
const mostrarDatosCliente = (idIntroducido) =>{
    let clienteEncontrado = datosClientes.find(cliente=>cliente.id==idIntroducido);
    if(clienteEncontrado){
      let nombre =   clienteEncontrado.first_name +" "+clienteEncontrado.last_name;
      let divCliente = document.getElementById("cliente");
      let linea= document.createElement("h1");
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
    let pizzaEncontrada =  datosPizza.find(pizza=>pizza.identificador==idIntroducido);
    if(pizzaEncontrada){
        let nombre =   pizzaEncontrada.nombre;
        let ingredientes = pizzaEncontrada.ingredientes;
        let divIngredientes = document.getElementById("ingredientes");
        let linea= document.createElement("h1");
        linea.innerHTML= "Los ingredientes de la "+nombre+" son:";
        divIngredientes.appendChild(linea);
        for (let i = 0; i < pizzaEncontrada.ingredientes.length; i++) {
            let parrafo = document.createElement("h2");
            parrafo.innerHTML=ingredientes[i];
            divIngredientes.appendChild(parrafo);
        }
    }
    else{
        alert("Cliente no encontrado");
    }
}
//Apartado 7: Al cargar los ingredientes de la pizza que el resultado se muestre transcurrido unos segundos.
setTimeout(()=>{
    mostrarIngredientesPizza(idIntroducido);
},2000);


//Apartado 2
const mostrarTablaDatosPizza = ()=>{
    let divPizza = document.getElementById("pizzas");
    let table = document.createElement("table");
    let encabezado = document.createElement("tr");
    let thNombre = document.createElement("th");
    thNombre.textContent="NOMBRE";
    encabezado.appendChild(thNombre);
    let thPrecio = document.createElement("th");
    thPrecio.textContent="PRECIO";
    encabezado.appendChild(thPrecio);
    table.appendChild(encabezado);
    // table.appendChild(th);
    datosPizza.forEach(pizza =>{
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent= pizza.nombre;
        let tdPrecio = document.createElement("td");
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
    let boton = document.createElement("button");
    let divIngredientes = document.getElementById("ingredientes");
    boton.textContent = "Comprar";
    divIngredientes.appendChild(boton);
    //Apartado 5
    let pizzaEncontrada =  datosPizza.find(pizza=>pizza.identificador==idIntroducido);
    boton.addEventListener("click",() =>{
        comprarPizza(pizzaEncontrada);
    });
}
crearBotonComprar();
//Apartado 5
// Función para almacenar en el LocalStorage al hacer clic en el botón Comprar
const comprarPizza = (pizzaEncontrada) =>{
    localStorage.setItem("pizzaEncontrada",JSON.stringify(pizzaEncontrada));
    console.log("pizza almacenada en carrito");
}

//Apartado 6 : Utilizar find, funciones flecha, o/y map, declaración correcta de variables, etc.







