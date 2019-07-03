const defaultGerman = {
  morphology: {
    partsOfSpeech: [
      {
        noun: [{}],
        verb: [{ auxiliaryVerb: [{ sein: [bin, bist, ist] }] }],
        adjective: [{}],
        adverb: [
          { locativeAdverb: [hier, dort] },
          { conjunctiveAdverb: [auch] },
          { negativeAdverb: [nicht] }
        ],
        article: [{}],
        pronoun: [
          {
            personalPronoun: [
              { firstPersonSingular: ich },
              { secondPersonSingular: du },
              {
                thirdPersonSingular: [{ masculine: er }, { feminine: sie }]
              },
              { firstPersonPlural: "" },
              { secondPersonPlural: "" },
              { thirdPersonPlural: "" }
            ]
          }
        ],
        preposition: [{}],
        conjunction: [
          { copulativeConjunction: [und] },
          { adversativeConjunction: [aber] },
          { disjunctiveConjunctions: [oder] }
        ],
        numeral: [{}],
        interjection: [hallo],
        particle: [ja, nein]
      }
    ]
  },
  phoneticsPhonology: {},
  semantics: {},
  syntax: {},
  graphemics: {}
};
