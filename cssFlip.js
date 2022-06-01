const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firsCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firsCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = false;
        firsCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}
function checkForMatch() {
    if (firsCard.datase.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}
function disableCards() {
    firsCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firsCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firsCard, secondCard] = [null, null];
}
function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.Style.order = randomPosition;
    })();
}
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

