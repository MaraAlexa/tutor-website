// Set CONTACT_EMAIL to the address that should receive enquiries.
// The form opens the visitor's email app with the message filled in.
// (To receive form submissions without an email app, swap this for a
// form service such as Formspree or Netlify Forms.)
const CONTACT_EMAIL = "your-email@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `Lesson enquiry: ${data.get("service")}`;
  const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Thank you! Your email app should open so you can send your message.";
});
