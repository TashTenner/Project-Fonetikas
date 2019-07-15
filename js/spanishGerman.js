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
      listenAudio.threeOptionsAudios.spanish,
      "Primer sonido: entre una [e] y una [i]. Segundo sonido: el sonido inglés [sh] con las comisuras de las boca con una apertura hacia los costados."
    ],
    estoySpa: [
      "estoy",
      binGer,
      "Unidad 1, palabra 2 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish,
      "Primer sonido: una [b] fuerte. Segundo sonido: entre una [e] y una [i]. Tercer sonido: una [n] clara."
    ],
    aquiSpa: [
      "aquí",
      hierGer,
      "Unidad 1, palabra 3 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseYoEstoyAqui: [
      listenAudio.createPhrase.spanish,
      "Yo estoy aquí.",
      "Unidad 1, frase 1 de 20",
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
    phraseYoEstoyAlli: [
      listenAudio.createPhrase.spanish,
      "Yo estoy allí.",
      "Unidad 1, frase 2 de 20",
      [ichGer, binGer, dortGer],
      [ichGer, binGer, dortGer], //solution
      [ichBinDort]
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
    phraseTuEstasAqui: [
      listenAudio.createPhrase.spanish,
      "Tú estas aquí.",
      "Unidad 1, frase 3 de 20",
      [duGer, bistGer, hierGer],
      [duGer, bistGer, hierGer], //solution
      [duBistHier]
    ],
    phraseTuEstasAlli: [
      listenAudio.createPhrase.spanish,
      "Tú estas allí.",
      "Unidad 1, frase 4 de 20",
      [duGer, bistGer, dortGer],
      [duGer, bistGer, dortGer], //solution
      [duBistDort]
    ],
    ySpa: [
      "y",
      undGer,
      "Unidad 1, palabra 7 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseYoEstoyAquiYtuEstasAlli: [
      listenAudio.createPhrase.spanish,
      "Yo estoy aquí y tú estas allí.",
      "Unidad 1, frase 5 de 20",
      [ichGer, binGer, hierGer, undGer, duGer, bistGer, dortGer],
      [ichGer, binGer, hierGer, undGer, duGer, bistGer, dortGer], //solution
      [ichBinHierUndDuBistDort]
    ],
    tambienSpa: [
      "también",
      auchGer,
      "Unidad 1, palabra 8 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseYoTambienEstoyAqui: [
      listenAudio.createPhrase.spanish,
      "Yo también estoy aquí. Sintaxis alemana: Yo estoy también aquí.",
      "Unidad 1, frase 6 de 20",
      [ichGer, binGer, auchGer, hierGer],
      [ichGer, binGer, auchGer, hierGer], //solution
      [ichBinAuchHier]
    ],
    phraseYoEstoyAquiQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Yo estoy aquí? Sintaxis alemana: ¿Estoy yo aquí?",
      "Unidad 1, frase 7 de 20",
      [binGer, ichGer, hierGer],
      [binGer, ichGer, hierGer], //solution
      [binIchHier]
      //syntax question, intonation, "null-subject" Spa
    ],
    phraseTuEstasAquiQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Tú estás aquí? Sintaxis alemana: ¿Estás tú aquí?",
      "Unidad 1, frase 8 de 20",
      [bistGer, duGer, hierGer],
      [bistGer, duGer, hierGer], //solution
      [bistDuHier]
      //syntax question, intonation, "null-subject" Spa
    ],
    phraseTuTambienEstasAlliQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Tú tabmién estás allí? Sintaxis alemana: ¿Estás tú también allí?",
      "Unidad 1, frase 9 de 20",
      [bistGer, duGer, auchGer, dortGer],
      [bistGer, duGer, auchGer, dortGer], //solution
      [bistDuAuchDort]
      //syntax question, intonation, "null-subject" Spa
    ],
    peroSpa: [
      "pero",
      aberGer,
      "Unidad 1, palabra 9 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseYoEstoyAquiPeroTuEstasAlli: [
      listenAudio.createPhrase.spanish,
      "Yo estoy aquí pero tú estás allí.",
      "Unidad 1, frase 10 de 20",
      [ichGer, binGer, hierGer, aberGer, duGer, bistGer, dortGer],
      [ichGer, binGer, hierGer, aberGer, duGer, bistGer, dortGer], //solution
      [ichBinHierAberDuBistDort]
    ],
    siSpa: [
      "sí",
      jaGer,
      "Unidad 1, palabra 10 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseTuEstasAquiSiYoEstoyAquiDialogue: [
      listenAudio.createPhrase.spanish,
      "¿Estás aquí? - Sí, estoy aquí. Sintaxis alemana: ¿Estás tú(!) aquí? - Sí, yo(!) estoy aquí.",
      "Unidad 1, frase 11 de 20",
      [bistGer, duGer, hierGer, jaGer, ichGer, binGer, hierGer],
      [bistGer, duGer, hierGer, jaGer, ichGer, binGer, hierGer], //solution
      [bistDuHierJaIchBinHier]
    ],
    noSpaOne: [
      "no(1)",
      neinGer,
      "Unidad 1, palabra 11 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseTuEstasAlliNoDialogue: [
      listenAudio.createPhrase.spanish,
      "¿Estás allí? - No. Sintaxis alemana: ¿Estás tú(!) allí? - No.",
      "Unidad 1, frase 12 de 20",
      [bistGer, duGer, dortGer, neinGer],
      [bistGer, duGer, dortGer, neinGer], //solution
      [bistDuDortNein]
    ],
    noSpaTwo: [
      "no(2)",
      nichtGer,
      "Unidad 1, palabra 12 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseYoNoEstoyAqui: [
      listenAudio.createPhrase.spanish,
      "Yo no estoy aquí. Sintaxis alemana: Yo estoy no(2) aquí.",
      "Unidad 1, frase 13 de 20",
      [ichGer, binGer, nichtGer, hierGer],
      [ichGer, binGer, nichtGer, hierGer], //solution
      [ichBinNichtHier]
    ],
    phraseTuNoEstasAlliQuestion: [
      listenAudio.createPhrase.spanish,
      "¿No estás allí? Sintaxis alemana: ¿Estás tú no(2) allí?",
      "Unidad 1, frase 14 de 20",
      [bistGer, duGer, nichtGer, dortGer],
      [bistGer, duGer, nichtGer, dortGer], //solution
      [bistDuNichtDort]
    ],
    oSpa: [
      "o",
      oderGer,
      "Unidad 1, palabra 13 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseTuEstasAquiOTuEstasAlliQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Estás aquí o estás allí? Sintaxis alemana: ¿Estás tú aquí o estás tú allí?",
      "Unidad 1, frase 15 de 20",
      [bistGer, duGer, hierGer, oderGer, bistGer, duGer, dortGer],
      [bistGer, duGer, hierGer, oderGer, bistGer, duGer, dortGer], //solution
      [bistDuHierOderBistDuDort]
    ],
    elSpa: [
      "él",
      erGer,
      "Unidad 1, palabra 14 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseElYYo: [
      listenAudio.createPhrase.spanish,
      "Él y yo.",
      "Unidad 1, frase 16 de 20",
      [erGer, undGer, ichGer],
      [erGer, undGer, ichGer], //solution
      [erUndIch]
    ],
    ellaSpa: [
      "ella",
      sieGer,
      "Unidad 1, palabra 15 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseEllaOElQuestion: [
      listenAudio.createPhrase.spanish,
      "¿Ella o él?",
      "Unidad 1, frase 17 de 20",
      [sieGer, oderGer, erGer],
      [sieGer, oderGer, erGer], //solution
      [sieOderEr]
    ],
    estaSpa: [
      "está",
      istGer,
      "Unidad 1, palabra 16 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseElEstaAlliPeroYoNoEstoyAlli: [
      listenAudio.createPhrase.spanish,
      "Él está allí pero yo no estoy allí. Sintaxis alemana: Él está allí pero yo estoy no(2) allí.",
      "Unidad 1, frase 18 de 20",
      [erGer, istGer, dortGer, aberGer, ichGer, binGer, nichtGer, dortGer],
      [erGer, istGer, dortGer, aberGer, ichGer, binGer, nichtGer, dortGer], //solution
      [erIstDortAberIchBinNichtDort]
    ],
    phraseEllaTambienEstaAqui: [
      listenAudio.createPhrase.spanish,
      "Ella también está aquí. Sintaxis alemana: Ella está también aquí.",
      "Unidad 1, frase 19 de 20",
      [sieGer, istGer, auchGer, hierGer],
      [sieGer, istGer, auchGer, hierGer], //solution
      [sieIstAuchHier]
    ],
    holaSpa: [
      "hola",
      halloGer,
      "Unidad 1, palabra 17 de 17",
      listenAudio.wordIntro.spanish,
      listenAudio.threeOptionsAudios.spanish
    ],
    phraseHolaElEstaAquiHolaNoElNoEstaAquiPeroEllaEstaAquiDialogue: [
      listenAudio.createPhrase.spanish,
      "¡Hola! ¿Él está aquí? - !Hola! No, él no está aquí pero ella está aquí. Sintaxis alemana: ¡Hola! ¿Está él aquí? - !Hola! No, él está no(2) aquí pero ella está aquí.",
      "Unidad 1, frase 20 de 20",
      [
        halloGer,
        istGer,
        erGer,
        hierGer,
        halloGer,
        neinGer,
        erGer,
        istGer,
        nichtGer,
        hierGer,
        aberGer,
        sieGer,
        istGer,
        hierGer
      ],
      [
        halloGer,
        istGer,
        erGer,
        hierGer,
        halloGer,
        neinGer,
        erGer,
        istGer,
        nichtGer,
        hierGer,
        aberGer,
        sieGer,
        istGer,
        hierGer
      ], //solution
      [halloIstErHierHalloNeinErIstNichtHierAberSieIstHier]
    ]
  }
  // unitTwo: {
  //   meLlamoSpa: ["me llamo", heisseGer]
  // }
};
