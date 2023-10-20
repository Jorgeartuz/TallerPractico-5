function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo);
    return nodo;
}
function crearNodoA(texto, href) {
    var nodo = document.createElement("a");
    nodo.textContent = texto;
    nodo.href = href;
    return nodo;
}

function crearNodoTexto(tipoNodo, texto) {
    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;
}

function crearNodoImagen(src, alt) {
    var imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = alt;
    return imagen;
}

function crearNodoBoton(texto) {
    var boton = crearNodo("button");
    boton.textContent = texto;
    return boton;
}

function adicionarNodoContenedor(contenedor, nodo) {
    contenedor.appendChild(nodo);
}

function adicionarNodoBody(nodo) {
    document.body.appendChild(nodo);
}

function crearTabla() {

    var tabla = crearNodo("table");
    var fila1 = crearNodo("tr");

    // Celda 1
    var celda1 = crearNodo("td");
    celda1.style.backgroundColor = "#e5e5e5";
    var tabla1 = crearNodo("table");

    var fila1_1 = crearNodo("tr");
    var fila1_2 = crearNodo("tr");

    // Imagen 1
    var celda1_1 = crearNodo("td");
    celda1_1.colSpan = 3;
    var imagen1 = crearNodoImagen("../recursos/imagenes/Instagram.png", "");
    imagen1.width = 500;
    imagen1.height = 300;
    celda1_1.appendChild(imagen1);
    fila1_1.appendChild(celda1_1);

    // Texto y botones 1
    var celda1_2_1 = crearNodo("td");
    celda1_2_1.textContent = "Instagram Login";
    var celda1_2_2 = crearNodo("td");
    var boton1_2_2_1 = crearNodoBoton("Source Code");
    var celda1_2_3 = crearNodo("td");
    var boton1_2_3_1 = crearNodoBoton("Preview Demo");
    celda1_2_2.appendChild(boton1_2_2_1);
    celda1_2_3.appendChild(boton1_2_3_1);
    fila1_2.appendChild(celda1_2_1);
    fila1_2.appendChild(celda1_2_2);
    fila1_2.appendChild(celda1_2_3);

    tabla1.appendChild(fila1_1);
    tabla1.appendChild(fila1_2);

    celda1.appendChild(tabla1);
    fila1.appendChild(celda1);

    tabla.appendChild(fila1);

    // Celda 2
    var celda2 = crearNodo("td");
    celda2.style.backgroundColor = "#e5e5e5";
    var tabla2 = crearNodo("table");

    var fila2_1 = crearNodo("tr");
    var fila2_2 = crearNodo("tr");

    // Imagen 2
    var celda2_1 = crearNodo("td");
    celda2_1.colSpan = 3;
    var imagen2 = crearNodoImagen("../Recursos/Imagenes/Twitter.png", "");
    imagen2.width = 500;
    imagen2.height = 300;
    celda2_1.appendChild(imagen2);
    fila2_1.appendChild(celda2_1);

    // Texto y botones 2
    var celda2_2_1 = crearNodo("td");
    celda2_2_1.textContent = "Twitter Login";
    var celda2_2_2 = crearNodo("td");
    var boton2_2_2_1 = crearNodoBoton("Source Code");
    var celda2_2_3 = crearNodo("td");
    var boton2_2_3_1 = crearNodoBoton("Preview Demo");
    celda2_2_2.appendChild(boton2_2_2_1);
    celda2_2_3.appendChild(boton2_2_3_1);
    fila2_2.appendChild(celda2_2_1);
    fila2_2.appendChild(celda2_2_2);
    fila2_2.appendChild(celda2_2_3);

    tabla2.appendChild(fila2_1);
    tabla2.appendChild(fila2_2);

    celda2.appendChild(tabla2);

    // Celda 3
    var celda3 = crearNodo("td");
    celda3.style.backgroundColor = "#e5e5e5";
    var tabla3 = crearNodo("table");

    var fila3_1 = crearNodo("tr");
    var fila3_2 = crearNodo("tr");

    // Imagen 3
    var celda3_1 = crearNodo("td");
    celda3_1.colSpan = 3;
    var imagen3 = crearNodoImagen("../recursos/imagenes/Youtube.png", "");
    imagen3.width = 500;
    imagen3.height = 300;
    celda3_1.appendChild(imagen3);
    fila3_1.appendChild(celda3_1);

    // Texto y botones 3
    var celda3_2_1 = crearNodo("td");
    celda3_2_1.textContent = "Youtube Login";
    var celda3_2_2 = crearNodo("td");
    var boton3_2_2_1 = crearNodoBoton("Source Code");
    var celda3_2_3 = crearNodo("td");
    var boton3_2_3_1 = crearNodoBoton("Preview Demo");
    celda3_2_2.appendChild(boton3_2_2_1);
    celda3_2_3.appendChild(boton3_2_3_1);
    fila3_2.appendChild(celda3_2_1);
    fila3_2.appendChild(celda3_2_2);
    fila3_2.appendChild(celda3_2_3);

    tabla3.appendChild(fila3_1);
    tabla3.appendChild(fila3_2);

    celda3.appendChild(tabla3);

    // Celda 4
    var celda4 = crearNodo("td");
    celda4.style.backgroundColor = "#e5e5e5";
    var tabla4 = crearNodo("table");

    var fila4_1 = crearNodo("tr");
    var fila4_2 = crearNodo("tr");

    // Imagen 4
    var celda4_1 = crearNodo("td");
    celda4_1.colSpan = 3;
    var imagen4 = crearNodoImagen("../recursos/imagenes/Facebook.png", "");
    imagen4.width = 500;
    imagen4.height = 300;
    celda4_1.appendChild(imagen4);
    fila4_1.appendChild(celda4_1);

    // Texto y botones 4
    var celda4_2_1 = crearNodo("td");
    celda4_2_1.textContent = "Facebook Login";
    var celda4_2_2 = crearNodo("td");
    var boton4_2_2_1 = crearNodoBoton("Source Code");
    var celda4_2_3 = crearNodo("td");
    var boton4_2_3_1 = crearNodoBoton("Preview Demo");
    celda4_2_2.appendChild(boton4_2_2_1);
    celda4_2_3.appendChild(boton4_2_3_1);
    fila4_2.appendChild(celda4_2_1);
    fila4_2.appendChild(celda4_2_2);
    fila4_2.appendChild(celda4_2_3);

    tabla4.appendChild(fila4_1);
    tabla4.appendChild(fila4_2);

    celda4.appendChild(tabla4);

    // Celda 5
    var celda5 = crearNodo("td");
    celda5.style.backgroundColor = "#e5e5e5";
    var tabla5 = crearNodo("table");

    var fila5_1 = crearNodo("tr");
    var fila5_2 = crearNodo("tr");

    // Imagen 5
    var celda5_1 = crearNodo("td");
    celda5_1.colSpan = 3;
    var imagen5 = crearNodoImagen("../recursos/imagenes/Pinterest.PNG", "");
    imagen5.width = 500;
    imagen5.height = 300;
    celda5_1.appendChild(imagen5);
    fila5_1.appendChild(celda5_1);

    // Texto y botones 5
    var celda5_2_1 = crearNodo("td");
    celda5_2_1.textContent = "Pinterest Login";
    var celda5_2_2 = crearNodo("td");
    var boton5_2_2_1 = crearNodoBoton("Source Code");
    var celda5_2_3 = crearNodo("td");
    var boton5_2_3_1 = crearNodoBoton("Preview Demo");
    celda5_2_2.appendChild(boton5_2_2_1);
    celda5_2_3.appendChild(boton5_2_3_1);
    fila5_2.appendChild(celda5_2_1);
    fila5_2.appendChild(celda5_2_2);
    fila5_2.appendChild(celda5_2_3);

    tabla5.appendChild(fila5_1);
    tabla5.appendChild(fila5_2);

    celda5.appendChild(tabla5);

    // Celda 6
    var celda6 = crearNodo("td");
    celda6.style.backgroundColor = "#e5e5e5";
    var tabla6 = crearNodo("table");

    var fila6_1 = crearNodo("tr");
    var fila6_2 = crearNodo("tr");

    // Imagen 6
    var celda6_1 = crearNodo("td");
    celda6_1.colSpan = 3;
    var imagen6 = crearNodoImagen("../recursos/imagenes/Whatsapp.jpg", "");
    imagen6.width = 500;
    imagen6.height = 300;
    celda6_1.appendChild(imagen6);
    fila6_1.appendChild(celda6_1);

    // Texto y botones 6
    var celda6_2_1 = crearNodo("td");
    celda6_2_1.textContent = "Whatsapp Login";
    var celda6_2_2 = crearNodo("td");
    var boton6_2_2_1 = crearNodoBoton("Source Code");
    var celda6_2_3 = crearNodo("td");
    var boton6_2_3_1 = crearNodoBoton("Preview Demo");
    celda6_2_2.appendChild(boton6_2_2_1);
    celda6_2_3.appendChild(boton6_2_3_1);
    fila6_2.appendChild(celda6_2_1);
    fila6_2.appendChild(celda6_2_2);
    fila6_2.appendChild(celda6_2_3);

    tabla6.appendChild(fila6_1);
    tabla6.appendChild(fila6_2);

    celda6.appendChild(tabla6);


    fila1.appendChild(celda1);
    fila1.appendChild(celda2);
    fila1.appendChild(celda3);
    tabla.appendChild(fila1);

    var fila2 = crearNodo("tr");


    fila2.appendChild(celda4);
    fila2.appendChild(celda5);
    fila2.appendChild(celda6);

    tabla.appendChild(fila2);

    return tabla;
}

function crearFilaTabla(texto, imagenSrc) {
    var fila = crearNodo("tr");

    var celda1 = crearNodo("td");
    var imagen = crearNodoImagen(imagenSrc, "");
    imagen.width = 200;
    imagen.height = 150;
    celda1.appendChild(imagen);

    var celda2 = crearNodo("td");
    celda2.textContent = texto;

    var celda3 = crearNodo("td");
    var botonSourceCode = crearNodoA("Source Code", "#");
    var botonPreviewDemo = crearNodoA("Preview Demo", "#");
    celda3.appendChild(botonSourceCode);
    celda3.appendChild(botonPreviewDemo);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);

    return fila;
}

