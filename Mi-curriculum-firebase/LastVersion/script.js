'use strict'

window.addEventListener("load",function(){
    this.console.log("Script cargado");
    var nav = document.querySelectorAll("#nav ul li a");

    console.log(nav.length);

    this.document.querySelector("#home").addEventListener('click',function(){

        limpia(nav);
        document.querySelector("#home").className ="active";
    });
    this.document.querySelector("#cv").addEventListener('click',function(){

        limpia(nav);
        document.querySelector("#cv").className ="active";
    });
    this.document.querySelector("#aptitudes").addEventListener('click',function(){

        limpia(nav);
        document.querySelector("#aptitudes").className ="active";
    });
    this.document.querySelector("#contacto").addEventListener('click',function(){

        limpia(nav);
        document.querySelector("#contacto").className ="active";
    });



function limpia(nav){

    for(var i = 0;i < nav.length; i++){
        nav[i].className="";
    }

};

});