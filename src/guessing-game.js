class GuessingGame {
  constructor() {
    this.first = 0;
    this.last = 0;

    this.middle = 0;
  }

  setRange(min, max) {
    this.first = min;
    this.last = max;
  }

  guess() {
    this.middle = Math.ceil(this.first + (this.last - this.first) / 2);
    return this.middle;
  }

  lower() {
    this.last = this.middle;
    this.guess();
  }

  greater() {
    this.first = this.middle;
    this.guess();
  }
}

module.exports = GuessingGame;
