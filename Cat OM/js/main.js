$(document).ready(function (){
    /*
    Modificando las siguietes variables podras cambiar el contenido
    */

    //Producto 1
    $('#nombre_producto1').html("Fuente con Buda");
    $('#desc_producto1').html("Fuente de agua con la imagen de buda, con iluminación");
    $('#precio_producto1').html("<strong>$100</strong>");

    //Producto 2
    $('#nombre_producto2').html("Fuente de agua redonda");
    $('#desc_producto2').html("Fuente de agua redonda, producto unico de oferta");
    $('#precio_producto2').html("<strong>$230</strong>");

    //Producto 3
    $('#nombre_producto3').html("Lampara Sal Buho");
    $('#desc_producto3').html("Esta es la descriptción de la lampara correspondiente producto 3");
    $('#precio_producto3').html("<strong>$230</strong>");

    //Producto 4
    $('#nombre_producto4').html("Lampara Sal Panal");
    $('#desc_producto4').html("Esta es la descriptción de la lampara correspondiente Lampara Sal Panal");
    $('#precio_producto4').html("<strong>$430</strong>");

    //Producto 5
    $('#nombre_producto5').html("Oráculo de espiritus");
    $('#desc_producto5').html("Oráculos de espiritus animales, producto destacado de la tienda");
    $('#precio_producto5').html("<strong>$430</strong>");

    //Producto 6
    $('#nombre_producto6').html("Oráculo Reiki");
    $('#desc_producto6').html("Esta es la descriptción Oráculo Reiki, producto de oferta en nuestra tienda.");
    $('#precio_producto6').html("<strong>$590</strong>");

    $('ul li').on('click', function() {
        $('li').removeClass('active');
        $(this).addClass('active');
    });
});