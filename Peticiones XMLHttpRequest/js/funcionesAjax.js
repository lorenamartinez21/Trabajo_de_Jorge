document.addEventListener("DOMContentLoaded",function(){
    

    let formularioAjaxPDO = document.getElementById("formularioPDO");
    formularioAjaxPDO.addEventListener("submit",function(event){
        event.preventDefault();
        peticionAsincronaPDO();
    });

    let formularioBusqueda = document.getElementById("formularioBusqueda");
    formularioBusqueda.addEventListener("submit",function(event){
        event.preventDefault();
        peticionAsincronaBusqueda();
    });
})

/////////////////////////////////////////////////////////
// Función crear objeto XMLHTTPRequest///////////////////
/////////////////////////////////////////////////////////

function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}


function peticionAsincronaXML(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "servidor/datosXML.php", true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function peticionAsincronaPDO(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosPDO.php", true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                crearTablaJSON(this.responseText);
            }else{
                alert("SE HA PRODUCIDO UN ERROR. VUELVE A INTENTARLO.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function crearTablaJSON(respuesta){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados= JSON.parse(respuesta);
    let tabla="<table border='1'><tr><th>Id</th><th>Nombre</th><th>Descripcion</th><th>Tipo</th><th>Precio</th><th>Imagen</th></tr>";
    for (let i=0; i < resultados.length; i++){
        let objetos = resultados[i];
        let imagenes = objetos.Imagen;
        if (imagenes.length < 1) {
            tabla+="<tr><td>"+objetos.Id+"</td><td>"+
            objetos.Nombre+"</td><td>"+objetos.Descripcion+"</td><td>"+
            objetos.Tipo+"</td><td>"+objetos.Precio+"</td><td></td></tr>";
        }else{
            tabla+="<tr><td>"+objetos.Id+"</td><td>"+
            objetos.Nombre+"</td><td>"+objetos.Descripcion+"</td><td>"+
            objetos.Tipo+"</td><td>"+objetos.Precio+
            "<td><img src='' alt='imagen' border='0'></img></td></tr>";
        }
        
    }

    tabla+="</table>";

    divResultado.innerHTML=tabla;

}

function peticionAsincronaBusqueda(){
    let resultado =  document.getElementById("resultado");
    resultado.innerHTML = "";

    let datos;

   
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let animal = document.getElementById("animal").checked;
    let tipo = document.getElementById("tipo").value;
    let precio = document.getElementById("precio").value;

    document.getElementById("spinner").style ="display:block";
    
    miXHR = new objetoXHR();
    /*miXHR.open("GET", "servidor/datosBusqueda.php?nombre="+nombre+"&descripcion="+descripcion+"&imagen="+imagen
        +"&id="+id+"&area="+area, true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);*/
    
    
    miXHR.open("POST", "servidor/datosBusqueda.php", true);

    
   
    datos = "nombre="+nombre+"&descripcion="+descripcion+"&animal="+animal
        +"&precio="+precio+"&tipo="+tipo;
    
    
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(datos);
}

/////////////////////////////////////////////////////////
// Función llamadaAsincrona2: será llamada al realizar peticiones asíncronas.
// url => URL a dónde realizamos la petición
// tipo => GET o POST
// datos => datos que se enviarán por GET o POST. GET siempre sera null
// funcionCallback => funcion que se ejecutará despues de que termine el proceso asíncrono
/////////////////////////////////////////////////////////

function llamadaAsincrona2(url,tipo,datos,tipoRespuesta,funcionCallback){
    miXHR = new objetoXHR();
    if (miXHR){
        alert("Comenzamos la peticion AJAX");
        document.getElementById("spinner").style ="display:block";


        miXHR.open(tipo, url, true);

        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta,funcionCallback);

        if(tipo === "POST"){
            // En las peticiones POST tenemos que enviar en la cabecera el Content-Type
            //ya que los datos se envían formando parte de la cabecera.
            miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        miXHR.send(datos);
    }
}


function ejecutarFuncionAjax(tipoRespuesta,funcion){
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = "";
            switch(tipoRespuesta){
                case "XML":
                    respuesta = this.responseXML;
                    break;
                default :
                    respuesta = this.responseText;
                    break;
            }
            funcion(respuesta);

            alert("Termino la petición de AJAX");
            document.getElementById("spinner").style ="display:none";
        }
    }
}
