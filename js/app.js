/**
 * Created by Juan on 23/10/2015.
 */
(function() {

    var imagenCancel = "./img/cancel.png",
        imagenExito  = "./img/check.png",
        email        = document.querySelector("input[type='email']"),
        conf 	       = document.querySelector("input[type='text']"),
        area         = document.querySelector("textarea");

    // Una sola funcion para eliminar un array de elementos. La reutilizaremos.
    function borrarElementos(elements) {
        // validamos que este definido
        if (elements && elements.length) {
            // creamos una lista de los elementos a borrar.
            // no se puede hacer directamente por que al borrar cambia el valor de lenght
            // aunque se podria hacer en sentido inverso. (de mayor a menor)
            var elementosABorrar = [];
            for (var i = 0; i < elements.length; i++) {
                elementosABorrar.push(elements[i]);
            }
            for (i = 0; i < elementosABorrar.length; i++) {
                console.log(elementosABorrar[i]);
                elementosABorrar[i].parentNode.removeChild(elementosABorrar[i]);
            }
        }
    }

    // esta funcion recibe argumentos dinamicos y borra todos los elementos
    // que definan las clases pasadas.
    function borrarElementosPorClase() {
        // aqui leemos dinamicamente los argumentos y llamamos a borrar elemento
        for (var i = 0; i < arguments.length; i++) {
            console.log("eliminado x clase:", arguments[i]);
            borrarElementos(document.getElementsByClassName(arguments[i]));
        }
    }

    // esta funcion agrega un parrafo con un mensaje justo antes del elemento dado
    // recibe el mensaje y la clase a establecer.
    function agregarParrafoAntes(elemento, clase, mensaje) {
        var parrafo = document.createElement("p");
        parrafo.classList.add(clase);
        parrafo.innerHTML = mensaje;
        elemento.parentNode.insertBefore(parrafo, elemento);
        return parrafo;
    }

    // esta funcion agrega un checkmark justo despues del elemento dado
    function agregarCheckmarkDespues(elemento, clase, imagenSrc) {
        var imagen = document.createElement("img");
        imagen.classList.add(clase);
        imagen.style.width = "28px";
        imagen.style.height = "28px";
        imagen.src = imagenSrc;
        // aqui esta el truco!
        elemento.parentNode.insertBefore(imagen, elemento.nextSibling);
        return imagen;
    }

    // Configuramos el AREA
    area.addEventListener("blur", function() {
        // lo hacemos una sola vez para no repetir codigo.
        borrarElementosPorClase("error-area", "exito-area");
        // validacion, reglas.
        if (this.value == "") {
            area.setAttribute("style", "background: pink; border-color: red");
            var parrafo = agregarParrafoAntes(area, "error-area", "Error en textarea");
            parrafo.setAttribute("style", "color: red");
            agregarCheckmarkDespues(area, "error-area", imagenCancel);
        } else {
            area.setAttribute("style", "background: #C8FDD4; border-color: #52FD8B");
            agregarCheckmarkDespues(area, "exito-area", imagenExito);
        }
    });

    // Configuramos el input[type=text]
    conf.addEventListener("blur", function() {
        // lo hacemos una sola vez para no repetir codigo.
        borrarElementosPorClase("error-text", "exito-text");
        // validacion, reglas.
        if (this.value == "") {
            conf.setAttribute("style", "background: pink; border-color: red");
            var parrafo = agregarParrafoAntes(conf, "error-text", "Error en el nombre");
            parrafo.setAttribute("style", "color: red");
            agregarCheckmarkDespues(conf, "error-text", imagenCancel);
        } else {
            conf.setAttribute("style", "background: #C8FDD4; border-color: #52FD8B");
            var parrafo = agregarParrafoAntes(conf, "exito-text", "Bonito Nombre");
            parrafo.setAttribute("style", "color: green");
            agregarCheckmarkDespues(conf, "exito-text", imagenExito);
        }
    });

    // Configuramos el input[type=email]
    email.addEventListener("blur", function() {
        // lo hacemos una sola vez para no repetir codigo.
        borrarElementosPorClase("error-email", "exito-email");
        if (this.value == "" || this.value.indexOf("@") == -1 || this.value.indexOf(".") == -1) {
            email.setAttribute("style", "background: pink; border-color: red");
            var parrafo = agregarParrafoAntes(email, "error-email", "Error en el email");
            parrafo.setAttribute("style", "color: red");
            agregarCheckmarkDespues(email, "error-email", imagenCancel);
        } else {
            email.setAttribute("style", "background: #C8FDD4; border-color: #52FD8B");
            agregarCheckmarkDespues(email, "exito-email", imagenExito);
        }
    });
})();
