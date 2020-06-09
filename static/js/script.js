document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'html',
      img: 'static/images/html.png'
    },
    {
      name:'css',
      img: 'static/images/css.png'  
    },
    {
      name:'blank',
      img: 'static/images/button.png'  
    },
    {
      name:'django',
      img: 'static/images/django.png'  
    },
    {
      name:'flask',
      img: 'static/images/flask.png'  
    },
    {
      name:'javascript',
      img: 'static/images/js.png'  
    },
    {
      name:'python',
      img: 'static/images/python.png'  
    },
    {
      name:'white',
      img: 'static/images/white.png'  
    },
  ]  

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //Create the board
  function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
          var card = document.createElement('img')
          card.setAttribute('src', 'static/images/button.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          grid.appendChild(card)
      }
  }
  
  //check for matches
  function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'static/images/white.png')
        cards[optionTwoId].setAttribute('src', 'static/images/white.png')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'static/images/button.png')
        cards[optionOneId].setAttribute('src', 'static/images/button.png')
        alert ('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, you found all the matches!'
      }
  }

  //flip your card
  function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cartId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
      }
  }

})