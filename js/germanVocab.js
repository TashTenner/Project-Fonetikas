// German vocab
// lesson 1
let ichGer = new Word("ich", "img/I-yellow.png", "audio/ichGer.m4a"); //person, yellow, #eef000ff
let binGer = new Word("bin", "img/am-yellow.png", "audio/binGer.m4a"); //circle, yellow, #eef000ff
let hierGer = new Word("hier", "img/here-there1.png", "audio/hierGer.m4a"); //two fields with an arrow
let ichBinHierGer = new Phrase("Ich bin hier.", "audio/ichBinHierGer.m4a");
let dortGer = new Word("dort", "img/here-there2.png", "audio/dortGer.m4a"); //two fields with an arrow
let ichBinDort = new Phrase("Ich bin dort.", "audio/ichBinDortGer.m4a");
let duGer = new Word("du", "img/you-2nd-sg-green.png", "audio/duGer.m4a"); //person, green, #17C847
let bistGer = new Word("bist", "img/are-2nd-sg-green.png", "audio/bistGer.m4a"); //circle, green, #17C847
let duBistHier = new Phrase("Du bist hier.", "audio/duBistHierGer.m4a");
let duBistDort = new Phrase("Du bist dort.", "audio/duBistDortGer.m4a");
let undGer = new Word("und", "img/and.png", "audio/undGer.m4a"); //ampersand
let ichBinHierUndDuBistDort = new Phrase(
  "Ich bin hier und du bist dort.",
  "audio/ichBinHierUndDuBistDortGer.m4a"
);
let auchGer = new Word("auch", "img/also.png", "audio/auchGer.m4a"); //two checks
let ichBinAuchHier = new Phrase(
  "Ich bin auch hier.",
  "audio/ichBinAuchHierGer.m4a"
);
let binIchHier = new Phrase("Bin ich hier?", "audio/binIchHierQuestionGer.m4a");
let bistDuHier = new Phrase("Bist du hier?", "audio/bistDuHierQuestionGer.m4a");
let bistDuAuchDort = new Phrase(
  "Bist du auch dort?",
  "audio/bistDuAuchDortQuestionGer.m4a"
);
let aberGer = new Word("aber", "img/but.png", "audio/aberGer.m4a"); //unequal sign
let ichBinHierAberDuBistDort = new Phrase(
  "Ich bin hier, aber du bist dort.",
  "audio/ichBinHierAberDuBistDortGer.m4a"
);
let jaGer = new Word("ja", "img/yes-no.png", "audio/jaGer.m4a"); //yes and no sign, yes with colour
let bistDuHierJaIchBinHier = new Phrase(
  "Bist du hier? - Ja, ich bin hier.",
  "audio/bistDuHierJaIchBinHierGer.m4a"
);
let neinGer = new Word("nein", "img/yes-no1.png", "audio/neinGer.m4a"); //yes and no sign, no with colour and nr(1)
let bistDuDortNein = new Phrase(
  "Bist du dort? - Nein.",
  "audio/bistDuDortNeinGer.m4a"
);
let nichtGer = new Word("nicht", "img/yes-no2.png", "audio/nichtGer.m4a"); //yes and no sign, no with colour and nr(2)
let ichBinNichtHier = new Phrase(
  "Ich bin nicht hier.",
  "audio/ichBinNichtHierGer.m4a"
);
let bistDuNichtDort = new Phrase(
  "Bist du nicht dort?",
  "audio/bistDuNichtDortQuestionGer.m4a"
);
let oderGer = new Word("oder", "img/or.png", "audio/oderGer.m4a"); //||
let bistDuHierOderBistDuDort = new Phrase(
  "Bist du hier oder bist du dort?",
  "audio/bistDuHierOderBistDuDortQuestionGer.m4a"
);
let erGer = new Word("er", "img/he-blue.png", "audio/erGer.m4a"); //person, blue
let erUndIch = new Phrase("Er und ich.", "audio/erUndIchGer.m4a");
let sieGer = new Word("sie", "img/she-red.png", "audio/sieGer.m4a"); //person, red/bordeaux
let sieOderEr = new Phrase("Sie oder er?", "audio/sieOderErGer.m4a");
let istGer = new Word(
  "ist",
  "img/is-3nd-sg-blue-red-grey.png",
  "audio/istGer.m4a"
); //circle, blue (#05025fff) and red (#5f021fff) and grey (#999999ff)
let erIstDortAberIchBinNichtDort = new Phrase(
  "Er ist dort, aber ich bin nicht dort.",
  "audio/erIstDortAberIchBinNichtDortGer.m4a"
);
let sieIstAuchHier = new Phrase(
  "Sie ist auch hier.",
  "audio/sieIstAuchHierGer.m4a"
);
let halloGer = new Word("hallo", "img/hello.png", "audio/halloGer.m4a"); //person waving
let halloIstErHierHalloNeinErIstNichtHierAberSieIstHier = new Phrase(
  "Hallo! Ist er hier? - Hallo! Nein, er ist nicht hier, aber sie ist hier.",
  "audio/halloIstErHierETCGer.m4a"
);

// // lesson 2
// let heisseGer = new Word("heiße"); //issue with heisst, 2nd p.sg and 3rd p sg.
// let heisstGer = new Word("heißt"); //different pic to 2nd p.sg
// let heisstGer = new Word("heißt");
// let wieGer = new Word("wie");
// let dasGer = new Word("das");
// let deutschlandGer = new Word("Deutschland");
// let oesterreichGer = new Word("Österreich");
// let spanienGer = new Word("Spanien");
// let frankreichGer = new Word("Frankreich");
// let englandGer = new Word("England");
// let portugalGer = new Word("Portugal");
// let welchesGer = new Word("welches");
// let landGer = new Word("Land");
// let kommeGer = new Word("komme");
// let kommstGer = new Word("kommst");
// let kommtGer = new Word("kommt");
// let ausGer = new Word("aus");
// let woherGer = new Word("woher");
// let freutGer = new Word("freut");
// let michGer = new Word("mich");

// // lesson 3
// let derGer = new Word("der");
// let dieGer = new Word("die");
// let apfelGer = new Word("Apfel");
// let bananeGer = new Word("Banane");
// let brotGer = new Word("Brot");
// let habeGer = new Word("habe");
// let hastGer = new Word("hast");
// let hatGer = new Word("hat");
// let denGer = new Word("den");
// let woGer = new Word("wo");

// // lesson 4
// let rotGer = new Word("rot");
// let gruenGer = new Word("grün");
// let gelbGer = new Word("gelb");
// let braunGer = new Word("braun");
// let weissGer = new Word("weiß");
// // faltan los sufijos de los colores
// let einGer = new Word("ein");
// let eineGer = new Word("eine");
// let einenGer = new Word("einen");
// let keinGer = new Word("kein");
// let keineGer = new Word("keine");
// let keinenGer = new Word("keinen");
// let farbeGer = new Word("Farbe");
// // De qué color es ... - lógica alemana: Qué color tiene ...
