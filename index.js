const btn_submit = document.querySelector(".btn-submit");
const card_2 = document.querySelector(".card_2");

btn_submit.addEventListener("click", toggleCard);

function toggleCard() {
    card_2.classList.toggle("inactive");
}