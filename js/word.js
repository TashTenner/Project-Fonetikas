class Word {
  constructor(text) {
    // falta en el constructor "audio", "icon"
    this.text = text;
    // this.audio = audio;
    // this.icon = icon;
  }
  //play() {
  //plays this.audio
  //}
}

// Spanish words
// lesson 1
let yo = new Word("yo");
let estoy = new Word("estoy");
let aquí = new Word("estoy");
let allí = new Word("allí");
let tú = new Word("tú");
let estás = new Word("estás");
let y = new Word("y");
let también = new Word("también");
let pero = new Word("pero");
let sí = new Word("sí");
let no = new Word("no");
let o = new Word("o");
let él = new Word("él");
let ella = new Word("ella");
let está = new Word("está");
let hola = new Word("hola");

// lesson 2
let me = new Word("me");
let llamo = new Word("llamo");
let te = new Word("te");
let llamas = new Word("llamas");
let se = new Word("se");
let llama = new Word("llama");
let cómo = new Word("cómo");
let esto = new Word("esto");
let es = new Word("es");
let alemania = new Word("alemania");
let austria = new Word("austria");
let españa = new Word("españa");
let francia = new Word("francia");
let inglaterra = new Word("inglaterra");
let portugal = new Word("portugal");
let qué = new Word("qué");
let país = new Word("país");
let este = new Word("este");
let vengo = new Word("vengo");
let vienes = new Word("vienes");
let viene = new Word("viene");
let de = new Word("de");
let dónde = new Word("dónde");
let encantado = new Word("encantado");
let encantada = new Word("encantada");

// lesson 3
let el = new Word("el");
let la = new Word("la");
let manzana = new Word("manzana");
let plátano = new Word("plátano");
let pan = new Word("pan");
let tengo = new Word("tengo");
let tienes = new Word("tienes");
let tiene = new Word("tiene");
// missing German words: "den", "wo"

// lesson 4
let rojo = new Word("rojo");
let roja = new Word("roja");
let verde = new Word("verde");
let amarillo = new Word("amarillo");
let amarilla = new Word("amarilla");
let marrón = new Word("marrón");
let blanco = new Word("blanco");
let blanca = new Word("blanca");
let un = new Word("un");
let una = new Word("una");
let ningún = new Word("ningún");
let ninguna = new Word("ninguna");
let color = new Word("color");
// De qué color es ... - lógica alemana: Qué color tiene ...

// German words
let ich = new Word("ich");
let nein = new Word("nein");

/* if base Spanish and target language German:
load object spanishGerman 
*/

const defaultSpanish = {
  morphology: {
    partsOfSpeech: [
      {
        noun: [{}],
        verb: [
          {
            auxiliaryVerb: [{ estar: [estoy, estás, está] }]
          }
        ],
        adjective: [{}],
        adverb: [{}],
        article: [{}],
        pronoun: [
          {
            personalPronoun: [
              { firstPersonSingular: yo },
              { secondPersonSingular: tú },
              {
                thirdPersonSingular: [{ masculine: él }, { feminine: ella }]
              },
              { firstPersonPlural: "" },
              { secondPersonPlural: "" },
              { thirdPersonPlural: "" }
            ]
          }
        ],
        preposition: [{}],
        conjunction: [{}],
        numeral: [{}],
        interjection: [{}]
      }
    ]
  },
  phoneticsPhonology: {},
  semantics: {},
  syntax: {},
  graphemics: {}
};

console.log(
  defaultSpanish.morphology.partsOfSpeech[0].pronoun[0].personalPronoun[0]
    .firstPersonSingular.text
);
// output: "yo"

/* 
Framework of a language:
... > Indoeuropean Languages > Latin Languages > Spanish, French, Italian, etc

Framework of Spanish - structure of the Spanish language: const Spanish = {}

change strings in const Spanish to already existing objects

>>1.1. parts of speech - all come from class WORD
>>1.1.6.1.3.3. Third-person neuter/inanimate singular = does not exist
*/
