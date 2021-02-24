const dataButtons = ["waves", "forest", "rain", "cafe", "frogs", "snowpeaks", "train", "fire"];

export let buttons = new DocumentFragment();

dataButtons.forEach(item => {
  let button = document.createElement("button");
  button.className = "buttons__button";
  let svg = document.createElement("svg");
  svg.src = "/assets/img/" + item + ".svg";
  button.appendChild(svg);
  button.value = item;

  buttons.appendChild(button);
});



