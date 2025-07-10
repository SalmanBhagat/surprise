document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {
    q1: "b",
    q2: "a",
    q3: "a",
    q4: "a"
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
  } else {
    alert("Oops! Kuch answers galat hain, try again meri Jaan! 💔");
  }
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
