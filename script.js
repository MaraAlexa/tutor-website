// Contact form is sent through Formspree (https://formspree.io).
// Set the form's action URL in index.html to your own Formspree endpoint.
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  if (form.action.includes("YOUR_FORM_ID")) {
    note.textContent = "The contact form isn't connected yet.";
    return;
  }

  note.textContent = "Sending…";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    note.textContent = "Thank you! Your message was sent and I'll be in touch soon.";
  } catch {
    note.textContent = "Sorry, something went wrong. Please try again in a moment.";
  }
});
