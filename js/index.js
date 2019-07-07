const wordIntro1 = ["yoSpa"];
const wordIntro2 = ["estoySpa"];
const wordIntro3 = ["aquiSpa"];
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

// configLesson(stepOne);
const configLesson = function(unit, wordIntro) {
  wordIntro.forEach(function(word) {
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
      // const idPlayRmvAdd = document.getElementById("play");
      // idPlayRmvAdd.removeAttribute("id");
      // console.log(idPlayRmvAdd);
      // idPlayRmvAdd.setAttribute("id", "play");

      //e.preventDefault();
      spanishGerman[unit][word][1].audio.play();
    };
    linkPlay.addEventListener("click", addAudio);

    //test.removeEventListener("click", addAudio);

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
const nextWord = document.getElementById("next-word");
nextWord.onclick = function() {
  linkPlay.removeEventListener("click", addAudio);
  configLesson("unitOne", wordIntro2);
};

// const wordIntro1 = ["yoSpa"];
// const wordIntro2 = ["estoySpa"];
// const wordIntro3 = ["aquiSpa"];
// const wordIntro4 = ["alliSpa"];
// const wordIntro5 = ["tuSpa"];
// const wordIntro6 = ["estasSpa"];
// const wordIntro7 = ["ySpa"];
// const wordIntro8 = ["tambienSpa"];
// const wordIntro9 = ["peroSpa"];
// const wordIntro10 = ["siSpa"];
// const wordIntro11 = ["noSpaOne"];
// const wordIntro12 = ["noSpaTwo"];
// const wordIntro13 = ["oSpa"];
// const wordIntro14 = ["elSpa"];
// const wordIntro15 = ["ellaSpa"];
// const wordIntro16 = ["estaSpa"];
// const wordIntro17 = ["holaSpa"];
