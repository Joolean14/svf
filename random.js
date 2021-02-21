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
  "Deberíamos estarmenos seguros de todo",
  "No todo movimiento crea, no toda pausa consume. Nada de lo que te espera se irá a otro lado.",
  "Cuidarnos del afán nos hará ver que ya llegamos y estar es haberlo logrado",
  "No hay “otra forma de hacer las cosas. Hacer es el único giro. Moverse es la única verdad.",
  "Escalas una montaña ¡Sigue!",
  "Ya no hay otra forma que la física y no hay otra razón que la invisible. Hoy.",
  "No importa si es sol o luna, escoge la vibración. No es la luz o la penumbra lo que guía la decisión.",
  "Espera, cubre tus ojos con tus propias manos Y espera. Recuerda que puedes oír. Te lo dirá al oído tu ceguera.",
  "Ya lo sabes tipografico",
];

let path = "images/oraculo/";

let instagramUsers = ["@solovalenciaco", "@errores"];

let instagramURI = [
  "https://www.instagram.com/solovalenciaco/",
  "https://www.instagram.com/errores/",
];

let selectedNum = Math.floor(Math.random() * images.length + 1);

document.getElementById("proverb").innerHTML = proverb[selectedNum];
document.getElementById("personalValues").innerHTML =
  personalValues[selectedNum];
// document.getElementById("instagram").innerHTML = instagram;

let imgSRC = images[selectedNum];
document.getElementById("card").setAttribute("src", imgSRC);
