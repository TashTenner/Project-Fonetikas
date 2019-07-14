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
      [ichGer, binGer, hierGer],
      [ichGer, binGer, hierGer], // solution
      [ichBinHierGer]
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
      [ichGer, binGer, dortGer],
      [ichGer, binGer, dortGer] //solution
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
    tuEstasAqui: [
      listenAudio.createPhrase.spanish,
      "Tú estas aquí.",
      "Unidad 1, frase 3 de <number>",
      [duGer, bistGer, hierGer],
      [duGer, bistGer, hierGer] //solution
      //audio complete phrase
    ],
    tuEstasAlli: [
      listenAudio.createPhrase.spanish,
      "Tú estas allí.",
      "Unidad 1, frase 4 de <number>",
      [duGer, bistGer, dortGer],
      [duGer, bistGer, dortGer] //solution
      //audio complete phrase
    ],
    ySpa: [
      "y",
      undGer,
      "Unidad 1, palabra 7 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    yoEstoyAquiYtuEstasAlli: [
      listenAudio.createPhrase.spanish,
      "Yo estoy aquí y tú estas allí.",
      "Unidad 1, frase 5 de <number>",
      [ichGer, binGer, hierGer, undGer, duGer, bistGer, dortGer],
      [ichGer, binGer, hierGer, undGer, duGer, bistGer, dortGer] //solution
      //audio complete phrase
    ],
    tambienSpa: [
      "también",
      auchGer,
      "Unidad 1, palabra 8 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    yoTambienEstoyAqui: [
      listenAudio.createPhrase.spanish,
      "Yo también estoy aquí. Sintaxis alemana: Yo estoy también aquí.",
      "Unidad 1, frase 6 de <number>",
      [ichGer, binGer, auchGer, hierGer],
      [ichGer, binGer, auchGer, hierGer] //solution
      //audio complete phrase
    ],
    yoEstoyAquiQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Yo estoy aquí? Sintaxis alemana: ¿Estoy yo aquí?",
      "Unidad 1, frase 7 de <number>",
      [binGer, ichGer, hierGer],
      [binGer, ichGer, hierGer] //solution
      //audio complete phrase
      //syntax question, intonation, "null-subject" Spa
    ],

    tuEstasAquiQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Tú estás aquí? Sintaxis alemana: ¿Estás tú aquí?",
      "Unidad 1, frase 8 de <number>",
      [bistGer, duGer, hierGer],
      [bistGer, duGer, hierGer] //solution
      //audio complete phrase
      //syntax question, intonation, "null-subject" Spa
    ],
    tuTambienEstasAlliQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Tú tabmién estás allí? Sintaxis alemana: ¿Estás tú también allí?",
      "Unidad 1, frase 9 de <number>",
      [bistGer, duGer, auchGer, dortGer],
      [bistGer, duGer, auchGer, dortGer] //solution
      //audio complete phrase
      //syntax question, intonation, "null-subject" Spa
    ],
    peroSpa: [
      "pero",
      aberGer,
      "Unidad 1, palabra 9 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    yoEstoyAquiPeroTuEstasAlli: [
      listenAudio.createPhrase.spanish,
      "Yo estoya aquí pero tú estás allí.",
      "Unidad 1, frase 10 de <number>",
      [ichGer, binGer, hierGer, aberGer, duGer, bistGer, dortGer],
      [ichGer, binGer, hierGer, aberGer, duGer, bistGer, dortGer] //solution
      //audio complete phrase
    ],
    siSpa: [
      "sí",
      jaGer,
      "Unidad 1, palabra 10 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    tuEstasAquiSiYoEstoyAqui: [
      listenAudio.createPhrase.spanish,
      "¿Estás aquí? - Sí, estoy aquí. Sintaxis alemana: ¿Estás tú(!) aquí? - Sí, yo(!) estoy aquí.",
      "Unidad 1, frase 11 de <number>",
      [bistGer, duGer, hierGer, jaGer, ichGer, binGer, hierGer],
      [bistGer, duGer, hierGer, jaGer, ichGer, binGer, hierGer] //solution
      //audio complete phrase
    ],
    noSpaOne: [
      "no(1)",
      neinGer,
      "Unidad 1, palabra 11 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    tuEstasAlliNo: [
      listenAudio.createPhrase.spanish,
      "¿Estás allí? - No. Sintaxis alemana: ¿Estás tú(!) allí? - No.",
      "Unidad 1, frase 12 de <number>",
      [bistGer, duGer, dortGer, neinGer],
      [bistGer, duGer, dortGer, neinGer] //solution
      //audio complete phrase
    ],
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
