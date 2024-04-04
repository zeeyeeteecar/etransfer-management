// JavaScript to toggle the modal
const openContactFormButton = document.getElementById("openContactForm");
const closeContactFormButton = document.getElementById("closeContactForm");
const contactFormModal = document.getElementById("contactFormModal");

if (openContactFormButton) {
  openContactFormButton.addEventListener("click", () => {
    contactFormModal.classList.remove("hidden");
  });
}

if (closeContactFormButton) {
  closeContactFormButton.addEventListener("click", () => {
    contactFormModal.classList.add("hidden");
  });
}
