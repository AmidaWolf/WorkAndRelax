const dataButtons = ["waves", "forest", "rain", "cafe", "frogs", "snow", "train", "fire"];

export let buttons = new DocumentFragment();

dataButtons.forEach(item => {
  let button = document.createElement("button");
  button.className = "buttons__button";
  button.append(item);
  button.value = item;

  buttons.appendChild(button);
});



