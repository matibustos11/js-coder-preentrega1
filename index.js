function adivinaElNumero() {

    /*Generamos un número random entre 1 y 100.
    Usamos el methodo math random que genera un numero decimal aleatorio entre 0 y 1(excluyente), y lo multiplicamos por 100 y sumamos 1, lo que hace que genere un numero entre 1 y 100.
    */
    const numeroObjetivo = Math.floor(Math.random()*100) + 1;  
    let numero = null;
    let intentos = 0;

    while (numero !== numeroObjetivo) { //Usamos un ciclo while para llevar a cabo el juego
        numero = parseInt(prompt("Ingrese un número del 1 al 100: "), 10); //Usamos un parseInt para convertir el numero que ingresa el usuario a numero.
        intentos++;

        if (numero < numeroObjetivo){ //Utilizamos un condicional con if para brindar pistas al jugador.
            alert("El número es mas alto!");
        } else if (numero > numeroObjetivo){
            alert("El número es mas bajo!");
        } else if (numero === numeroObjetivo){
            alert("Felicidades! Encontraste el número en " + intentos + " intentos.");
            break;
        } else{
            alert("Ingrese un valor numérico entre 1 y 100");
        }
        
    }
    
}

adivinaElNumero();