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
  },
  createPhrase: {
    spanish: "¿Cómo se crea la frase?"
  }
};

const spanishGerman = {
  unitOne: {
    yoSpa: [
      "yo",
      ichGer,
      "Unidad 1, palabra 1 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    estoySpa: [
      "estoy",
      binGer,
      "Unidad 1, palabra 2 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    aquiSpa: [
      "aquí",
      hierGer,
      "Unidad 1, palabra 3 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    yoEstoyAqui: [
      listenAudio.createPhrase.spanish,
      "Yo estoy aquí.",
      "Unidad 1, frase 1 de <number>",
      [ichGer, binGer, hierGer]
      //audio complete phrase
    ],
    alliSpa: [
      "allí",
      dortGer,
      "Unidad 1, palabra 4 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    yoEstoyAlli: [
      listenAudio.createPhrase.spanish,
      "Yo estoy allí.",
      "Unidad 1, frase 2 de <number>",
      [ichGer, binGer, dortGer]
      //audio complete phrase
    ],
    tuSpa: [
      "tú",
      duGer,
      "Unidad 1, palabra 5 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    estasSpa: [
      "estás",
      bistGer,
      "Unidad 1, palabra 6 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Tu estas aqui
    // Tu estas alli
    ySpa: [
      "y",
      undGer,
      "Unidad 1, palabra 7 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Yo estoy aqui y tú estas alli.
    tambienSpa: [
      "también",
      auchGer,
      "Unidad 1, palabra 8 de 17",
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
      "Unidad 1, palabra 9 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Yo estoy aquí pero tu estás allí.
    siSpa: [
      "sí",
      jaGer,
      "Unidad 1, palabra 10 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // ¿Estas aqui? - Sí, estoy aquí.
    noSpaOne: [
      "no(1)",
      neinGer,
      "Unidad 1, palabra 11 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // ¿Estas allí? - No.
    noSpaTwo: [
      "no(2)",
      nichtGer,
      "Unidad 1, palabra 12 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // negation, syntax
    oSpa: [
      "o",
      oderGer,
      "Unidad 1, palabra 13 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // ¿Estás aquí o estás alli?
    elSpa: [
      "él",
      erGer,
      "Unidad 1, palabra 14 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // El y yo.
    ellaSpa: [
      "ella",
      sieGer,
      "Unidad 1, palabra 15 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // Ella o él.
    estaSpa: [
      "está",
      istGer,
      "Unidad 1, palabra 16 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    // El está alli pero yo no estoy alli.
    // Ella tambien está aqui.
    holaSpa: [
      "hola",
      halloGer,
      "Unidad 1, palabra 17 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ]
    // Hola, el está auqí? - Hola! No, el no está aquí pero ella está aqui.
  }
  // unitTwo: {
  //   meLlamoSpa: ["me llamo", heisseGer]
  // }
};
