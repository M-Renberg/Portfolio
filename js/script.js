import { navigate } from "./page-navigation.js";
import { initLinkEffects } from "./Link-Effects.js";
import { initIcons } from "./icons.js";
import { initBadges } from "./badges.js";
import { initContactForm } from "./contactform.js";

const init = () => {
  const runAll = () => {

    navigate();


    try {
      initLinkEffects();
      initIcons();
      initBadges();
      initContactForm();
    } catch (error) {
      console.error("Ett fel uppstod i effekterna:", error);
    }
  };

  window.addEventListener('hashchange', runAll);
  window.addEventListener('load', runAll);
};

init();

