function sendMessage(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  if (name !== "" && email !== "" && msg !== "") {
    alert(`Thank you, ${name}! Your message has been sent to om.prasiddha.gautam@gmail.com.`);
  }
}

// Scroll Reveal Observer & Skill Bar Animation Trigger
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        // Trigger skill bar animations if the skills section is visible
        if (entry.target.id === "skills") {
          animateSkillBars();
        }
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(sec => {
    revealObserver.observe(sec);
  });
});

// Function to animate skill bars from 0% to target percentage with a counter effect
function animateSkillBars() {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach(card => {
    const fill = card.querySelector(".progress-fill");
    const pctText = card.querySelector(".skill-pct");
    const targetWidth = fill.getAttribute("data-width");
    const targetPct = parseInt(pctText.getAttribute("data-target"), 10);

    // Apply width to trigger CSS transition animation
    fill.style.width = targetWidth + "%";

    // Count up the number text smoothly
    let currentPct = 0;
    let duration = 1500;
    let stepTime = Math.max(Math.floor(duration / targetPct), 20);

    let counter = setInterval(() => {
      currentPct += 1;
      pctText.textContent = currentPct + "%";
      if (currentPct >= targetPct) {
        clearInterval(counter);
      }
    }, stepTime);
  });
}
