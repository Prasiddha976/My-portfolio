function sendMessage(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  if (name !== "" && email !== "" && msg !== "") {
    alert(`Thank you, ${name}! Your message has been sent to om.prasiddha.gautam@gmail.com.`);
  }
}
