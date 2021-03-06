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
  "Ya lo sabes tipografico",
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
