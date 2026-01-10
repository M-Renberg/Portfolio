export function initLinkEffects() {
  const effectElements = document.querySelectorAll('[id$="-effect"]');

  effectElements.forEach(el => {
    if (el.dataset.hasListener) return;

    el.addEventListener("mouseenter", () => {
      const oldInfo = el.querySelector(".hover-info");
      if (oldInfo) oldInfo.remove();
      
      el.style.border = "2px solid dimgray";

      const customText = el.dataset.hover;
      const infoText = document.createElement("span");
      infoText.className = "hover-info";
      infoText.textContent = ` ${customText}`;
      infoText.style.fontSize = "16px";
      infoText.style.color = "antiquewhite";

      el.appendChild(infoText);

    });

    el.addEventListener("mouseleave", () => {
      el.style.border = "2px solid transparent";
      const info = el.querySelector(".hover-info");
      if (info) info.remove();
    });
    el.dataset.hasListener = "true";
  });
}