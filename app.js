'use strict'


let nodoStop = document.querySelector( '#stop' );
nodoStop.setAttribute("disabled", "");//PARA QUE EL BOTON DE STOP ESTÉ DESACTIVADO POR DEFECTO
let nodoRestart = document.querySelector( '#restart' );
nodoRestart.setAttribute("disabled", ""); //PARA QUE EL BOTON REINICIAR ESTÉ DESACTIVADO POR DEFECTO
let nodoBorrar = document.querySelector( '#borrar' );
nodoBorrar.setAttribute("disabled", "");//PARA QUE EL BOTON BORRAR ESTÉ DESACTIVADO POR DEFECTO
let nodoSave = document.querySelector( '#save' );
nodoSave.setAttribute("disabled", "");//PARA QUE EL BOTÓN SAVE ESTE DESACTIVADO POR DEFECTO


//cuando haga click en STOP pausar, activo siempre menos al inicio y cuando le doy a borrar
nodoStop.addEventListener( 'click' , function(){ 
    console.log( 'Clic en stop')
    nodoPlay.setAttribute("disabled", "");
    nodoStop.setAttribute("disabled", "");
    nodoSave.setAttribute("disabled", "");
    nodoBorrar.removeAttribute("disabled");//ACTIVO EL BOTON Borrar
    nodoRestart.removeAttribute("disabled");//ACTIVO EL BOTON Restart

    clearInterval( ref_interval );//PARA temporizador
});

//cuando haga click en el PLAY empezar, SOLO está activo cuando le doy a borrar
let nodoPlay = document.querySelector( '#play' );

let ref_interval;
let nodoCentesimas = document.querySelector( '#centesimas' );
let str_centesimas = 0;
let nodoSegundos = document.querySelector( '#segundos' );
let str_segundos = 0;
let nodoMinutos = document.querySelector( '#minutos' );
let str_minutos = 0;
let nodoHoras = document.querySelector( '#horas' );
let str_horas = 0;

    
nodoPlay.addEventListener( 'click' , function(){ 
    console.log( 'Clic en play')
    nodoPlay.setAttribute("disabled", "");//DESACTIVA play
    nodoRestart.setAttribute("disabled", "");//DESACTIVA restart
    nodoStop.removeAttribute("disabled");//ACTIVO EL BOTON STOP
    nodoSave.removeAttribute("disabled");//ACTIVO EL BOTON Guardar
    nodoBorrar.removeAttribute("disabled");//ACTIVO EL BOTON Borrar
    clearInterval ( ref_interval )//asi me aseguro de que SOLO haya un temporizador por variable, para que no se vuelva loco si le doy a start varias veces 
    ref_interval = setInterval( function(){
        console.log( 'Interval ejecutandose');
        console.log( '--------------');
        if(str_centesimas < 99){
            str_centesimas = str_centesimas + 1;
            console.log( str_centesimas )
        }else{ 
            if(str_segundos < 60 ){
                str_centesimas = 0;
                str_segundos = str_segundos + 1;
                console.log(str_segundos)
            }else{
                if(str_minutos < 60){
                    str_segundos = 0;
                    str_minutos = str_minutos + 1;
                    console.log(str_minutos)
                }else{
                    if(str_horas < 24){
                        str_minutos = 0;
                        str_horas = str_horas + 1;
                        console.log(str_horas)
                    }else{
                        clearInterval( ref_interval )
                    }
                }
            }
        }
        pintarNumero ( str_centesimas, '#centesimas' );
        pintarNumero ( str_segundos, '#segundos' );
        pintarNumero ( str_minutos, '#minutos' );
        pintarNumero ( str_horas, '#horas' );
    }, 10 );
});


//cuando haga clic en RESTART empezar desde ESE mismo punto, activo cuando le doy a stop
    
