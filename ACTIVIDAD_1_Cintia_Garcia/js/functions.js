var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function verReceta( id){
    let info = [
    { 'receta': `  <div>
                        <h3 style="color:rgb(143, 124, 17)">POLLO AL HORNO CON VERDURAS</h3>
                        <div class="text-center">
                            <img src="img/pollo.png" alt="" width="300" height="300" >
                        
                        </div>
                        <div class="text-left"><br>
                            <strong>INGREDIENTES:</strong> <br>
                            1. Ingredientes para 4 personas <br>
                            2. 4 muslos de pollo completos <br>
                            3. 2 patatas medianas<br>
                            4. 3 zanahorias<br>
                            5. 1 cebolla<br>
                            6. 4 dientes de ajo<br>
                            7. 1 pimiento verde<br>
                            8. 1/2 pimiento rojo<br>
                            9. Tomillo seco<br>
                            10. Sal y pimienta<br>
                            11. Aceite<br>
                        </div>
                        <div>
                            <br>
                            <strong>COMO HACER POLLO AL HORNO CON VERDURAS:</strong> <br>
                            <p style="color:black; font-size: 12px">
                                1. Ponemos en la base de una fuente para horno, las patatas cortadas en láminas de 1cm de grosor, 
                                la zanahoria en trozos de un par de cm, la cebolla en tiras, los dientes de ajo picados y el pimiento verde
                                y el rojo cortado también en tiras. Aunque puedes añadir la verdura toca picada, si lo prefieres. Salpimentar
                            </P>
                        
                            <p style="color:black; font-size: 12px">
                                2. Encima, colocamos los muslos de pollo. Los bañamos con un vaso de agua y salpimentamos.. Después le añadimos
                                un pequeño chorrito de aceite a cada muslo y espolvoreamos con tomillo seco. 
                            </p>
                        
                            <p style="color:black; font-size: 12px">
                                3. Metemos al horno previamente calentado a 200ºc, calor arriba y abajo. Dejamos cocinar alrededor de 25 minutos
                            </p>
                        
                            <p style="color:black; font-size: 12px">
                                4. Pasado el tiempo, retiramos el pollo del horno y le damos la vuelta. Volvemos a salpimentar, 
                                echamos un poco más de tomillo y volvemos a meter hasta que esté cocinado y bien dorado. Otros 25 minutos más o menos
                            </p>
                        </div>
                    </div>`, 
        'id': 0}, 
    { 'receta': `<div>
                    <h2 style="color:rgb(143, 124, 17)">TACOS MEXICANOS	</h2>
                    <div class="text-center">
                        <img src="img/tacos.png" alt="" width="300" height="300" >
                    
                    </div><br>
                    <div class="text-left">
                        <strong>INGREDIENTES:</strong> <br>
                        1. 6 tortillas de trigo o de maíz<br>
                        2. 350g de carne picada de ternera o de pollo<br>
                        3. 4 dientes de ajo<br>
                        4. 500g de tomates<br>
                        5. sal y pimienta<br>
                        6. aceite<br>
                        7. Opcionalmente puedes añadir algo de queso rallado a cada taco<br>
                    </div>
                    <div>
                        <br>
                        <strong>COMO HACER LOS TACOS MEXICANOS:</strong> <br>
                        <p style="color:black; font-size: 12px">
                            1. Para comenzar con nuestros tacos mexicanos, picamos los ajos y los cocinamos a fuego muy suave durante 1 minuto. Que no coja color
                        </P>
                        
                        <p style="color:black; font-size: 12px">
                            2. Añadimos el medio kilo de tomates, ya pelados y troceados y subimos la potencia del fuego. Salpimentamos y cocinamos 
                            durante un rato. El tomate soltará agua, debe evaporarse toda que, puede tartar un rato. Una vez evaporada dejamos cocinar 
                            a fuego suave mientras removemos constantemente, durante 5 minutos más, para que coja buen sabor
                        </p>
                        
                        <p style="color:black; font-size: 12px">
                            3. Mientras se evapora el agua de los tomates, preparamos el pico de gallo. El pico de gallo es una salsa que le viene al
                            pelo a los tacos mexicanos. En un bol echamos toda la verdura de esta salsa bien picada. Añadimos el zumo de 1/2 lima o
                            de medio limón y removemos bien. Dejamos reposar
                        </p>
                        
                        <p style="color:black; font-size: 12px">
                            4. Cuando se haya cocinado un poco el tomate, añadimos la carne picada que hayamos elegido. Echamos su parte de sal y pimienta y 
                            cocinamos a fuego fuerte. Con una cuchara de madera, vamos removiendo todo y desmenuzando la carne picada, para que no que 
                            queden trozos grandes. De hecho, cuanto más finos queden mejor. Así que mezclamos con el tomate y el ajo, mientras la desmenuzamos 
                            y cocinamos la carne
                        </p>
                       
                        <p style="color:black; font-size: 12px">
                            5. Una vez se haya cocinado, ¡ya está lista! Calentamos una a una las tortillas por sus dos caras en una sartén a fuego medio. 
                            Después ponemos encima unas cucharadas de la carne, aderezamos con un poco de pico de gallo, las envolvemos dándole la
                            forma característica de taco ¡Y ya está listo!. Opcionalmente puedes espolvorear también queso rallado por encima  
                        </p>
                    </div>
                </div>
                `, 
        'id': 1},
        {
            'receta': `   <div>
                            <h2 style="color:rgb(143, 124, 17)">PECHUGA DE POLLO A LA BARBACOA	</h2>
                            <div class="text-center">
                                <img src="img/pollo2.png" alt="" width="300" height="300" >
                            
                            </div><br>
                            <div class="text-left">
                                <strong>INGREDIENTES:</strong> <br>
                                • 2 pechugas de pollo<br>
                                • 1 cucharada de ajo en polvo<br>
                                • 1 cucharada de pimentón. Que sea dulce o picante es a tu elección<br>
                                • Harina<br>
                                • 4 huevos<br>
                                • pan rallado<br>
                                • sal y pimienta<br>
                                • Aceite<br>
                                • Salsa barbacoa<br>
                            
                            </div>
                            <div>
                                <br>
                                <strong>COMO HACER PECHUGAS DE POLLO A LA BARBACOA:</strong> <br>
                                <p style="color:black; font-size: 12px">
                                    1.  Cortamos las pechugas en tacos tamaño bocado, más o menos. O un poquito más grandes
                                </P>
                                
                                <p style="color:black; font-size: 12px">
                                    2. Ponemos los taquitos de pollo en un bol y añadimos una pizca de sal, otra de pimienta negra recién molida, el pimentón y el ajo en polvo
                                </p>
                                
                                <p style="color:black; font-size: 12px">
                                    3. Después, pasamos cada trozo de pollo primero por harina, después por huevo batido, al cual le habremos puesto una pizca de sal,
                                    después por pan rallado, luego de nuevo por huevo y finalmente de nuevo por pan rallado. Con esto de pasarlo dos veces por huevo y
                                    pan rallado, obtendremos una capa exterior más gruesa y más crujiente. Reservamos en un plato hasta haber empanado todo el pollo
                                </p>
                                
                                <p style="color:black; font-size: 12px">
                                    4. Congelamos las pechugas de pollo ya empanadas durante unos 30 minutos. Para que la masa se asiente bien sobre ella
                                </p>
                            
                                <p style="color:black; font-size: 12px">
                                    5. Freímos en abundante aceite muy caliente. Lo hacemos en pequeñas tandas para que no se enfríe. Reservamos la pechuga frita en papel absorbente
                                </p>

                                <p style="color:black; font-size: 12px">
                                    6. Freímos en abundante aceite muy caliente. Lo hacemos en pequeñas tandas para que no se enfríe. Reservamos la pechuga frita en papel absorbente
                                </p>
                            </div>
                        </div>`,
            'id': 2
        }
    ];

   //alert(info[id].receta);
   document.getElementById("diverror").innerHTML=info[id].receta;
   modal.style.display = "block";
    
    

    
}

window.onclick = function(event) {
         if (event.target == modal) {
              modal.style.display = "none";
         }
}


span.onclick = function() {
modal.style.display = "none";
}

