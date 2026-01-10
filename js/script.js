import { navigate } from "./page-navigation.js";
import { initLinkEffects } from "./Link-Effects.js";
const init = () => {
    
  window.addEventListener('hashchange', () => {
    navigate();
    initLinkEffects();
});
  window.addEventListener('load', () => { 
    navigate();
    initLinkEffects();
  });
};


init();


