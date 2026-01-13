import { navigate } from "./page-navigation.js";
import { initLinkEffects } from "./Link-Effects.js";
import { initIcons } from "./icons.js";
import { initBadges } from "./badges.js";

const init = () => {
  const runAll = () => {
    // Kör alltid navigationen först!
    navigate();

    // Lägg övriga effekter i try-catch så de inte förstör navigationen
    try {
      initLinkEffects();
      initIcons();
      initBadges();
    } catch (error) {
      console.error("Ett fel uppstod i effekterna:", error);
    }
  };

  window.addEventListener('hashchange', runAll);
  window.addEventListener('load', runAll);
};

init();