nodoRestart.addEventListener( 'click' , function(){ 
        console.log( 'Clic en restart')
        nodoStop.removeAttribute("disabled");//ACTIVA parar
        nodoSave.removeAttribute("disabled"); //ACTIVA guardar
        nodoBorrar.removeAttribute("disabled"); //ACTIVA borrar
        nodoPlay.setAttribute("disabled", "");//DESACTIVA play
        nodoRestart.setAttribute("disabled", "");//DESACTIVA restart
    ref_interval = setInterval( function(){
            console.log( 'Interval ejecutandose');
            console.log( '--------------');
            if(str_centesimas < 99){
                str_centesimas = str_centesimas + 1;
                console.log( str_centesimas )
            }else{ 
                if(str_segundos < 60 ){
                    str_centesimas = 0;
                    str_segundos = str_segundos + 1;
                    console.log(str_segundos)
                }else{
                    if(str_minutos < 60){
                        str_segundos = 0;
                        str_minutos = str_minutos + 1;
                        console.log(str_minutos)
                    }else{
                        if(str_horas < 24){
                            str_minutos = 0;
                            str_horas = str_horas + 1;
                            console.log(str_horas)
                        }else{
                            clearInterval( ref_interval )
                        }
                    }
                }
            }
            pintarNumero ( str_centesimas, '#centesimas' );
            pintarNumero ( str_segundos, '#segundos' );
            pintarNumero ( str_minutos, '#minutos' );
            pintarNumero ( str_horas, '#horas' );
    }, 10 );

        
});


//cuando haga clic en BORRAR volver a cero,activo siempre menos cuando le doy a el mismo

    
nodoBorrar.addEventListener( 'click' , function(){ 
        console.log( 'Clic en borrar')
        clearInterval( ref_interval );
        str_centesimas = 0;
        str_segundos = 0;
        str_minutos = 0;
        str_horas = 0;
        pintarNumero ( str_centesimas, '#centesimas');
        pintarNumero ( str_segundos, '#segundos');
        pintarNumero ( str_minutos, '#minutos');
        pintarNumero ( str_horas, '#horas');

        nodoStop.setAttribute("disabled", "");//desactiva STOP
        nodoRestart.setAttribute("disabled", ""); //desactiva REINICIAR 
        nodoBorrar.setAttribute("disabled", "");//desactiva BORRAR 
        nodoSave.setAttribute("disabled", "");//desactiva SAVE 
        nodoPlay.removeAttribute("disabled");//activa PLAY


});

//cuando haga clic en GUARDAR pintar ESA hora,activo mientras corra el tiempo

let listaHora = document.querySelectorAll ('.temporizador__resultado' );
console.log( listaHora )
    
nodoSave.addEventListener( 'click' , function(){ 
        console.log( 'Clic en save')
        nodoStop.removeAttribute("disabled");
        nodoSave.removeAttribute("disabled");
        nodoBorrar.removeAttribute("disabled");
        nodoRestart.setAttribute("disabled", ""); //desactiva REINICIAR 
        nodoPlay.setAttribute("disabled", ""); //desactiva PLAY 

        // let str_tiempo = `<div class="temporizador__nmbr" >` + str_horas + `: `+ str_minutos + `: `+ str_segundos + `: `+ str_centesimas + `: `</div>
        // <button class="temporizador__btnclose"><svg xmlns="http://www.w3.org/2000/svg" class="temporizador__close" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        // </svg></button>`

        let nodoResultado =document.createElement('div')
        nodoResultado.classList.add( 'temporizador__resultado' )
        
        let nodoHijo = document.createElement( 'div' )
        nodoHijo.classList.add( 'temporizador__nmbr' )

        nodoHijo.innerHTML = formatoNumero(str_horas)+ ":"+ formatoNumero(str_minutos)+ ":" + formatoNumero(str_segundos)+ ":" + formatoNumero(str_centesimas);
        // Añadir hijos
        nodoResultado.appendChild(  nodoHijo )
        
        let nodoClose = document.createElement( 'button' )
        nodoClose.classList.add( 'temporizador__btnclose' )

        nodoClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="temporizador__close" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>`
        // Añadir close
        nodoResultado.appendChild(  nodoClose )
        
       
        
        let nodoResultados = document.querySelector(".temporizador__resultados")//SELECCIONO EL CONTENEDOR
        nodoResultados.appendChild( nodoResultado)//PINTO
        
        nodoClose.addEventListener( 'click', function (){

            nodoResultado.remove();

        });


});


function pintarWeb(mensaje, identificador) {
    let nodoDatos = document.querySelector(identificador);
    console.log(nodoDatos);
    nodoDatos.innerHTML = mensaje;
}
function pintarNumero(mensaje, identificador) {
    let nodoDatos = document.querySelector(identificador);
    console.log(nodoDatos);
    if( mensaje < 10 ){
         nodoDatos.innerHTML = '0' + mensaje;
    }else{
        nodoDatos.innerHTML = mensaje;
    }
}

function formatoNumero(mensaje) {
    if( mensaje < 10 ){
        return '0' + mensaje;
    }else{
        return mensaje;
    }
}

