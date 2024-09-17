let billeteras=[];
function guardarDatos(usuario, billetera, transacciones){
    console.log("Datos recibidos:", usuario, billetera, transacciones);
    let nuevaBilletera = {
        nombreUsuario: usuario,
        nombreBilletera: billetera,
        numeroTransacciones: transacciones
    };
    billeteras.push(nuevaBilletera);
    console.log(billeteras);
    mostrarBilleteras();
}
function mostrarBilleteras() {
    const billeteraLista = document.getElementById('billeteraLista');
    billeteraLista.innerHTML = ''; // Limpiar la lista antes de mostrar las billeteras
    console.log(billeteraLista);
    console.log(billeteras);
    billeteras.forEach(billetera => {
        let listItem = document.createElement('li');
        listItem.textContent = `Usuario: ${billetera.nombreUsuario}, Billetera: ${billetera.nombreBilletera}, Transacciones: ${billetera.numeroTransacciones}`;
        billeteraLista.appendChild(listItem);
    });
}
document.getElementById("miBoton").onclick =() =>{ //quitamos el onclick del html

    const nombreUsuario=document.getElementById('nombre').value;
    const nombreBilletera=document.getElementById('billetera').value;
    const numeroTransacciones=parseInt(document.getElementById('numeroTransacciones').value);
    guardarDatos(nombreUsuario, nombreBilletera, numeroTransacciones);
    
}