class Word {
  constructor(text, icon) {
    // falta en el constructor "audio", "icon"
    this.text = text;
    // this.audio = audio; new Audio() JS
    this.icon = new Image();
    this.icon.src = icon;
  }
  //play() {
  //plays this.audio
  //}
}

let test = new Word("kkk", "/340x120.png");

console.log(test);
/* 
Framework of a language:
... > Indoeuropean Languages > Latin Languages > Spanish, French, Italian, etc

Framework of Spanish - structure of the Spanish language: const Spanish = {}

>>1.1. parts of speech - all come from class WORD
>>1.1.6.1.3.3. Third-person neuter/inanimate singular = does not exist
*/
