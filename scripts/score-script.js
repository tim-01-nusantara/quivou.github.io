const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const finalScore = document.getElementById("finalScore");
const reviewBtn = document.getElementById("review");

const urlParams = new URLSearchParams(window.location.search);
const answerSelectedString = urlParams.get("listAnswer");
const answerSelected = answerSelectedString.split(",");

// const score = parseInt(urlParams.get("score"));
const score = urlParams.get("score");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    finalScore.innerHTML = score;
    // for (i = 0; i < answerSelected.length; i++) {
    //     alert(answerSelected[i]);
    // }
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

reviewBtn.addEventListener("click", () => {
    const urlParamsReview = new URLSearchParams();
    urlParamsReview.set('listAnswer', answerSelected.join(','));
    urlParamsReview.set('score', score);
    window.location.href = "review.html?" + urlParamsReview.toString();
})