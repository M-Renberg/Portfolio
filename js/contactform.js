export function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Inaktivera knappen under sändning för att förhindra dubbelklick
    const submitBtn = form.querySelector('button');
    if (submitBtn) submitBtn.disabled = true;

    statusDiv.textContent = "Skickar...";

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      // VIKTIGT: Ersätt 'DITT_ID' med koden du fick från Formspree (t.ex. mwkzvnow)
      const response = await fetch('https://formspree.io/f/xjggvzjd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Gör att vi får ett JSON-svar tillbaka
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        statusDiv.textContent = "Tack! Ditt meddelande har skickats.";
        statusDiv.style.color = "#3DDC84"; // Gör texten grön om du vill
        form.reset();
      } else {
        const errorData = await response.json();
        statusDiv.textContent = "Något gick fel. Försök igen senare.";
        console.error("Formspree error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
      statusDiv.textContent = "Kunde inte skicka. Kontrollera din internetanslutning.";
    } finally {
      // Aktivera knappen igen
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}