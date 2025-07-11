//Programa para Armar pc (PRESUPUESTO).
//Se elije que procesador, motherboard y memoria ram. A partir de las correcciones de la primera entrega, hice un solo 
//modulo donde segun el parametro ingresado, se elige el componente.
//Se verifica que el usuario no ingrese valores invalidos.
//Uso dos arrays para las marcas, ya que se puede elegir entre 2 posibles.
function elegir(componente,micro = null){
    
    if (componente == "cpu"){
        let preciosIntel = [{nombre: "intel i3", precio: 115000},{nombre: "intel i5", precio: 150000},{nombre: "intel i7", precio: 250000}];
        let preciosAmd = [{nombre: "ryzen 3", precio: 75000},{nombre: "ryzen 5", precio: 110000},{nombre: "ryzen 7", precio: 200000}];

        let marca = prompt("Ingrese la marca del microprocesador, amd o intel").toLowerCase();
        if(marca == "intel"){
            let n = parseInt(prompt("Elija una opcion \n 1- i3 14100F \n 2- i5 12400F \n 3- i7 12700F"));
            while (n < 1 || n > 3){        
                n = parseInt(prompt("Numero invalido, \n 1- i3 14100F \n 2- i5 12400F \n 3- i7 12700F"));    
        }
        let micro = preciosIntel[n-1];
        return micro; 
        }
        else if(marca == "amd"){
            let n = parseInt(prompt("Elija una opcion \n 1- ryzen 3 5400G \n 2- ryzen 5 5600G \n 3- ryzen 7 5700G"));
            while (n < 1 || n > 3){        
                n = parseInt(prompt("Numero invalido, Elija una opcion \n 1- ryzen 3 5400G \n 2- ryzen 5 5600G \n 3- ryzen 7 5700G"));
            }
            let micro = preciosAmd[n-1];
            return micro; 
        }
        else {
            console.log("Ingreso una marca invalida");
        }
    }
    
    else if(componente == "mother"){
        const ashrock = {nombre: "Ashrock B450", precio: 85000};
        const asus = {nombre: "Asus 520M", precio: 120000};
        const gigabyte = {nombre: "Gigabyte H610", precio: 146000};
        const msi = {nombre: "Msi B760", precio: 230000};

        if (micro == "intel i3" || micro == "intel i5" || micro == "intel i7"){
            let n = parseInt(prompt("Las motherboard en stock compatibles con tu procesador son: \n 1- Ashrock B450 \n 2- Asus 520M. \n Seleccione 1 o 2"));
            while (n < 1 || n > 2){
                n = parseInt(prompt("Numero invalido. Las motherboard en stock compatibles con tu procesador son: \n 1- Ashrock B450 \n 2- Asus 520M. \n Seleccione 1 o 2"));
            }
            if (n = 1){
                return ashrock;
            }
            else if (n = 2){
                return asus;
            }
        }
        else if(micro == "ryzen 3" || micro == "ryzen 5" || micro == "ryzen 7"){
            let n = parseInt(prompt("Las motherboard en stock compatibles con tu procesador son: \n 1- Gibabyte H610 \n 2- Msi B760. \n Seleccione 1 o 2"));
            while (n < 1 || n > 2){
                n = parseInt(prompt("Numero invalido. Las motherboard en stock compatibles con tu procesador son: \n 1- Gibabyte H610 \n 2- Msi B760. \n Seleccione 1 o 2"));
            }
            if (n = 1){
                return gigabyte;
            }
            else if (n = 2){
                return msi;
            }
        }

    }
    
    else if(componente == "ram"){
        const ocho = {nombre: "Memoria 8 GB", precio: 25000, cant: null};
        const dieciseis = {nombre: "Memoria 16 GB", precio: 50000, cant: null};

        let gigas = parseInt(prompt("Selecciona una opcion: \n 1- Memoria ram de 8gb o indica \n 2- Memoria ram de 16gb"));
        while (gigas < 1 || gigas > 2){
            gigas = parseInt(prompt("Numero incorrecto. Selecciona una opcion: \n 1- Memoria ram de 8gb o indica \n 2- Memoria ram de 16gb"));
        }
        let cant = parseInt(prompt("Ahora indica la cantidad de memorias que vas a querer"));    

        if (gigas == 1){
            ocho.cant = cant;
            return ocho;
        }
        else if (gigas == 2){
            dieciseis.cant = cant;
            return dieciseis;
        }
    }
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
        alert(`Elegiste ,\n ${micro.nombre},\n ${placaBase.nombre}, \n ${memoRam.nombre}`);
        let total = micro.precio + placaBase.precio + memoRam.precio * memoRam.cant;
        alert(total);
        confirmacion = confirm("¿Querés armar otra PC?");
}
}

//corro el programa
app();

