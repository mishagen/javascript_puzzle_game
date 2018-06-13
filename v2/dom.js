/** ejercicio. tomar una imagen que al hacer click con el raton sobre ella cambie la imagen por otra. */

/* declaracion de variables globales */
var x=0;
var elemento
var nuevop;
var nodo;
var ternario = true;
var aux;
var solucion;
var figuras;
var n_click=0;
var temporizador;

/* FIN declaracion de variables globales */


/* FUNCIONES */
 
function clean(){ //funcion limpiar dom
         elemento=document.getElementById("mensaxes");
         while(elemento.hasChildNodes()){
            elemento.removeChild(elemento.firstChild);
         }
}



function iniciar(){ // inicio del juego
            n_click=0;
  
          figuras= [
            'astronaut.png', 'athlete.png', 'builder.png', 'carpenter.png', 'cashier.png', 'chef.png', 'chemist.png', 'clown.png',
            'concierge.png', 'courier.png', 'detective.png', 'diver.png', 'dj.png', 'doctor.png', 'dyer.png', 'electrician.png',
            'farmer.png', 'firefighter.png', 'fisherman.png', 'gardener.png', 'hairdresser.png', 'lumberjack.png', 'magician.png',
            'maid.png', 'manager.png', 'mechanic.png', 'miner.png', 'nurse.png', 'painter.png', 'pensioner.png', 'photographer.png',
            'pilot.png', 'plumber.png', 'policeman.png', 'politician.png', 'postman.png', 'priest.png', 'professor.png', 'programmer.png',
            'sailor.png', 'secretary.png', 'showman.png', 'singer.png', 'soldier.png' , 'stewardess.png', 'support.png', 'taxi-driver.png',
           'teacher.png', 'waiter.png', 'writer.png'
            ];
	       figuras.sort(function(a, b){return 0.5 - Math.random()});

          var mapa = []; // array que almacenará la "solucion"


          clean(); // llamada a limpiar dom 
         

          /* PETICION DATOS A USR  */

           do {
                    var lim_col = prompt ("indica numero par columnas");
                    var lim_row = prompt ("indica numero par filas");

                  } while ((lim_col%2)!=0 || (lim_row%2)!=0);  

                        if(lim_col*lim_row>=100){
                          lim_col=10;
                          lim_row=10;

                        }
          /* FIN  PETICION DATOS A USR  */

          /** Necesitamos crear un array de diseños, debe haber dos figuras iguales para cada diseño
              asi que tomamos un pedazo del array figuras y luego lo concatenamos sobre si mismo para lograrlo.
          */
          aux = figuras;  
          console.log(figuras); 
           
          aux = aux.splice(0,(lim_col*lim_row/2));
          aux = aux.concat(aux);
          



          /* dibujamos el tablero */
           var tablero =function (){


                        // Obtener la referencia del elemento donde crearemos la tabla.
                        elemento = document.getElementById("mensaxes");
                       
                        // Crea un elemento <table> y un elemento <tbody>
                        var tabla   = document.createElement("table");
                        var tblBody = document.createElement("tbody");
                       
                        // Crea las celdas
                        for (var i = 0; i < lim_col; i++) {
                          // Crea las hileras de la tabla
                          var hilera = document.createElement("tr");
                       
                          for (var j = 0; j < lim_row; j++) {
                            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                            // texto sea el contenido de <td>, ubica el elemento <td> al final
                            // de la hilera de la tabla
                            var celda = document.createElement("td");
                            // var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);

                                var imaxe=imx(); // aqui añadimos la imagen. usamos una función aunque podríamos añadirlo directamente.


                            celda.appendChild(imaxe); // agregamos imagen a celda creada
                            hilera.appendChild(celda); // agregamos celda a hilera creada
                          }
                       
                          // agrega la hilera al final de la tabla (al final del elemento tblbody)
                          tblBody.appendChild(hilera);
                        }
                       
                        // posiciona el <tbody> debajo del elemento <table>
                        tabla.appendChild(tblBody);
                        // appends <table> into <body>
                        elemento.appendChild(tabla);
                        // modifica el atributo "border" de la tabla y lo fija a "2";
                        tabla.setAttribute("style", "margin:0 auto;");
            } 

           


           var imx = function(){ // alta imagen
                      

                     x++;
                     nuevop=document.createElement("img");
                          
                                nuevop.className = "img";
                                nuevop.id = x;
                                nuevop.src="png/img.png";
                                mezclar();
                                nuevop.name="img";
                                nuevop.setAttribute('width','70px');
                                nuevop.setAttribute('onClick','cambia(this)');
                             return nuevop;
            }




            function mezclar(){
            	 aux.sort(function(a, b){return 0.5 - Math.random()});
               mapa.push(aux.shift());
            	//  return aux.shift(); // no lo usaremos en esta ocasión. mantenemos por historico.
            }

            x=0;
            tablero();
            console.log(mapa);
            solucion=mapa;
            

// ref y documentacion: https://es.khanacademy.org/computing/computer-programming/programming-games-visualizations/memory-game/a/grid-of-tiles
}

// ------------------------------------------------------------------------------------
function cambia(imagen){
    n_click++;
    var snd = new Audio("sound/click.wav"); // buffers automatically when created
    snd.play();

    console.log(solucion);
    nuevop=imagen
 
    if(nuevop.className =="img"){
       nuevop.className = "show";
                  
                  nuevop.src="png/"+solucion[nuevop.id-1];
                  nuevop.removeAttribute("onClick");
                  
    } else {
       nuevop.className = "img";
                  // this.nuevop.id = x;
                  nuevop.src="png/img.png";
                  nuevop.setAttribute('onClick','cambia(this)');
    }

      if(nuevop.className != "img"){
        compara(nuevop);
      }
}
// ------------------------------------------------------------------------------------

function compara(imagen){
    var mov1, mov2;
   

    ternario = (ternario) ?  false: true;

     if (ternario==false){

         temporizador = setTimeout(function(){cambia(imagen);ternario=true;},10000);
        
      this.mov1=imagen;
     } else {
         clearTimeout(temporizador);
        
      this.mov2=imagen;
        
      if(solucion[this.mov1.id-1]==solucion[this.mov2.id-1]){
          this.mov1.className = "win";
          this.mov2.className = "win";
          this.mov1.removeAttribute("onClick");
          this.mov2.removeAttribute("onClick");
     } else {
       var mov1, mov2;
       
       setTimeout(function(){
          cambia(this.mov1);cambia(this.mov2);
        }, 200); 
        
     }
  }
  fin_xogo();
}
// ------------------------------------------------------------------------------------

function fin_xogo(){
  var m = document.getElementsByTagName("img");
  var n_img = m.length;
  var acertos=0;

  for(var k = 0; k<m.length;k++){
    if ( m[k].className == "win"){
      acertos++;
    }
  }

  if (n_img==acertos){
       
       var snd = new Audio("sound/success.wav"); // buffers automatically when created
            snd.play(); 
     
      

      setTimeout(function(){
          if(confirm("fin xogo\nnumero clicks:"+n_click+"\n¿volver a xogar?")){
           
            clean(); 
            setTimeout(function(){iniciar()},200);
          }
        }, 3400);  
  }
}
// ------------------------------------------------------------------------------------

function amosa(){
  var m = document.getElementsByTagName("img");
  for(var k = 0; k<m.length;k++){
        m[k].src="png/"+solucion[k];
        m[k].removeAttribute('onClick');
  }
}
// ------------------------------------------------------------------------------------
