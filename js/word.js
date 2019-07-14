class Word {
  constructor(text, icon, audio) {
    this.text = text;
    this.audio = new Audio();
    this.audio.src = audio;
    this.icon = new Image();
    this.icon.src = icon;
  }
  play() {}
}

class Phrase {
  constructor(text, audio) {
    this.text = text;
    this.audio = new Audio();
    this.audio.src = audio;
  }
  play() {}
}
