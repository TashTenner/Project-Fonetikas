const wordIntro1 = ["yoSpa"];
const wordIntro2 = ["estoySpa"];
const wordIntro3 = ["aquiSpa"];
const phrase1 = ["yoEstoyAqui"];
const wordIntro4 = ["alliSpa"];
const phrase2 = ["yoEstoyAlli"];
const wordIntro5 = ["tuSpa"];
const wordIntro6 = ["estasSpa"];
const wordIntro7 = ["ySpa"];
const wordIntro8 = ["tambienSpa"];
const wordIntro9 = ["peroSpa"];
const wordIntro10 = ["siSpa"];
const wordIntro11 = ["noSpaOne"];
const wordIntro12 = ["noSpaTwo"];
const wordIntro13 = ["oSpa"];
const wordIntro14 = ["elSpa"];
const wordIntro15 = ["ellaSpa"];
const wordIntro16 = ["estaSpa"];
const wordIntro17 = ["holaSpa"];

// var for audio spot
const linkPlay = document.getElementById("play");
// este siguiente Id no esta creado es por eso que no encuentra nada
const linkPlaySevDivs = document.getElementById("play-sev-divs");
const linkPlayThreeOptionsA = document.getElementById("sound-a");
const linkPlayThreeOptionsB = document.getElementById("sound-b");
const linkPlayThreeOptionsC = document.getElementById("sound-c");

let addAudio;
let addAudioSevDivs;
let addAudioThreeOptions1;
let addAudioThreeOptions2;

let wordForLoop;
let correctAudio;

// pick a random audio
function pickRandom() {
  var audioName = audioGer[Math.floor(Math.random() * audioGer.length)];
  return audioName;
}

let arrayThreeAudios = [];

// shuffle
function shuffle(array) {
  array.sort(function() {
    return Math.random() - 0.5;
  });
}

// create divs for several icons

function createSeveralDivsIcon(words) {
  let parentSeveralWords = document.querySelector(".several-words");
  let content = "";
  words.forEach(function(word) {
    content += `
      <div class="target-language" onClick=>
        <img class="icon-target-language" src= ${word.icon.src} />
      </div>
    `;
  });
  parentSeveralWords.innerHTML = content;

  // let divSubSeveralWords = document.createElement("div");
  // divSubSeveralWords.setAttribute("class", "target-language-sev-divs");
  // let aSubSeveralWords = document.createElement("a");
  // aSubSeveralWords.setAttribute("href", "#");
  // // este id se crea aca
  // aSubSeveralWords.setAttribute("id", "play-sev-divs");
  // let imgSubSeveralWords = document.createElement("img");
  // imgSubSeveralWords.setAttribute("id", "icon-target-language-sev-divs");

  // parentSeveralWords.appendChild(divSubSeveralWords);
  // divSubSeveralWords.appendChild(aSubSeveralWords);
  // aSubSeveralWords.appendChild(imgSubSeveralWords);
}

// configLesson(stepOne);
const configLesson = function(unit, wordIntro) {
  if (
    wordIntro[0] === wordIntro1[0] ||
    wordIntro === wordIntro2 ||
    wordIntro === wordIntro3 ||
    wordIntro === wordIntro4 ||
    wordIntro === wordIntro5 ||
    wordIntro === wordIntro6
  ) {
    wordIntro.forEach(function(word) {
      wordForLoop = wordIntro;
      correctAudio = spanishGerman[unit][word][1].audio;

      // writes the Spanish word
      const text = spanishGerman[unit][word][0];
      let natLanguage = document.getElementById("native-language");
      natLanguage.textContent = text;

      // shows icon of target language
      let srcIconWord = spanishGerman[unit][word][1].icon.getAttribute("src");
      let targetLanguage = document.getElementById("icon-target-language");
      targetLanguage.setAttribute("src", srcIconWord);

      // plays sound, word introduction
      addAudio = function() {
        spanishGerman[unit][word][1].audio.play();
      };
      linkPlay.addEventListener("click", addAudio);

      // plays sound, three options, wrong 1 and 2
      let pickedAudioOne = pickRandom();
      while (pickedAudioOne === spanishGerman[unit][word][1]) {
        pickedAudioOne = pickRandom();
      }
      addAudioThreeOptions1 = function() {
        pickedAudioOne.audio.play();
      };
      let pickedAudioTwo = pickRandom();
      while (
        pickedAudioTwo === spanishGerman[unit][word][1] ||
        pickedAudioTwo === pickedAudioOne
      ) {
        pickedAudioTwo = pickRandom();
      }
      addAudioThreeOptions2 = function() {
        pickedAudioTwo.audio.play();
      };

      arrayThreeAudios = [
        [addAudioThreeOptions1, "¡Inténtalo otra vez!"],
        [addAudioThreeOptions2, "¡Inténtalo otra vez!"],
        [addAudio, "¡Correcto!"]
      ];
      shuffle(arrayThreeAudios);

      // plays two incorrect audios
      linkPlayThreeOptionsA.addEventListener("click", arrayThreeAudios[0][0]);
      // linkPlayThreeOptionsA.addEventListener(
      //   "ondblclick",
      //   alert(arrayThreeAudios[0][1])
      // );
      linkPlayThreeOptionsB.addEventListener("click", arrayThreeAudios[1][0]);
      // plays sound, three options, correct sound 3
      linkPlayThreeOptionsC.addEventListener("click", arrayThreeAudios[2][0]);

      // shows unit, word index
      const unitAndWord = spanishGerman[unit][word][2];
      let unitWordCount = document.getElementById("index-unit");
      unitWordCount.textContent = unitAndWord;

      // shows title / task, what to do
      const showTaskInNatLang = spanishGerman[unit][word][3];
      let imperativePhrase = document.getElementById("imperative-title");
      imperativePhrase.textContent = showTaskInNatLang;

      // shows title / task, choose correct audio
      const showTitleOptiones = spanishGerman[unit][word][4];
      let chooseAudio = document.getElementById("choose-correct-audio");
      chooseAudio.textContent = showTitleOptiones;

      // =
      let showEqualSign = document.getElementById("equal-sign");
      showEqualSign.textContent = "=";

      // shows three img of 1 correct audio, 2
      let audioOptionfield = document.querySelectorAll(".audio-sign");
      audioOptionfield.forEach(function(singleSrc) {
        singleSrc.src = "./img/threeAudios.png";
      });
    });
  } else if (wordIntro === phrase1 || wordIntro === phrase2) {
    wordIntro.forEach(function(word) {
      wordForLoop = wordIntro;

      // shows title / task, what to do DONE
      const showTaskInNatLang = spanishGerman[unit][word][0];
      let imperativePhrase = document.getElementById("imperative-title");
      imperativePhrase.textContent = showTaskInNatLang;

      // writes the Spanish phrase DONE
      const text = spanishGerman[unit][word][1];
      let natLanguage = document.getElementById("native-language");
      natLanguage.textContent = text;

      // shows unit, word index DONE
      const unitAndWord = spanishGerman[unit][word][2];
      let unitWordCount = document.getElementById("index-unit");
      unitWordCount.textContent = unitAndWord;

      createSeveralDivsIcon(spanishGerman[unit][word][3]);
    });
  }
};

