/** ejercicio. tomar una imagen que al hacer click con el raton sobre ella cambie la imagen por otra. */


var x=0;
var elemento;
var nuevop;
var nodo;
var ternario = true;
var aux;







function clean(){
         elemento=document.getElementById("mensaxes");
         while(elemento.hasChildNodes()){
            elemento.removeChild(elemento.firstChild);
         }
         

}



function iniciar(){
  
          var figuras= [
            'astronaut.png', 'athlete.png', 'builder.png', 'carpenter.png', 'cashier.png', 'chef.png', 'chemist.png', 'clown.png',
            'concierge.png', 'courier.png', 'detective.png', 'diver.png', 'dj.png', 'doctor.png', 'dyer.png', 'electrician.png',
            'farmer.png', 'firefighter.png', 'fisherman.png', 'gardener.png', 'hairdresser.png', 'lumberjack.png', 'magician.png',
            'maid.png', 'manager.png', 'mechanic.png', 'miner.png', 'nurse.png', 'painter.png', 'pensioner.png', 'photographer.png',
            'pilot.png', 'plumber.png', 'policeman.png', 'politician.png', 'postman.png', 'priest.png', 'professor.png', 'programmer.png',
            'sailor.png', 'secretary.png', 'showman.png', 'singer.png', 'soldier.png' , 'stewardess.png', 'support.png', 'taxi-driver.png',
           'teacher.png', 'waiter.png', 'writer.png'
            ];


          clean();
         

           do {
                    var lim_col = prompt ("indica numero par columnas");
                    var lim_row = prompt ("indica numero par filas");

                  } while ((lim_col%2)!=0 || (lim_row%2)!=0);  

                        if(lim_col*lim_row>=100){
                          lim_col=10;
                          lim_row=10;

                        }
          aux = figuras;  
          console.log(figuras); 
           
          aux = aux.splice(0,(lim_col*lim_row/2));
          aux = aux.concat(aux);
          




           var tablero =function (){


                        // Obtener la referencia del elemento body
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



                                var imaxe=imx();


                            celda.appendChild(imaxe);
                            hilera.appendChild(celda);
                          }
                       
                          // agrega la hilera al final de la tabla (al final del elemento tblbody)
                          tblBody.appendChild(hilera);
                        }
                       
                        // posiciona el <tbody> debajo del elemento <table>
                        tabla.appendChild(tblBody);
                        // appends <table> into <body>
                        elemento.appendChild(tabla);
                        // modifica el atributo "border" de la tabla y lo fija a "2";
                        tabla.setAttribute("border", "2");
            } 

           


           var imx = function(){
                      

                     x++;
                     nuevop=document.createElement("img");
                           // nuevop.className = "image";
                           // nuevop.id = x;

                                nuevop.className = "img";
                                nuevop.id = x;
                                nuevop.src="png/"+mezclar();
                                nuevop.name="img";
                                nuevop.setAttribute('width','50px');


                         
                             return nuevop;
            }




            function mezclar(){
            	 aux.sort(function(a, b){return 0.5 - Math.random()});

            	 return aux.shift();
            }

            x=0;
            tablero();


// ref y documentacion: https://es.khanacademy.org/computing/computer-programming/programming-games-visualizations/memory-game/a/grid-of-tiles


}



 



//--------------------------------------------------------------------------------------

function elimina(){
 // modificar 1 a 1 
         elemento=document.getElementById("mensaxes");
         if(elemento.hasChildNodes()){
            elemento.removeChild(elemento.lastChild);
            x--;
          
         }

 

}

