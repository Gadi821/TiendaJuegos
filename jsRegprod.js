let productos = [];

function llenartabla(){
    let nombre = document.getElementById('inputnom').value;
    let codigo = document.getElementById('inputcod').value;
    let plataforma = document.getElementById('inputpt').value;
    let tipo = document.getElementById('inputtipo').value;
    let descri = document.getElementById('inputdes').value;
    if ( nombre.trim()==="" || codigo.trim()===""|| plataforma.trim()===""||tipo.trim()===""||descri.trim()===""){
        alert("faltan datos")
        return;
    }
    productos.push({
        nombre: nombre, codigo: codigo, plataforma: plataforma, tipo: tipo, descri: descri
    });
    document.getElementById('inputnom').value = "";
    document.getElementById('inputcod').value = "";
    document.getElementById('inputpt').value = "";
    document.getElementById('inputtipo').value = "";
    document.getElementById('inputdes').value = "";
    cargartabla();
}
function cargartabla(){
    let tbody = document.getElementById('tablareg').getElementsByTagName('tbody')[0];
    productos.forEach(producto => {
        let fila = tbody.insertRow();
        fila.insertCell(0).textContent=producto.nombre;
        fila.insertCell(1).textContent=producto.codigo;
        fila.insertCell(2).textContent=producto.plataforma;
        fila.insertCell(3).textContent=producto.tipo;
        fila.insertCell(4).textContent=producto.descri;
        fila.insertCell(5).textContent="";
    });
}
const agregar = document.querySelector("#btnag")
agregar.addEventListener("click",llenartabla)