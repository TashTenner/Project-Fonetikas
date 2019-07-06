/* if base Spanish and target language German:
load object spanishGerman 
*/

const listenAudio = {
  wordIntro: {
    spanish: "¡Haz click en el ícono para escuchar el audio!",
    english: "click here",
    german: "click hier"
  },
  threeOptionsAudios: {
    spanish: "¿Cuál de las tres opciones es la pronuncación correcta?"
  }
};

const spanishGerman = {
  unitOne: {
    yoSpa: [
      "yo",
      ichGer,
      "Unit 1, word 1 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    estoySpa: [
      "estoy",
      binGer,
      "Unit 1, word 2 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    aquiSpa: [
      "aquí",
      hierGer,
      "Unit 1, word 3 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // create a phrase "yo estoy aqui"
    alliSpa: [
      "allí",
      dortGer,
      "Unit 1, word 4 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // create a phrase "yo estoy alli"
    tuSpa: [
      "tú",
      duGer,
      "Unit 1, word 5 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    estasSpa: [
      "estás",
      bistGer,
      "Unit 1, word 6 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Tu estas aqui
    // Tu estas alli
    ySpa: [
      "y",
      undGer,
      "Unit 1, word 7 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Yo estoy aqui y tú estas alli.
    tambienSpa: [
      "también",
      auchGer,
      "Unit 1, word 8 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Yo tambien estoy aquí. ojo syntax
    // ¿Estoy (yo) aquí? syntax question, intonation, "null-subject" Spa
    // ¿Estas aqui?
    // ¿Estas tambien alli?
    peroSpa: [
      "pero",
      aberGer,
      "Unit 1, word 9 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Yo estoy aquí pero tu estás allí.
    siSpa: [
      "sí",
      jaGer,
      "Unit 1, word 10 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // ¿Estas aqui? - Sí, estoy aquí.
    noSpaOne: [
      "no(1)",
      neinGer,
      "Unit 1, word 11 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // ¿Estas allí? - No.
    noSpaTwo: [
      "no(2)",
      nichtGer,
      "Unit 1, word 12 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // negation, syntax
    oSpa: [
      "o",
      oderGer,
      "Unit 1, word 13 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // ¿Estás aquí o estás alli?
    elSpa: [
      "él",
      erGer,
      "Unit 1, word 14 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // El y yo.
    ellaSpa: [
      "ella",
      sieGer,
      "Unit 1, word 15 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Ella o él.
    estaSpa: [
      "está",
      istGer,
      "Unit 1, word 16 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // El está alli pero yo no estoy alli.
    // Ella tambien está aqui.
    holaSpa: [
      "hola",
      halloGer,
      "Unit 1, word 17 from 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ]
    // Hola, el está auqí? - Hola! No, el no está aquí pero ella está aqui.
  }
  // unitTwo: {
  //   meLlamoSpa: ["me llamo", heisseGer]
  // }
};
