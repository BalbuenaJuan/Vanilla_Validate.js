/**
 * Created by Juan on 23/10/2015.
 */

var email = document.querySelector("input[type='email']");
var conf = document.querySelector("input[type='text']");
var area = document.querySelector("textarea");


function removeElement(element){
    for (var i = 0; i < element.length; i++){
        element[i].parentNode.removeChild(element[i]);
    }
}

function borrarTextArea() {
    var parArea  = document.getElementsByClassName("remove3");
    if (parArea.length > 0) {
        removeElement(parArea)
    }
}

area.addEventListener("blur", function(){
   if(this.value == ""){
       borrarTextArea();
       console.log("Llega?");
       area.setAttribute("style", "background: pink; border-color: red");
       var parrafo3 = document.createElement("p");
       parrafo3.classList.add("remove3");
       parrafo3.innerHTML = "!Bad Message";
       var areaConf = area.parentNode;
       areaConf.insertBefore(parrafo3, area );
       parrafo3.setAttribute("style", "color: red")
   }
   else{
       borrarTextArea();
       area.setAttribute ("style", "background: #C8FDD4; border-color: #52FD8B");
   }
});

function borrarTexto() {
    var parArea  = document.getElementsByClassName("remove2");
    var parArea2 = document.getElementsByClassName("remove");

    if (parArea.length > 0) {
        removeElement(parArea)
    }
    if (parArea2.length > 0){
        removeElement(parArea2)
    }
}

conf.addEventListener("blur", function(){
    if(this.value == ""){
        borrarTexto();
        conf.setAttribute("style", "background: pink; border-color: red");
        var parrafo1 = document.createElement("p");
        parrafo1.classList.add("remove");
        parrafo1.innerHTML = "Bad Name";
        var parentConf = conf.parentNode;
        parentConf.insertBefore(parrafo1, conf );
        parrafo1.setAttribute("style", "color: red");
    }
    else{
        borrarTexto();
        conf.setAttribute("style",  "background: #C8FDD4; border-color: #52FD8B");
        var parrafo2 = document.createElement("p");
        parrafo2.classList.add("remove2");
        parrafo2.innerHTML = "Bonito nombre";
        var parentConf2 = conf.parentNode;
        parentConf2.insertBefore(parrafo2, conf );
        parrafo2.setAttribute("style", "color: green");
    }
});

function borrarEmail() {
    var parArea  = document.getElementsByClassName("remove5");

    if (parArea.length > 0) {
        removeElement(parArea)
    }
}

email.addEventListener("blur", function(){
    if(this.value == "" || this.value.indexOf("@") == -1 || this.value.indexOf(".") == -1){
        borrarEmail();
        email.setAttribute("style", "background: pink; border-color: red");
        var parrafo5 = document.createElement("p");
        parrafo5.classList.add("remove5");
        parrafo5.innerHTML = "Bad Email";
        var emailConf = email.parentNode;
        emailConf.insertBefore(parrafo5, email );
        parrafo5.setAttribute("style", "color: red");
    }else{
        borrarEmail();
        email.setAttribute("style", "background: #C8FDD4; border-color: #52FD8B");
    }
});
