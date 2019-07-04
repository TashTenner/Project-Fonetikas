class Word {
  constructor(text, icon, audio) {
    this.text = text;
    this.audio = new Audio();
    this.audio.src = audio;
    this.icon = new Image();
    this.icon.src = icon;
  }
  play() {}
}

let ich = new Word("ich", "img/ampersand.png", "audio/rec.m4a");

const spanishGerman = {
  unitOne: {
    yo: ["yo", ich]
    //   estoy: ["estoy", bin],
    //   aquí: ["aquí", hier],
    //   allí: ["allí", dort],
    //   tú: ["tú", du],
    //   estás: ["estás", bist],
    //   y: ["y", und],
    //   también: ["también", auch],
    //   pero: ["pero", aber],
    //   sí: ["sí", ja],
    //   noOne: ["no(1)", nein],
    //   noTwo: ["no(2)", nicht],
    //   o: ["o", oder],
    //   él: ["él", er],
    //   ella: ["ella", sie],
    //   está: ["está", ist],
    //   hola: ["hola", hallo]
    // },
    // unitTwo: {
    //   meLlamo: ["me llamo", heiße]
  }
};

let baseWord = spanishGerman.unitOne.yo[0];
console.log(baseWord);
let ppp = document.getElementById("native-language");
console.log(ppp.innerText);
//ppp.textContent(baseWord);

// que me agarre el ícono y lo muestre
let srcIconWord = ich.icon.getAttribute("src");
let targetLanguage = document.getElementById("icon-target-language");
targetLanguage.setAttribute("src", srcIconWord);

// que haga play al sonido de la palabra
document.getElementById("play").addEventListener("click", function(e) {
  e.preventDefault();
  ich.audio.play();
});
// no comprendo bien lo de preventDefault
