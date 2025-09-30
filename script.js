// Faire une fonction playSound
function playSound(event) {
  // Sélectionner la balise audio correspondant
  // à la touche pressée
  const keyCode = event.keyCode;
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`)

  // Sélectionner le pad correspondant
  // à la touche pressée


  // Jouer le son de la balise sélectionnée
  audio.play();

  // jouer l'animation CSS de pression
  // sur le pad correspondant
}

// Ajouter un écouteur d'évenement sur la
// pression d'une touche du clavier
window.addEventListener('keydown', (event) => {
  // Lancer la fonction playSound quand il y a un évenement
  playSound(event);
})



