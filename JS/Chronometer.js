class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }
  
    start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback) {
          printTimeCallback(this.currentTime);
        }
      }, 10);
    }
  
    getMinutes() {
      return Math.floor(this.currentTime / 6000);
    }
  
    getSeconds() {
      return Math.floor((this.currentTime / 100) % 60);
    }
  
    getCentiseconds() {
      return this.currentTime % 100;
    }
  
    computeTwoDigitNumber(value) {
      let digits = value.toString();
      if (digits.length === 2) {
        return digits;
      } else {
        return `0${digits}`;
      }
    }
  
    stop() {
      clearInterval(this.intervalId);
    }
  
    reset() {
      this.currentTime = 0;
    }
  
    split() {
      return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
    }
    
    draw() {
        c.fillStyle = 'orange'
        c.font = '50px Baumans' 
        c.fillText(this.split(), 10, 50);
    }
  }