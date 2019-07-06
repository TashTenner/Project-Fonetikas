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

// configLesson(stepOne);
const configLesson = function(unit, wordIntro) {
  wordIntro.forEach(function(word) {
    const text = spanishGerman[unit][word][0];
    let ppp = document.getElementById("native-language");
    ppp.textContent = text;

    let srcIconWord = spanishGerman[unit][word][1].icon.getAttribute("src");
    let targetLanguage = document.getElementById("icon-target-language");
    targetLanguage.setAttribute("src", srcIconWord);

    const addAudio = function() {
      // e.preventDefault();
      spanishGerman[unit][word][1].audio.play();
    };

    document.getElementById("play").removeEventListener("click", addAudio);
    document.getElementById("play").addEventListener("click", addAudio);
  });
};

// var el = document.getElementById("btn-check");
// if (el.onclick) {
//   configLesson();
// }

// buttons
const btnStart = document.getElementById("hide-start");
btnStart.onclick = function() {
  const landingDiv = document.getElementById("start-page");
  landingDiv.style.visibility = "hidden";
};

// que la function tb me cargue configLesson('unitOne', stepOne)
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
