class AdDisplayManager {
  constructor(params) {
    this.menuManager = params.menuManager;
    this.displayDIV = document.getElementById(params.displayAreaId);
    this.ads = params.adsList;
    this.menu = document.getElementById("menu_catalogo");
    this.startDelayDuration = params.startDelayDuration;
    this.displayDuration = params.displayDuration;
    this.pauseDuration = params.pauseDuration;
    this.loopPauseDuration = params.loopPauseDuration;
    this.idleDuration = params.idleDuration; // time to wait before restarting ads after user interaction
    this.index = 0;
    this.runningTimeout = undefined;
    this.isRunning = false;
    this.idleTimeout = undefined;
    this.init();
  }

  init() {
    console.log("INIT START");
    this.clear();
    this.clearTimers();
    this.isRunning = false;
    this.idleTimeout = setTimeout(() => this.start(), this.idleDuration);
    console.log("INIT END");
  }

  // Start a timer that will restart ad display after a period of inactivity
  gotoSleep() {
    this.stop();
    this.idleTimeout = setTimeout(() => this.start(), this.idleDuration);
    console.log("CONTINUE IDLE");
  }

  start() {
    console.log("START START");
    this.clearTimers();
    if (this.ads && this.ads.length > 0) {
      if (this.menu) this.menuManager.hideMenu(this.menu);
      this.isRunning = true;
      this.runningTimeout = setTimeout(() => this.displayAD(), 1);
      console.log("START END");
    }
  }

  pause(ms) {
    this.clear();
    this.runningTimeout = setTimeout(() => this.displayAD(), ms);
    //   this.runningTimeout = setTimeout(this.display.bind(this), ms);
    console.log("PAUSE");
  }

  stop() {
    this.clear();
    this.clearTimers();
    this.isRunning = false;
    this.menuManager.showMenu(this.menu);
    console.log("STOP");
  }

  displayAD() {
    console.log("DISPLAY START");
    if (!this.isRunning || !this.ads.length) this.stop(); // add check if there are no ads
    this.displayDIV.innerHTML = this.ads[this.index].content;

    this.displayDuration = this.ads[this.index].duration;
    this.index = (this.index + 1) % this.ads.length;

    if (this.index == 0) {
      this.runningTimeout = setTimeout(() => this.pause(this.loopPauseDuration), this.displayDuration);
    } else {
      this.runningTimeout = setTimeout(() => this.pause(this.pauseDuration), this.displayDuration);
    }
    console.log("DISPLAY END");
  }

  clear() {
    this.displayDIV.innerHTML = "";
    console.log("CLEAR");
  }

  clearTimers() {
    if (this.runningTimeout) {
      clearTimeout(this.runningTimeout);
      this.runningTimeout = undefined;
    }
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout);
      this.idleTimeout = undefined;
    }
    console.log("CLEAR TIMERS");
  }
}