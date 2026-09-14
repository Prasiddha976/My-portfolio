function sendMessage(event) {
  event.preventDefault(); // Prevents page reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  if (name === "" || email === "" || msg === "") {
    alert("Please fill in all fields!");
  } else {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.querySelector(".contact-form").reset();
  }
}
