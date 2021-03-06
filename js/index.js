const wordIntro1 = ["yoSpa"];
const wordIntro2 = ["estoySpa"];
const wordIntro3 = ["aquiSpa"];
const phrase1 = ["phraseYoEstoyAqui"];
const wordIntro4 = ["alliSpa"];
const phrase2 = ["phraseYoEstoyAlli"];
const wordIntro5 = ["tuSpa"];
const wordIntro6 = ["estasSpa"];
const phrase3 = ["phraseTuEstasAqui"];
const phrase4 = ["phraseTuEstasAlli"];
const wordIntro7 = ["ySpa"];
const phrase5 = ["phraseYoEstoyAquiYtuEstasAlli"];
const wordIntro8 = ["tambienSpa"];
const phrase6 = ["phraseYoTambienEstoyAqui"];
const phrase7 = ["phraseYoEstoyAquiQuestion"];
const phrase8 = ["phraseTuEstasAquiQuestion"];
const phrase9 = ["phraseTuTambienEstasAlliQuestion"];
const wordIntro9 = ["peroSpa"];
const phrase10 = ["phraseYoEstoyAquiPeroTuEstasAlli"];
const wordIntro10 = ["siSpa"];
const phrase11 = ["phraseTuEstasAquiSiYoEstoyAquiDialogue"];
const wordIntro11 = ["noSpaOne"];
const phrase12 = ["phraseTuEstasAlliNoDialogue"];
const wordIntro12 = ["noSpaTwo"];
const phrase13 = ["phraseYoNoEstoyAqui"];
const phrase14 = ["phraseTuNoEstasAlliQuestion"];
const wordIntro13 = ["oSpa"];
const phrase15 = ["phraseTuEstasAquiOTuEstasAlliQuestion"];
const wordIntro14 = ["elSpa"];
const phrase16 = ["phraseElYYo"];
const wordIntro15 = ["ellaSpa"];
const phrase17 = ["phraseEllaOElQuestion"];
const wordIntro16 = ["estaSpa"];
const phrase18 = ["phraseElEstaAlliPeroYoNoEstoyAlli"];
const phrase19 = ["phraseEllaTambienEstaAqui"];
const wordIntro17 = ["holaSpa"];
const phrase20 = [
  "phraseHolaElEstaAquiHolaNoElNoEstaAquiPeroEllaEstaAquiDialogue"
];

let superCount = 0;

// var for audio spot
const linkPlay = document.getElementById("play");
// este siguiente Id no esta creado es por eso que no encuentra nada
const linkPlaySevDivs = document.getElementById("play-sev-divs");
const linkPlayThreeOptionsA = document.getElementById("sound-a");
const linkPlayThreeOptionsB = document.getElementById("sound-b");
const linkPlayThreeOptionsC = document.getElementById("sound-c");
const linkPlayThreeOptionsABtn = document.getElementById("btn-check-a");
const linkPlayThreeOptionsBBtn = document.getElementById("btn-check-b");
const linkPlayThreeOptionsCBtn = document.getElementById("btn-check-c");
const pausePage = document.getElementById("recap-words");
const btnPrevWord = document.getElementById("prev-word");

let addAudio;
let addAudioSevDivs;
let addAudioThreeOptions1;
let addAudioThreeOptions2;
let shufflePhrase;
let numAllWords;
let numAllIcons;

let wordForLoop;

// pick a random audio
function pickRandom() {
  var audioName = audioGer[Math.floor(Math.random() * audioGer.length)];
  return audioName;
}

let arrayThreeAudios = [];
let recapWords = [];

// shuffle
function shuffle(array) {
  array.sort(function() {
    return Math.random() - 0.5;
  });
}

