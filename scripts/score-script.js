const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const finalScore = document.getElementById("finalScore");

const urlScoreParams = new URLSearchParams(window.location.search);
const score = urlScoreParams.get("score");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    finalScore.innerHTML = score;
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});