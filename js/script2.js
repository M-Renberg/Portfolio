import { navigate } from "./page-navigation.js";
import { initLinkEffects } from "./Link-Effects.js";
import { initIcons } from "./icon.js";
import { initBadges } from "./badges.js";
const init = () => {


  window.addEventListener('hashchange', () => {
    navigate();
    initLinkEffects();
    initIcons();
    initBadges();
  });
  window.addEventListener('load', () => {
    navigate();
    initLinkEffects();
    initIcons();
    initBadges();
  });
};


init();