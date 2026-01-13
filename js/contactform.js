export function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    statusDiv.textContent = "Sending...";

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('portfoliobackend-production-27b4.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        statusDiv.textContent = "Thank you. You're message has been sent";
        form.reset();
      } else {
        statusDiv.textContent = "Something went wrong. Please try again";
      }
    } catch (error) {
      console.error("Error:", error);
      statusDiv.textContent = "Error: Server is down.";
    }
  });
}