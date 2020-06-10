const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard

function flipCard(){
    this.classList.add('flip');
    if (!hasFlippedCard) {
        //First click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //Second click
        hasFlippedCard = false;
        secondCard = this;
        // Do cards match?
        checkForMatch();
    }
}

function checkForMatch(){
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //Its a match
            firstCard.removeEventListener('click', flipcard)
            secondCard.removeEventListener('click', flipcard)
        } else {
            //not a match
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }, 1500);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));