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
    soundManager.play(activeValue);
  }

  let button = document.getElementsByClassName("buttons__button");
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = changeBgAndSound;
  }
}

//document.querySelector('#start').onclick = () => audioPlay('/assets/sounds/.mp3');





