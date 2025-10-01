// Faire une fonction playSound
function playSound(event) {
  // Sélectionner la balise audio correspondant
  // à la touche pressée
  const keyCode = event.keyCode;
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`)

  // Sélectionner le pad correspondant
  // à la touche pressée
  let pad = document.querySelector(`div.key[data-key="${keyCode}"]`)

  // Jouer le son de la balise sélectionnée
  audio.currentTime = 0;
  audio.play();

  // jouer l'animation CSS de pression
  // sur le pad correspondant
  pad.classList.add('playing');
}

function removeTransition(event) {

  let pad = event.target;

  pad.classList.remove('playing');
}

// Ajouter un écouteur d'évenement sur la
// pression d'une touche du clavier
window.addEventListener('keydown', (event) => {
  // Lancer la fonction playSound quand il y a un évenement
  playSound(event);
})

let pads = document.querySelectorAll(`div.key`)

pads.forEach ((pad) => {
  pad.addEventListener('transitionend', (event) => {
    removeTransition(event)
  })
})

