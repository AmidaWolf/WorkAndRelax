import "./assets/css/main.css";
import "./assets/css/reset.css";
import {buttons} from "./js/Buttons";

let section = document.getElementById("buttons-section");
section.appendChild(buttons);

let bgSection = document.getElementById("bg-section");
let activeValue = "waves";
bgSection.style.backgroundImage = "url(\"/assets/img/" + activeValue + ".jpg\")";

let source;

const audioPlay = async url => {
  source.stop();
  const context = new AudioContext();
  source = context.createBufferSource();
  const audioBuffer = await fetch(url)
    .then(res => res.arrayBuffer())
    .then(ArrayBuffer => context.decodeAudioData(ArrayBuffer));

  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start();
};

window.onload = function() {
  function changeBgAndSound() {
    activeValue = this.value;

    bgSection.style.backgroundImage = "url(\"/assets/img/" + activeValue + ".jpg\")";

    audioPlay("/assets/img/sounds/" + activeValue + ".mp3");
  }

  let button = document.getElementsByClassName("buttons__button");
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = changeBgAndSound;
  }
}

//document.querySelector('#start').onclick = () => audioPlay('/assets/sounds/.mp3');





