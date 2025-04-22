document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  // Create the confirmation message element if not already in the HTML
  let confirmationMessage = document.createElement("p");
  confirmationMessage.id = "confirmationMessage";
  confirmationMessage.style.color = "green";
  confirmationMessage.style.display = "none";
  confirmationMessage.textContent = "Thank you! Your form has been submitted.";
  form.parentNode.appendChild(confirmationMessage); // append below the form

  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();

    if (email !== confirmEmail) {
      e.preventDefault();
      alert("The email addresses do not match. Please check and try again.");
    } else {
      e.preventDefault(); // prevents actual form submission for now
      confirmationMessage.style.display = "block";
      form.reset(); // optional: clear form fields
    }
  });
});

console.log("JS loaded");
