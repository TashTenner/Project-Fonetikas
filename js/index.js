const wordIntroOne = ["yoSpa"];
const wordIntroTwo = ["estoySpa"];
const wordIntroThree = ["aquiSpa"];
const wordIntroFour = ["alliSpa"];

// configLesson(stepOne);
const configLesson = function(unit, wordIntro) {
  wordIntro.forEach(function(word) {
    const text = spanishGerman[unit][word][0];
    let ppp = document.getElementById("native-language");
    ppp.textContent = text;

    let srcIconWord = spanishGerman[unit][word][1].icon.getAttribute("src");
    let targetLanguage = document.getElementById("icon-target-language");
    targetLanguage.setAttribute("src", srcIconWord);

    document.getElementById("play").addEventListener("click", function(e) {
      e.preventDefault();
      spanishGerman[unit][word][1].audio.play();
    });
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
