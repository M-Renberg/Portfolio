import { navigate } from "./page-navigation.js";

const init = () => {
    
window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);
};

init();