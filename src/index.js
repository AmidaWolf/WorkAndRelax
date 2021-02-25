import "./assets/css/main.css";
import "./assets/css/reset.css";

let soundManager = require('SoundManager2').soundManager;

let bgSection = document.getElementById("bg-section");
let activeValue;
bgSection.style.backgroundImage = "url(\"/assets/img/main.jpg\")";

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
        "/assets/img/sounds/snowpeaks.mp3"
      ],
      id: "snowpeaks"
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

let playStatus = false;
let stopActive = false;
let soundOn = true;
let buttonStopAndPlay = document.getElementById("stop-play");
let buttonStop = document.getElementById("stop");
let buttonStart = document.getElementById("play");
let volumeButton = document.getElementById("volume__button");
let buttonOnOff = document.getElementById("on-off");
let buttonOn = document.getElementById("on");
let buttonOff = document.getElementById("off");

window.onload = function() {


  function changeBgAndSound() {
    activeValue = this.value;

    bgSection.style.backgroundImage = "url(\"/assets/img/" + activeValue + ".jpg\")";

    soundManager.stopAll();
    soundManager.play(activeValue, { loops: Infinity });
    soundManager.setVolume(activeValue, volumeButton.value);

    playStatus = true;

    //добавляет кнопку стоп при первом запуске любого трека,
    // а так же предотвращает появление лишней кнопки стоп/старт (если была активна) при переключении трека
    if (stopActive === false && playStatus === true) {
      buttonStop.classList.remove("display_none");
      buttonStart.classList.add("display_none");
    } else if (stopActive === true && playStatus === true) {
      buttonStop.classList.add("display_none");
      buttonStart.classList.remove("display_none");
    }
    //сбрасывает кнопку "без звука", если была активна во время переключения трека
    buttonOn.classList.remove("display_none");
    buttonOff.classList.add("display_none");
    soundOn = true;
  }

  function stopAndPlay() {
    if (activeValue === undefined) { //предотвращает изменение кнопки, если трека нет и выводит сообщение
      console.log("activeValue = " + activeValue);
    } else if (playStatus === true && activeValue.length > 0) {
      soundManager.stopAll();
      buttonStop.classList.add("display_none");
      buttonStart.classList.remove("display_none");
      playStatus = false;
      stopActive = false;
    } else if (playStatus === false && activeValue.length > 0) {
      soundManager.start(activeValue, { loops: Infinity });
      soundManager.setVolume(activeValue, volumeButton.value);
      buttonStart.classList.add("display_none");
      buttonStop.classList.remove("display_none");
      playStatus = true;
      stopActive = true;
    }
  }

  function soundOffOn() {
    if (activeValue === undefined) { //предотвращает изменение кнопки, если трека нет и выводит сообщение
      console.log("activeValue = " + activeValue);
    } else if (soundOn === true && activeValue.length > 0) {
      buttonOff.classList.remove("display_none");
      buttonOn.classList.add("display_none");
      soundOn = false;
      soundManager.setVolume(activeValue, 0);
    } else {
      buttonOn.classList.remove("display_none");
      buttonOff.classList.add("display_none");
      soundOn = true;
      soundManager.setVolume(activeValue, volumeButton.value);
    }
  }

  buttonStopAndPlay.onclick = stopAndPlay;
  buttonOnOff.onclick = soundOffOn;

  let button = document.getElementsByClassName("buttons__button");
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = changeBgAndSound;
  }
}

// код для отслеживания изменения value у input  для всех браузеров,
// нужен т.к. не все умеют считывать изменяемое значение

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


