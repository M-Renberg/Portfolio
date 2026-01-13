export function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Hindra sidan från att laddas om

    statusDiv.textContent = "Skickar...";

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      // Kontrollera att porten matchar din dotnet run (t.ex. 5000 eller 5200)
      const response = await fetch('portfoliobackend-production-27b4.up.railway.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        statusDiv.textContent = "Tack! Ditt meddelande har skickats.";
        form.reset(); // Töm formuläret
      } else {
        statusDiv.textContent = "Något gick fel. Försök igen senare.";
      }
    } catch (error) {
      console.error("Error:", error);
      statusDiv.textContent = "Kunde inte nå servern. Är backenden igång?";
    }
  });
}