// change icon
function changeIcon(event) {
  let originSrc = event.path[0].attributes[2].nodeValue;
  let srcNum = originSrc.indexOf("img");
  let relativePathOfOriginSrc = originSrc.substring(srcNum);
  let createdPhrase = document.getElementsByClassName("correct-phrase");
  let blank = createdPhrase[0].children[superCount].childNodes[1];
  blank.src = relativePathOfOriginSrc;
  event.path[1].removeChild(event.path[1].childNodes[1]);

  const phraseIsCorrect = document.getElementById("btn-check");
  phraseIsCorrect.onclick = function() {
    if (superCount === numAllWords)
      spanishGerman.unitOne[wordForLoop][5][0].audio.play(); // sonido
  };
}

// create divs for several icons
function createSeveralDivsIcon(words) {
  let parentSeveralWords = document.querySelector(".several-words");
  let content = "";
  let parentCorrectPhrase = document.querySelector(".correct-phrase");
  let contentCorrectPhrase = "";

  words.forEach(function(word) {
    content += `
    <div class="target-language-phrase">
      <img class="iconWord box-shadow-phrase" id="${word.text}" src="${
      word.icon.src
    }"/>
    </div>
    `;
    contentCorrectPhrase += `
      <div class="target-language">
        <img class="icon-target-language" src="img/white-placeholder.png" />
      </div>
    `;
  });
  parentSeveralWords.innerHTML = content;
  parentCorrectPhrase.innerHTML = contentCorrectPhrase;

  let changeIcons = document.getElementsByClassName("iconWord");
  numAllWords = changeIcons.length;
  for (let i = 0; i < numAllWords; i++) {
    changeIcons[i].addEventListener("click", event => {
      let originId = event.currentTarget.id;
      let solutionID = spanishGerman.unitOne[wordForLoop][4][superCount].text;

      if (originId === solutionID) {
        changeIcon(event);
        superCount += 1;
      }
    });
  }
}

