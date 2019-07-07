const wordIntro1 = ["yoSpa"];
const wordIntro2 = ["estoySpa"];
const wordIntro3 = ["aquiSpa"];
const phrase1 = ["yoEstoyAqui"];
const wordIntro4 = ["alliSpa"];
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
let addAudio;

let wordForLoop;

// create divs for several icons

function createSeveralDivsIcon() {
  let parentSeveralWords = document.querySelector(".several-words");
  let divSubSeveralWords = document.createElement("div");
  divSubSeveralWords.setAttribute("class", "target-language");
  let aSubSeveralWords = document.createElement("a");
  aSubSeveralWords.setAttribute("href", "#");
  aSubSeveralWords.setAttribute("id", "play");
  let imgSeveralWords = document.createElement("img");
  imgSeveralWords.setAttribute("id", "icon-target-language");

  parentSeveralWords.appendChild(divSubSeveralWords);
  divSubSeveralWords.appendChild(aSubSeveralWords);
  aSubSeveralWords.appendChild(imgSeveralWords);
}

// configLesson(stepOne);
const configLesson = function(unit, wordIntro) {
  if (
    wordIntro === wordIntro1 ||
    wordIntro === wordIntro2 ||
    wordIntro === wordIntro3 ||
    wordIntro === wordIntro4
  ) {
    wordIntro.forEach(function(word) {
      wordForLoop = wordIntro;

      // writes the Spanish word
      const text = spanishGerman[unit][word][0];
      let natLanguage = document.getElementById("native-language");
      natLanguage.textContent = text;

      // shows icon of target language
      let srcIconWord = spanishGerman[unit][word][1].icon.getAttribute("src");
      let targetLanguage = document.getElementById("icon-target-language");
      targetLanguage.setAttribute("src", srcIconWord);

      // plays sound
      addAudio = function() {
        //e.preventDefault();
        spanishGerman[unit][word][1].audio.play();
      };
      linkPlay.addEventListener("click", addAudio);

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
  } else if (wordIntro === phrase1) {
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

      createSeveralDivsIcon();

      // // shows icon of target language
      // let srcIconWord = spanishGerman[unit][word][1].icon.getAttribute("src");
      // let targetLanguage = document.getElementById("icon-target-language");
      // targetLanguage.setAttribute("src", srcIconWord);

      // // plays sound
      // addAudio = function() {
      //   //e.preventDefault();
      //   spanishGerman[unit][word][1].audio.play();
      // };
      // linkPlay.addEventListener("click", addAudio);

      // // shows title / task, choose correct audio
      // const showTitleOptiones = spanishGerman[unit][word][4];
      // let chooseAudio = document.getElementById("choose-correct-audio");
      // chooseAudio.textContent = showTitleOptiones;
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
  }
}

const nextWord = document.getElementById("next-word");
nextWord.onclick = function() {
  linkPlay.removeEventListener("click", addAudio);

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

  configLesson("unitOne", goToNextWord());
};
