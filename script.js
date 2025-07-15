document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {
    q1: "a",
    q2: "a",
    q3: "c",
    q4: "c"
  };

  let allCorrect = true;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (!selected || selected.value !== answers[key]) {
      allCorrect = false;
      break;
    }
  }

  if (allCorrect) {
    document.getElementById("popup").style.display = "flex";
    launchConfetti();
  } else {
    alert("Oops! Kuch answers galat hain, try again meri Jaan! 💔");
  }
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("confetti-container").innerHTML = "";
}

// Confetti Launcher
function launchConfetti() {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    container.appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ["#ff0", "#f0f", "#0ff", "#ff6347", "#90ee90", "#add8e6"];
  return colors[Math.floor(Math.random() * colors.length)];
}
