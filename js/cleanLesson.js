// clean lesson
function cleanPage() {
  linkPlay.removeEventListener("click", addAudio);

  linkPlayThreeOptionsA.removeEventListener("click", arrayThreeAudios[0][0]);
  linkPlayThreeOptionsB.removeEventListener("click", arrayThreeAudios[1][0]);
  linkPlayThreeOptionsC.removeEventListener("click", arrayThreeAudios[2][0]);

  linkPlayThreeOptionsABtn.textContent = "check";
  linkPlayThreeOptionsBBtn.textContent = "check";
  linkPlayThreeOptionsCBtn.textContent = "check";

  // NOT show =
  let showEqualSign = document.getElementById("equal-sign");
  showEqualSign.textContent = "";

  // NOT show icon of target language
  let targetLanguage = document.getElementById("icon-target-language");
  targetLanguage.setAttribute("src", "");

  // NOT show three buttons of audio options
  let hideShowTaskDiv = document.querySelector(".task");
  hideShowTaskDiv.style.display = "none";

  // NOT show hints div
  let hintsDivHideShow = document.querySelector(".hints");
  hintsDivHideShow.style.display = "none";

  // NOT show title / task, choose correct audio
  let chooseAudio = document.getElementById("choose-correct-audio");
  chooseAudio.textContent = "";

  // NOT show title / task, what to do
  let imperativePhrase = document.getElementById("imperative-title");
  imperativePhrase.textContent = "";

  // NOT write the Spanish phrase
  let natLanguage = document.getElementById("native-language");
  natLanguage.textContent = "";

  // NOT shows unit, word index
  let unitWordCount = document.getElementById("index-unit");
  unitWordCount.textContent = "";

  // NOT show icon of target language
  const deleteChildNodes = document.getElementsByClassName("several-words")[0];

  if (deleteChildNodes.firstChild) {
    while (deleteChildNodes.firstChild) {
      deleteChildNodes.removeChild(deleteChildNodes.firstChild);
    }
  }

  // NOT show white-placeholder
  const deleteChildNodesCorrectPhrase = document.getElementsByClassName(
    "correct-phrase"
  )[0];

  if (deleteChildNodesCorrectPhrase.firstChild) {
    while (deleteChildNodesCorrectPhrase.firstChild) {
      deleteChildNodesCorrectPhrase.removeChild(
        deleteChildNodesCorrectPhrase.firstChild
      );
    }
  }

  document.querySelector(".target-language").style.display = "none";
  superCount = 0;
}
