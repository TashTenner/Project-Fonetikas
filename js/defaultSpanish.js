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
        interjection: [{}],
        particle: [sí, no]
      }
    ]
  },
  phoneticsPhonology: {},
  semantics: {},
  syntax: {},
  graphemics: {}
};

/* 
console.log(
  defaultSpanish.morphology.partsOfSpeech[0].pronoun[0].personalPronoun[0]
    .firstPersonSingular.text
);
// output: "yo"
*/
