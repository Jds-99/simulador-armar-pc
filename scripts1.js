//Programa para Armar pc (PRESUPUESTO y COMPRA).

//Estos son todos los productos que vende la empresa, los hardcodeo.
const productos = [
    {id: 1, nombre: "intel i3", precio: 115000},
    {id: 2, nombre: "intel i5", precio: 150000},
    {id: 3, nombre: "intel i7", precio: 250000},    
    {id: 4, nombre: "ryzen 3", precio: 75000},
    {id: 5, nombre: "ryzen 5", precio: 110000},
    {id: 6, nombre: "ryzen 7", precio: 200000},
    {id: 7, nombre: "Ashrock B450", precio: 85000},
    {id: 8, nombre: "Asus 520M", precio: 120000},
    {id: 9, nombre: "Gigabyte H610", precio: 146000},
    {id: 10,nombre: "Msi B760", precio: 230000},
    {id: 11,nombre: "Memoria 8 GB", precio: 25000}, 
    {id: 12,nombre: "Memoria 16 GB",precio: 50000}
]
//Hardcodeo tambien el stock, pero este lo guardo en localstorage.
const stock = [
    {id: 1, nombre: "Intel i3", precio: 115000},
    {id: 12,nombre: "Memoria 16 GB",precio: 50000},
    {id: 3, nombre: "intel i7", precio: 250000},    
    {id: 4, nombre: "ryzen 3", precio: 75000},
    {id: 2, nombre: "intel i5", precio: 150000},
    {id: 1, nombre: "Intel i3", precio: 115000},
    {id: 12,nombre: "Memoria 16 GB",precio: 50000},
    {id: 9, nombre: "Gigabyte H610", precio: 146000},
    {id: 2, nombre: "intel i5", precio: 150000},
    {id: 5, nombre: "ryzen 5", precio: 110000},
    {id: 11,nombre: "Memoria 8 GB", precio: 25000},
    {id: 6, nombre: "ryzen 7", precio: 200000},
    {id: 7, nombre: "Ashrock B450", precio: 85000},
    {id: 8, nombre: "Asus 520M", precio: 120000},
    {id: 4, nombre: "ryzen 3", precio: 75000},
    {id: 10,nombre: "Msi B760", precio: 230000},
    {id: 12,nombre: "Memoria 16 GB",precio: 50000},
    {id: 4, nombre: "ryzen 3", precio: 75000},
    {id: 1, nombre: "Intel i3", precio: 115000},
    {id: 11,nombre: "Memoria 8 GB", precio: 25000},
    {id: 5, nombre: "ryzen 5", precio: 110000},
    {id: 11,nombre: "Memoria 8 GB", precio: 25000},
    {id: 3, nombre: "intel i7", precio: 250000},
    {id: 6, nombre: "ryzen 7", precio: 200000},
    {id: 12,nombre: "Memoria 16 GB",precio: 50000},
]

//Esto es para que cuando recargue el script no se vuelva a subir el stock original, y se pueda actualizar correctamente
if (!localStorage.getItem("stock")) {
  localStorage.setItem("stock", JSON.stringify(stock));
}

