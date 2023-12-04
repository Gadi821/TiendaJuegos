//declarar el contador globlal
var cont = 0;
var total=0;
var seleccionadas=[];
function seleccionar(id_fila){
    console.log(id_fila)
    var index = seleccionadas.indexOf(id_fila);
    if($("#"+id_fila).hasClass("seleccionada")){ 
        $("#"+id_fila).removeClass("seleccionada");
        if (index !== -1){
            seleccionadas.splice(index,1)
        }
    }
    else{
        $("#"+id_fila).addClass("seleccionada");
        if (index === -1){
            seleccionadas.push(id_fila);
        }
    }
}
function eliminar(id_fila){
    for (let i = 0; i < id_fila.length; i++) {
        $("#"+id_fila[i]).remove();
    }
    reordenar();
}
function agregar(nombre,precio){
    cont++;
    //modificar el numero compras
    $("#span1").text(cont);
    //llenar tabla
    var fila='<tr id="fila'+cont+'" class="selected" onclick="seleccionar(this.id)"><td>'+cont+'</td><td>'+nombre+'</td><td>'+precio+'</td></tr>'
    $("#tabla tbody").append(fila);
    total+=parseInt(precio);
}
function reordenar(){
    var filas = $("#tabla tbody tr");
    filas.each(function(index){
        $(this).find("td:first").text(index+1);
    })
}

$("#btnprod1").click(function () { 

    var nombre = $("#nombre1").text();
    var precio = $("#precio1").text();
    agregar(nombre,precio)
});
$("#btnprod2").click(function () { 

    var nombre = $("#nombre2").text();
    var precio = $("#precio2").text();
    agregar(nombre,precio)
});
$("#btnprod3").click(function () { 

    var nombre = $("#nombre3").text();
    var precio = $("#precio3").text();
    agregar(nombre,precio)
});
$("#btnprod4").click(function () { 

    var nombre = $("#nombre4").text();
    var precio = $("#precio4").text();
    agregar(nombre,precio)
});
$("#btnprod5").click(function () { 

    var nombre = $("#nombre5").text();
    var precio = $("#precio5").text();
    agregar(nombre,precio)
});
$("#btnprod6").click(function () { 

    var nombre = $("#nombre6").text();
    var precio = $("#precio6").text();
    agregar(nombre,precio)
});
$("#btnprod7").click(function () { 

    var nombre = $("#nombre7").text();
    var precio = $("#precio7").text();
    agregar(nombre,precio)
});
$("#btnprod8").click(function () { 

    var nombre = $("#nombre8").text();
    var precio = $("#precio8").text();
    agregar(nombre,precio)
});
$("#btnElim").click(function () { 
    eliminar(seleccionadas);
});
$("#btnTotal").click(function () { 
    $("#preciototal").text(total);
});
$(".card").mouseenter(function () { 
    $(this).addClass("card2");
});
$(".card").mouseleave(function () { 
    $(this).removeClass("card2");
});

$("#contlogo").mouseenter(function () { 
    $(this).addClass("mover");
});
$("#contlogo").mouseleave(function () { 
    $(this).removeClass("mover");
});