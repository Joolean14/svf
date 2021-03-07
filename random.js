let images = [
  "images/oraculo/1.jpg",
  "images/oraculo/2.jpg",
  "images/oraculo/3.jpg",
  "images/oraculo/4.jpg",
  "images/oraculo/5.jpg",
  "images/oraculo/6.jpg",
  "images/oraculo/7.jpg",
  "images/oraculo/8.jpg",
  "images/oraculo/9.jpg",
  "images/oraculo/10.jpg",
  "images/oraculo/11.jpg",
  "images/oraculo/12.jpg",
  "images/oraculo/13.jpg",
  "images/oraculo/14.jpg",
  "images/oraculo/15.jpg",
  "images/oraculo/16.jpg",
  "images/oraculo/17.jpg",
  "images/oraculo/18.jpg",
  "images/oraculo/19.jpg",
  "images/oraculo/20.jpg",
  "images/oraculo/21.jpg",
  "images/oraculo/22.jpg",
  "images/oraculo/23.jpg",
  "images/oraculo/24.jpg",
  "images/oraculo/25.jpg",
];

let personalValues = [
  "Ser",
  "Destino",
  "Gratitud",
  "Juego",
  "Tiempo",
  "Intuición",
  "Energía",
  "Confiar",
  "Certeza",
];

let proverb = [
  "Deberíamos estar <br> menos seguros <br> de todo.",
  "No todo movimiento crea, <br> no toda pausa consume.<br> Nada de lo que te espera <br> se irá a otro lado.",
  "Cuidarnos del afán <br> nos hará ver <br> que ya llegamos <br> y estar <br> es haberlo logrado",
  "No hay 'otra forma'<br> de hacer las cosas. <br> Hacer es el único giro.<br> Moverse es la única verdad.",
  "Escalas una montaña <br> ¡Sigue!",
  "Ya no hay otra forma que la física <br> y no hay otra razón que la invisible.<br> Hoy.",
  "No importa si es sol o luna, <br> escoge la vibración. <br> No es la luz o la penumbra <br> lo que guía la decisión.",
  "Espera,<br> cubre tus ojos con tus propias manos <br> y espera.<br> Recuerda que puedes oír. <br> Te lo dirá al oído tu ceguera.",
  "Ya lo sabes.",
  "No lo definas hoy, mañana, cuando abras los ojos <br> piensa 2 veces <br> 'la felicidad' <br> y espera tu respuesta.",
  "Lo que obliga no es lo que eres. <br>Sacude tus rincones, <br>recuerda tus verdades.",
  "No eres una sola forma <br> no eres una sola alma <br> busca entre las que te arman, <br> la que te ayude a zarpar.",
  "Cómo podrías <br> contener el crecimiento <br> evitar la sensación <br>Cómo podrías evitar <br> de tu cuerpo <br>de tu mente, <br>de tu corazón <br>–semilla– <br>la explosión.",
  "Si esperas perfección <br>solo encontrarás <br>de frente, <br> horrorosa, <br> la cara de la frustración.",
  "La fortuna ya está dada.<br>Te ha tocado toda<br>entera.",
  "Crecer no es siempre<br>lo que el alma necesita.<br>Nos han enseñado mal<br>a medir las alegrías.",
  "Existes. <br> Probar el mundo es tu regalo.<br>Tu tarea.<br>No busques más.",
  "La misma luna que se eleva<br>Haciendo luz la oscuridad<br>no brilla por su cuenta<br>Es al sol quien a quien refleja.",
  "Hermosos regalos<br>esconde la vida<br>solo para quien<br>se entrega sin medida.",
  "Es mucho más lo que dejás pasar<br>Que lo que tenés.",
  "Que muera todo aquello<br>que tenías por certeza<br>es la ley de la naturaleza.",
  "Si no quieres lo mismo<br>Salte de la fila.",
  "No es aislarse<br>sino desapegarse.",
  "Puede irte muy bien<br>con algo que sabes<br>que hace mal.",
];

let path = "images/oraculo/";

let instagramUsers = ["@solovalenciaco", "@errores"];

let instagramURI = [
  "https://www.instagram.com/solovalenciaco/",
  "https://www.instagram.com/errores/",
];

let selectedNum = Math.floor(Math.random() * images.length);

document.getElementById("proverb").innerHTML = proverb[selectedNum];
document.getElementById("personalValues").innerHTML =
  personalValues[selectedNum];
// document.getElementById("instagram").innerHTML = instagram;

let imgSRC = images[selectedNum];
document.getElementById("card").setAttribute("src", imgSRC);
