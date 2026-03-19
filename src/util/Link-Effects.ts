export function initLinkEffects(): void {
  // Vi castar NodeList till HTMLElement för att få tillgång till .style och .dataset
  const effectElements = document.querySelectorAll<HTMLElement>('[id$="-effect"]');

  effectElements.forEach((el) => {
    // TypeScript vet nu att dataset finns
    if (el.dataset.hasListener) return;

    el.addEventListener("mouseenter", () => {
      const oldInfo = el.querySelector(".hover-info");
      if (oldInfo) oldInfo.remove();

      el.classList.add("active-shadow");

      // Styling
      el.style.border = "2px solid dimgray";
      el.style.borderRadius = "7px";
      el.style.padding = "0.3em 0.5em 0.6em 0.5em";

      // Hämta customText och hantera eventuellt undefined med fallback
      const customText = el.dataset.hover || "";
      const infoText = document.createElement("span");

      infoText.className = "hover-info";
      infoText.textContent = ` ${customText}`;
      infoText.style.fontSize = "16px";
      infoText.style.color = "antiquewhite";

      el.appendChild(infoText);
    });

    el.addEventListener("mouseleave", () => {
      el.classList.remove("active-shadow");
      el.style.border = "2px solid transparent";

      const info = el.querySelector(".hover-info");
      if (info) info.remove();
    });

    // Markera att listener har lagts till
    el.dataset.hasListener = "true";
  });
}