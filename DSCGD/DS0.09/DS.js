class MenuManager {
  constructor() {
    this.elemActiveMenu = undefined;
    console.log("MenuManager Running");
  }

  showDefaultMenu() {
    const elemDefaultMenu = document.querySelector('[data-default="true"]');
    if (elemDefaultMenu) {
      const defaultMenuName = elemDefaultMenu.id;
      console.log("showDefaultMenu: " + defaultMenuName);
      this.updateMenu(defaultMenuName);
    }
  }


  isElement(elem) {
    if (!(elem instanceof Element)) {
      console.error("Warning: 'elem' is not an Element.");
      return false;
    }
    return true;
  }

  goBack() {
    window.history.back();
    //window.history.go(-2);
  }

  goToContent(url, originMenu, targetMenu) {
    if (!url) {
      console.error("Warning goToContent: 'url' is undefined or null.");
      return;
    }
    /*     url = originMenu ? url + '?originmenu=' + encodeURIComponent(originMenu) : url + '?originmenu=""';
        url = targetMenu ? url + '&targetmenu=' + encodeURIComponent(menu) : url; */

    console.log("GOTO URL: " + url);
    window.location.href = url;
  }

  updateMenu(menuIdName) {
    if (typeof menuIdName !== "string") {
      console.error("Warning: 'menuId' is not a string.");
      return;
    }
    stop();
    const elemMenuToShow = document.getElementById(menuIdName);
    this.showMenu(elemMenuToShow);
    if (this.elemActiveMenu == elemMenuToShow) {
      return;
    }
    if (this.elemActiveMenu) {
      this.hideMenu(this.elemActiveMenu);
    }
    this.showMenu(elemMenuToShow);
    this.elemActiveMenu = elemMenuToShow;

  }

  setAllButtonsInactive(buttonClass) {
    const navmainButtons = document.querySelectorAll(buttonClass);
    navmainButtons.forEach((button) => {
      this.unSetButtonActive(button);
    });
  }

  setButtonActive(buttonElem) {
    buttonElem.classList.add("active");
  }

  unSetButtonActive(buttonElem) {
    buttonElem.classList.remove("active");
  }


  showMenu(menuElem) {
    if (this.isElement(menuElem)) {
      menuElem.style.display = "grid";
    }
  }

  hideMenu(menuElem) {
    if (this.isElement(menuElem)) {
      menuElem.style.display = "none";
    }
  }

  /**************** */
  /* RETURN TO HP */
  /**************** */

  setupReturntoHP() {
    if (this.returnToHPTimeout) clearTimeout(this.returnToHPTimeout);
    this.returnToHPTimeout = setTimeout(() => this.returnToHP(), 10000);
  }

  continueonthispage() {
    this.setupReturntoHP()
    console.log("continueonthispage");
  }

  returnToHP() {
    clearTimeout(this.returnToHPTimeout);
    this.returnToHPTimeout = undefined;
   this.startFall();
    //this.goToContent("_cover.html");
  }

  /**************** */
  /* URL PARAMS */
  /**************** */

  /* not used*/
  readParam() {
    let urlParams = new URLSearchParams(window.location.search);
  }

  /**************** */
  /* FALL ANIMATION */
  /**************** */

startFall() {
  // Get all elements in the body
  this.elements_bt = document.querySelectorAll('.button');
  this.elements = document.querySelectorAll('div:not(.button):not(#background), nav:not(.button)');
  this.startFallDownAnimation();
}

applyBtAnimation(el, index) {
  return el.animate([{
      transform: 'translateX(0px)',
      opacity: 1
    },
    {
      transform: 'translateX(-100%)',
      opacity: 0
    }
  ], {
    duration: 500, // duration of your animation
    delay: index * 300, // delay starts to be applied progressively, based on the element's index
    fill: 'forwards' // keep the end state after animation
  });
}

applyAnimation(el, index) {
  return el.animate([{
      opacity: 1
    },
    {
      opacity: 0
    }
  ], {
    duration: 1500, // duration of your animation
    delay: index * 100, // delay starts to be applied progressively, based on the element's index
    fill: 'forwards' // keep the end state after animation
  });
}


startFallDownAnimation() {
  // Apply the animation to each element and store the promises
  const promises_bt = Array.from(this.elements_bt).map(this.applyBtAnimation);
  const promises = Array.from(this.elements).map(this.applyAnimation);
  
  // Combine the arrays of promises
  const allPromises = [...promises_bt, ...promises];

  // Wait for all animations to finish
  Promise.all(allPromises.map(animation => animation.finished)).then(() => {
    // After all animations finished, navigate to new URL
    this.goToContent("_cover.html");
  });
}


/*END CLASS*/
}




