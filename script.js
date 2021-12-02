document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("player1").focus();
  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  document.getElementById("btn").addEventListener("click", function () {
    const answer = Math.floor(Math.random() * 2) + 1;

    resultContainer.removeAttribute("hidden");

    result.innerHTML = answer;
  });
});
