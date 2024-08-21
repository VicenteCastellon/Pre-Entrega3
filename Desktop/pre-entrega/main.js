
let usuarioName = "";

while (usuarioName === "") {
    usuarioName = prompt("Hola ¿cómo te llamas?");

    if (usuarioName === "") {
        alert("No ingresaste el nombre de usuario. Por favor, inténtalo de nuevo.");
    } else {
        alert("Nombre de usuario ingresado: " + usuarioName);
        usuarioName = prompt("bienvenido  " + usuarioName +  ", a continuacion te haremos unas preguntas para conocer un poco mejor que haces aqui (Responde con 'okay')")
    }
}

let saberMas = "";

while (saberMas.toLowerCase() !== "si" && saberMas.toLowerCase() !== "no") {
    saberMas = prompt("¿Quieres aprender sobre cómo funciona nuestra empresa y lo que hacemos? Elige una opcion: \n1.si\n2.no");
    
    if (saberMas.toLowerCase() !== "si" && saberMas.toLowerCase() !== "no") {
        alert("Por favor, responde con 'si' o 'no'.");
    }else{
        
    }
}

if (saberMas.toLowerCase() === "si") {
    let interes = "";
    
    while (interes !== "1" && interes !== "2" && interes !== "3") {
        interes = prompt("Que bien, ¿estás interesado en invertir o solo vienes aquí a aprender un poco más? Elige una opción:\n1. Estoy interesado en invertir\n2. Solo quiero aprender\n3. Me gustaría buscar trabajo en esta empresa");

        if (interes === "1" || interes === "2" || interes === "3") {
            alert("¡Genial! Estamos emocionados de saber qué piensas sobre lo que hacemos.");
        } else {
            alert("Por favor, elige una opción válida (1, 2 o 3).");
        }
    }
} else {
    alert("¡No hay problema! Estamos aquí si cambias de opinión.");
}