//Creo el carrito donde irán los productos que se compren, y se guarda en el localstorage. El metodo agregar compra
//añade el objeto pasado por parámetro a la lista.
const Carrito = {
    lista: [],
    agregarCompra(producto){
        this.lista.push(producto);
        const carritoGuardar = JSON.stringify(Carrito.lista);
        localStorage.setItem("ítem", carritoGuardar);
    }

}
//Se elije que procesador, motherboard y memoria ram. A partir de las correcciones de la primera entrega, hice un solo 
//modulo donde segun el parametro ingresado, se elige el componente.
//Se verifica que el usuario no ingrese valores invalidos.
//Retorna un elemento de mi array de productos, para luego ser agregado al carrito, o mostrado.
function elegir(componente,micro = null){
    if (componente == "cpu"){

        let marca = prompt("Ingrese la marca del microprocesador, amd o intel").toLowerCase();
        if(marca == "intel"){
            let n = parseInt(prompt("Elija una opcion \n 1- i3 14100F \n 2- i5 12400F \n 3- i7 12700F"));
            while (n < 1 || n > 3){        
                n = parseInt(prompt("Numero invalido, \n 1- i3 14100F \n 2- i5 12400F \n 3- i7 12700F"));    
            }
            let micro = productos[n-1];
            return micro;
        }
        else if(marca == "amd"){
            let n = parseInt(prompt("Elija una opcion \n 4- ryzen 3 5400G \n 5- ryzen 5 5600G \n 6- ryzen 7 5700G"));
            while (n < 4 || n > 6){        
                n = parseInt(prompt("Numero invalido, Elija una opcion \n 4- ryzen 3 5400G \n 5- ryzen 5 5600G \n 6- ryzen 7 5700G"));
            }
            let micro = productos[n-1];
            return micro;        
        }
        else {
            console.log("Ingreso una marca invalida");
        }
    }
    
    else if(componente == "mother"){
        
        if (micro == "intel i3" || micro == "intel i5" || micro == "intel i7"){
            let n = parseInt(prompt("Las motherboard en stock compatibles con tu procesador son: \n 7- Ashrock B450 \n 8- Asus 520M. \n Seleccione 7 u 8"));
            while (n < 7 || n > 8){
                n = parseInt(prompt("Numero invalido. Las motherboard en stock compatibles con tu procesador son: \n 7- Ashrock B450 \n 8- Asus 520M. \n Seleccione 7 u 8"));
            }
            let placaMa = productos[n-1];
            return placaMa;
        }
        
        else if(micro == "ryzen 3" || micro == "ryzen 5" || micro == "ryzen 7"){
            let n = parseInt(prompt("Las motherboard en compatibles con tu procesador son: \n 9- Gibabyte H610 \n 10- Msi B760. \n Seleccione 9 o 10"));
            while (n < 9 || n > 10){
                n = parseInt(prompt("Numero invalido. Las motherboard compatibles con tu procesador son: \n 9- Gibabyte H610 \n 10- Msi B760. \n Seleccione 9 o 10"));
            }
            let placaMa = productos[n-1];
            return placaMa;
        }

    }
    
    else if(componente == "ram"){

        let gigas = parseInt(prompt("Selecciona una opcion: \n 11- Memoria ram de 8gb o indica \n 12- Memoria ram de 16gb"));
        while (gigas < 11 || gigas > 12){
            gigas = parseInt(prompt("Numero incorrecto. Selecciona una opcion: \n 11- Memoria ram de 8gb o indica \n 12- Memoria ram de 16gb"));
        }
        //let cant = parseInt(prompt("Ahora indica la cantidad de memorias que vas a querer"));    
        let memoRam = productos[gigas-1];
        return memoRam;
    }
}

//modulo para confirmar que hay stock o no:
function hayStock(cpu,mother,ram,cant){
    //Recupero el stock del localStorage.
    const arrayStock = localStorage.getItem("stock");
    const stockUsable = JSON.parse(arrayStock);
    //variable booleana que confirma si se puede realizar la compra.
    let sePuede = false;
    //Verifico si el array tiene los id de los productos.
    const hayCpu = stockUsable.some(prod => prod.id == cpu.id);
    const hayMother = stockUsable.some(prod => prod.id == mother.id);
    const cantRam = stockUsable.filter(prod => prod.id == ram.id).length;
    //Se puede solo sera verdadero si hayCpu,hayMother y hayRam son verdaderas.
    if (hayCpu) {
        if(hayMother){
            if(cantRam >= cant){
                sePuede = true;
                }
                else{
                    console.log("No tenemos la cantidad de ram requeridas en stock.");
                }
        }                
        else{
            console.log("No tenemos esa motherBoard en stock.")
        }
    }
    else{
        console.log("No tenemos ese procesador en stock.");
    } 
    return sePuede
}
//Funcion para eliminar del stock el producto que se quiere comprar.
function comprar(id){
    //Recupero el stock 
    const stock = JSON.parse(localStorage.getItem("stock")) || []
    //Uso un boolean para saber si lo encontre
    let encontre = false;
    //Creo un nuevo stock vacio donde pongo todos los productos
    const nuevoStock = []
    //Voy guardando los productos, y si encuentro al del id que quiero borrar, no lo agrego
    for(const prod of stock){
        if(!encontre && prod.id === id){
            encontre = true;
        }
        else{
            nuevoStock.push(prod);
        }
    }
    //Guardo el nuevo stock
    localStorage.setItem("stock", JSON.stringify(nuevoStock));

}
//Es un bucle en el que se pide una confirmacion para seguir haciendo presupuesto.
//Utilizo los objetos para infomar los campos de tipo string, y operar con los campos de tipo numero. 
function app(){
    alert("¡Arma tu PC en Hardware zone!");
    alert("Presupuestamos microprocesador, motherboard y memoria ram");
    let confirmacion = confirm("¿Empezamos?");
    while(confirmacion){
        let micro = elegir("cpu"); 
        let placaBase = elegir("mother",micro.nombre);
        let memoRam = elegir("ram");
        let cantRam = prompt("Cuantas memorias ram queres?");

        alert(`Elegiste ,\n ${micro.nombre},\n ${placaBase.nombre}, \n ${memoRam.nombre}`);
        let total = micro.precio + placaBase.precio + memoRam.precio * memoRam.cant;
        alert(total);
        confComprar = confirm("¿Queres agregar los productos al carrito?")
        if (confComprar){
            if(hayStock(micro,placaBase,memoRam,cantRam)){
                //Agregar al carrito. y eliminar del stock.
            }
        }
        confirmacion = confirm("¿Querés armar otra PC?");
}
}

//corro el programa
app();