// add icons to pause-page
function addIconToPausePage(recapWords) {
  let totalIcons = "";
  recapWords.forEach(function(pic) {
    totalIcons += `
      <div class="target-language-phrase20">
        <img class="test box-shadow-phrase" src="${pic.icon.src}" id="${
      pic.text
    }" />
      </div>
    `;
  });
  pausePage.innerHTML = totalIcons;

  let playRecapWord = document.getElementsByClassName("test");
  numAllIcons = playRecapWord.length;
  for (let k = 0; k < numAllIcons; k++) {
    playRecapWord[k].addEventListener("click", event => {
      let recapIconId = event.currentTarget.id;
      audioGer.forEach(function(word) {
        if (word.text === recapIconId) {
          word.audio.play();
        }
      });
    });
  }
}
// configLesson(stepOne);
const configLesson = function(unit, wordIntro) {
  if (
    wordIntro[0] === wordIntro1[0] ||
    wordIntro[0] === wordIntro2[0] ||
    wordIntro[0] === wordIntro3[0] ||
    wordIntro[0] === wordIntro4[0] ||
    wordIntro[0] === wordIntro5[0] ||
    wordIntro[0] === wordIntro6[0] ||
    wordIntro[0] === wordIntro7[0] ||
    wordIntro[0] === wordIntro8[0] ||
    wordIntro[0] === wordIntro9[0] ||
    wordIntro[0] === wordIntro10[0] ||
    wordIntro[0] === wordIntro11[0] ||
    wordIntro[0] === wordIntro12[0] ||
    wordIntro[0] === wordIntro13[0] ||
    wordIntro[0] === wordIntro14[0] ||
    wordIntro[0] === wordIntro15[0] ||
    wordIntro[0] === wordIntro16[0] ||
    wordIntro[0] === wordIntro17[0]
  ) {
    wordIntro.forEach(function(word) {
      wordForLoop = wordIntro;

      // NOT show main check btn
      let hideShowMainCheck = document.querySelector("#btn-check");
      hideShowMainCheck.style.display = "none";

      // show task div
      let hideShowTaskDiv = document.querySelector(".task");
      hideShowTaskDiv.style.display = "block";

      // show hints div
      let hintsDivHideShow = document.querySelector(".hints");
      hintsDivHideShow.style.display = "block";

      // shows div element
      document.querySelector(".target-language").style.display = "block";

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
        [addAudioThreeOptions1, "UPS"],
        [addAudioThreeOptions2, "UPS"],
        [addAudio, "SÍ"]
      ];
      shuffle(arrayThreeAudios);

      // plays two incorrect audios
      linkPlayThreeOptionsA.addEventListener("click", arrayThreeAudios[0][0]);
      linkPlayThreeOptionsABtn.onclick = function() {
        linkPlayThreeOptionsABtn.textContent = arrayThreeAudios[0][1];
      };
      linkPlayThreeOptionsB.addEventListener("click", arrayThreeAudios[1][0]);
      linkPlayThreeOptionsBBtn.onclick = function() {
        linkPlayThreeOptionsBBtn.textContent = arrayThreeAudios[1][1];
      };
      // plays sound, three options, correct sound 3
      linkPlayThreeOptionsC.addEventListener("click", arrayThreeAudios[2][0]);
      linkPlayThreeOptionsCBtn.onclick = function() {
        linkPlayThreeOptionsCBtn.textContent = arrayThreeAudios[2][1];
      };

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
        singleSrc.src = "./img/llama.png";
      });

      // show hints
      let additionalInfo = document.getElementById("info-or-phrase");
      additionalInfo.textContent = spanishGerman[unit][word][5];

      // add word to recap-list pause-page
      let addWord = spanishGerman[unit][word][1];
      recapWords.forEach(function(e) {
        if (e.text === addWord.text) {
          for (var i = 0; i < recapWords.length; i++) {
            if (recapWords[i] === addWord) {
              recapWords.splice(i, 1);
            }
          }
        }
      });
      recapWords.push(spanishGerman[unit][word][1]);
      addIconToPausePage(recapWords);
    });
  } else if (
    wordIntro === phrase1 ||
    wordIntro === phrase2 ||
    wordIntro === phrase3 ||
    wordIntro === phrase4 ||
    wordIntro === phrase5 ||
    wordIntro === phrase6 ||
    wordIntro === phrase7 ||
    wordIntro === phrase8 ||
    wordIntro === phrase9 ||
    wordIntro === phrase10 ||
    wordIntro === phrase11 ||
    wordIntro === phrase12 ||
    wordIntro === phrase13 ||
    wordIntro === phrase14 ||
    wordIntro === phrase15 ||
    wordIntro === phrase16 ||
    wordIntro === phrase17 ||
    wordIntro === phrase18 ||
    wordIntro === phrase19 ||
    wordIntro === phrase20
  ) {
    wordIntro.forEach(function(word) {
      wordForLoop = wordIntro;

      //  show main check btn
      let hideShowMainCheck = document.querySelector("#btn-check");
      hideShowMainCheck.style.display = "block";

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

      shufflePhrase = spanishGerman[unit][word][3];
      shuffle(shufflePhrase);

      createSeveralDivsIcon(shufflePhrase);
    });
  }
};

