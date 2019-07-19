// buttons
const btnStartGer = document.getElementById("hide-start-ger");
btnStartGer.onclick = function() {
  const landingDiv = document.getElementById("start-page");
  landingDiv.style.visibility = "hidden";
  configLesson("unitOne", wordIntro1);
};

// const btnStartHeb = document.getElementById("hide-start-heb");
// btnStartHeb.onclick = function() {
//   const landingDiv = document.getElementById("start-page");
//   landingDiv.style.visibility = "hidden";
//   configLesson("unitOne", wordIntro1);
// };

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
