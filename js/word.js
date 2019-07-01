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

// German words
// lesson 1
let ich = new Word("ich");
let bin = new Word("bin");
let hier = new Word("hier");
let dort = new Word("dort");
let du = new Word("du");
let bist = new Word("bist");
let und = new Word("und");
let auch = new Word("auch");
let aber = new Word("aber");
let ja = new Word("ja");
let nein = new Word("nein");
let oder = new Word("oder");
let er = new Word("er");
let sie = new Word("sie");
let ist = new Word("ist");
let hallo = new Word("hallo");

// Spanish words
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
let portugalEs = new Word("portugalEs");
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

// German words
// lesson 2
let heiße = new Word("heiße");
let heißt = new Word("heißt");
let heißt = new Word("heißt");
let wie = new Word("wie");
let das = new Word("das");
let deutschland = new Word("deutschland");
let österreich = new Word("österreich");
let spanien = new Word("spanien");
let frankreich = new Word("frankreich");
let englandDt = new Word("englandDt");
let portugalDt = new Word("portugalDt");
let welches = new Word("welches");
let land = new Word("land");
let komme = new Word("komme");
let kommst = new Word("kommst");
let kommt = new Word("kommt");
let aus = new Word("aus");
let woher = new Word("woher");
let freut = new Word("freut");
let mich = new Word("mich");

// Spanish words
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

// German words
// lesson 3
let der = new Word("der");
let die = new Word("die");
let apfel = new Word("apfel");
let plátano = new Word("plátano");
let brot = new Word("brot");
let habe = new Word("habe");
let hast = new Word("hast");
let hat = new Word("hat");
let den = new Word("den");
let wo = new Word("wo");

// Spanish words
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
// lesson 4
let rot = new Word("rojo");
let grün = new Word("grün");
let gelb = new Word("gelb");
let braun = new Word("braun");
let weiß = new Word("weiß");
// faltan los sufijos de los colores
let ein = new Word("ein");
let eine = new Word("eine");
let einen = new Word("einen");
let kein = new Word("kein");
let keine = new Word("keine");
let keinen = new Word("keinen");
let farbe = new Word("farbe");
// De qué color es ... - lógica alemana: Qué color tiene ...

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

>>1.1. parts of speech - all come from class WORD
>>1.1.6.1.3.3. Third-person neuter/inanimate singular = does not exist
*/