// buttons
const btnStart = document.getElementById("hide-start");
btnStart.onclick = function() {
  const landingDiv = document.getElementById("start-page");
  landingDiv.style.visibility = "hidden";
  configLesson("unitOne", wordIntro1);
};

const btnPauseOn = document.getElementById("btn-pause");
btnPauseOn.onclick = function() {
  const pauseDiv = document.getElementById("pause-page");
  pauseDiv.style.visibility = "visible";
};

const btnPauseOff = document.getElementById("hide-pause");
btnPauseOff.onclick = function() {
  const pauseDiv = document.getElementById("pause-page");
  pauseDiv.style.visibility = "hidden";
};

// cons

function goToNextWord() {
  if (wordForLoop === wordIntro1) {
    return wordIntro2;
  } else if (wordForLoop === wordIntro2) {
    return wordIntro3;
  } else if (wordForLoop === wordIntro3) {
    return phrase1;
  } else if (wordForLoop === phrase1) {
    return wordIntro4;
  } else if (wordForLoop === wordIntro4) {
    return phrase2;
  } else if (wordForLoop === phrase2) {
    return wordIntro5;
  } else if (wordForLoop === wordIntro5) {
    return wordIntro6;
  }
}

const nextWord = document.getElementById("next-word");
// if () {}

nextWord.onclick = function() {
  console.log(wordForLoop);
  console.log(correctAudio);

  linkPlay.removeEventListener("click", addAudio);

  linkPlayThreeOptionsA.removeEventListener("click", arrayThreeAudios[0]);
  linkPlayThreeOptionsB.removeEventListener("click", arrayThreeAudios[1]);
  linkPlayThreeOptionsC.removeEventListener("click", arrayThreeAudios[2]);

  // NOT show =
  let showEqualSign = document.getElementById("equal-sign");
  showEqualSign.textContent = "";

  // NOT show icon of target language
  let targetLanguage = document.getElementById("icon-target-language");
  targetLanguage.setAttribute("src", "");

  // NOT show three img of 1 correct audio, 2
  let audioOptionfield = document.querySelectorAll(".audio-sign");
  audioOptionfield.forEach(function(singleSrc) {
    singleSrc.src = "";
  });

  // NOT show title / task, choose correct audio
  let chooseAudio = document.getElementById("choose-correct-audio");
  chooseAudio.textContent = "";

  // NOT show title / task, what to do DONE
  let imperativePhrase = document.getElementById("imperative-title");
  imperativePhrase.textContent = "";

  // NOT write the Spanish phrase DONE
  let natLanguage = document.getElementById("native-language");
  natLanguage.textContent = "";

  // NOT shows unit, word index DONE
  let unitWordCount = document.getElementById("index-unit");
  unitWordCount.textContent = "";

  // delete createSeveralDivsIcon();

  // NOT show icon of target language
  const deleteChildNodes = document.getElementsByClassName("several-words")[0];

  document.querySelector(".target-language").style.display = "none";

  if (deleteChildNodes.firstChild) {
    while (deleteChildNodes.firstChild) {
      deleteChildNodes.removeChild(deleteChildNodes.firstChild);
    }
  }

  configLesson("unitOne", goToNextWord());
};