// cons
function goToPrevWord() {
  if (wordForLoop === phrase20) {
    return wordIntro17;
  } else if (wordForLoop === wordIntro17) {
    return phrase19;
  } else if (wordForLoop === phrase19) {
    return phrase18;
  } else if (wordForLoop === phrase18) {
    return wordIntro16;
  } else if (wordForLoop === wordIntro16) {
    return phrase17;
  } else if (wordForLoop === phrase17) {
    return wordIntro15;
  } else if (wordForLoop === wordIntro15) {
    return phrase16;
  } else if (wordForLoop === phrase16) {
    return wordIntro14;
  } else if (wordForLoop === wordIntro14) {
    return phrase15;
  } else if (wordForLoop === phrase15) {
    return wordIntro13;
  } else if (wordForLoop === wordIntro13) {
    return phrase14;
  } else if (wordForLoop === phrase14) {
    return phrase13;
  } else if (wordForLoop === phrase13) {
    return wordIntro12;
  } else if (wordForLoop === wordIntro12) {
    return phrase12;
  } else if (wordForLoop === phrase12) {
    return wordIntro11;
  } else if (wordForLoop === wordIntro11) {
    return phrase11;
  } else if (wordForLoop === phrase11) {
    return wordIntro10;
  } else if (wordForLoop === wordIntro10) {
    return phrase10;
  } else if (wordForLoop === phrase10) {
    return wordIntro9;
  } else if (wordForLoop === wordIntro9) {
    return phrase9;
  } else if (wordForLoop === phrase9) {
    return phrase8;
  } else if (wordForLoop === phrase8) {
    return phrase7;
  } else if (wordForLoop === phrase7) {
    return phrase6;
  } else if (wordForLoop === phrase6) {
    return wordIntro8;
  } else if (wordForLoop === wordIntro8) {
    return phrase5;
  } else if (wordForLoop === phrase5) {
    return wordIntro7;
  } else if (wordForLoop === wordIntro7) {
    return phrase4;
  } else if (wordForLoop === phrase4) {
    return phrase3;
  } else if (wordForLoop === phrase3) {
    return wordIntro6;
  } else if (wordForLoop === wordIntro6) {
    return wordIntro5;
  } else if (wordForLoop === wordIntro5) {
    return phrase2;
  } else if (wordForLoop === phrase2) {
    return wordIntro4;
  } else if (wordForLoop === wordIntro4) {
    return phrase1;
  } else if (wordForLoop === phrase1) {
    return wordIntro3;
  } else if (wordForLoop === wordIntro3) {
    return wordIntro2;
  } else if (wordForLoop === wordIntro2) {
    return wordIntro1;
  } else if (wordForLoop === wordIntro1) {
    return wordIntro1;
  }
}

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
  } else if (wordForLoop === wordIntro6) {
    return phrase3;
  } else if (wordForLoop === phrase3) {
    return phrase4;
  } else if (wordForLoop === phrase4) {
    return wordIntro7;
  } else if (wordForLoop === wordIntro7) {
    return phrase5;
  } else if (wordForLoop === phrase5) {
    return wordIntro8;
  } else if (wordForLoop === wordIntro8) {
    return phrase6;
  } else if (wordForLoop === phrase6) {
    return phrase7;
  } else if (wordForLoop === phrase7) {
    return phrase8;
  } else if (wordForLoop === phrase8) {
    return phrase9;
  } else if (wordForLoop === phrase9) {
    return wordIntro9;
  } else if (wordForLoop === wordIntro9) {
    return phrase10;
  } else if (wordForLoop === phrase10) {
    return wordIntro10;
  } else if (wordForLoop === wordIntro10) {
    return phrase11;
  } else if (wordForLoop === phrase11) {
    return wordIntro11;
  } else if (wordForLoop === wordIntro11) {
    return phrase12;
  } else if (wordForLoop === phrase12) {
    return wordIntro12;
  } else if (wordForLoop === wordIntro12) {
    return phrase13;
  } else if (wordForLoop === phrase13) {
    return phrase14;
  } else if (wordForLoop === phrase14) {
    return wordIntro13;
  } else if (wordForLoop === wordIntro13) {
    return phrase15;
  } else if (wordForLoop === phrase15) {
    return wordIntro14;
  } else if (wordForLoop === wordIntro14) {
    return phrase16;
  } else if (wordForLoop === phrase16) {
    return wordIntro15;
  } else if (wordForLoop === wordIntro15) {
    return phrase17;
  } else if (wordForLoop === phrase17) {
    return wordIntro16;
  } else if (wordForLoop === wordIntro16) {
    return phrase18;
  } else if (wordForLoop === phrase18) {
    return phrase19;
  } else if (wordForLoop === phrase19) {
    return wordIntro17;
  } else if (wordForLoop === wordIntro17) {
    return phrase20;
  } else if (wordForLoop === phrase20) {
    return phrase20;
  }
}

const prevWord = document.getElementById("prev-word");
const nextWord = document.getElementById("next-word");

prevWord.onclick = function() {
  cleanPage();
  configLesson("unitOne", goToPrevWord());
};

nextWord.onclick = function() {
  cleanPage();
  configLesson("unitOne", goToNextWord());
};
