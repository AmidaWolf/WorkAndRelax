import "./assets/css/main.css";
import "./assets/css/reset.css";
import {buttons} from "./js/Buttons";

let soundManager = require('SoundManager2').soundManager;

let section = document.getElementById("buttons-section");
section.appendChild(buttons);

let bgSection = document.getElementById("bg-section");
let activeValue = "waves";
bgSection.style.backgroundImage = "url(\"/assets/img/" + activeValue + ".jpg\")";

soundManager.setup({
  preferFlash: false,
  onready: function () {
    soundManager.createSound({
      url: [
        "/assets/img/sounds/waves.mp3"
      ],
      id: "waves"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/forest.mp3"
      ],
      id: "forest"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/rain.mp3"
      ],
      id: "rain"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/cafe.mp3"
      ],
      id: "cafe"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/frogs.mp3"
      ],
      id: "frogs"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/snow.mp3"
      ],
      id: "snow"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/train.mp3"
      ],
      id: "train"
    });
    soundManager.createSound({
      url: [
        "/assets/img/sounds/fire.mp3"
      ],
      id: "fire"
    });
  }
}).beginDelayedInit();

window.onload = function() {
  function changeBgAndSound() {
    activeValue = this.value;

    bgSection.style.backgroundImage = "url(\"/assets/img/" + activeValue + ".jpg\")";

    soundManager.stopAll();
    soundManager.play(activeValue, { loops: Infinity });
  }

  let button = document.getElementsByClassName("buttons__button");
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = changeBgAndSound;
  }
}

let volumeButton = document.getElementById("volume__button");

volumeButton.addEventListener('input',startTimer,false);
volumeButton.addEventListener('change',startTimer,false);

let timeout;
function startTimer() {
  let that = this;
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    handleEvent(that);
  }, 100);
}

function handleEvent(volumeButton) {
  soundManager.setVolume(activeValue, volumeButton.value);
}
