
console.log('JS is connected')
const url = 'http://deckofcardsapi.com/api/deck/'
const body = document.querySelector('body')
const btn = document.getElementById('getCard');

// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
axios.get(`${url}/new/draw/?count=1`).then(res => {
  const card = res.data.cards[0];
  console.log(`1. ${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
});

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

//Once you have both cards, console.log the values and suits of both cards.
let firstCard = null;
axios.get(`${url}/new/draw/`)
  .then(res => {
    firstCard = res.data.cards[0];
    const deckId = res.data.deck_id;
    return axios.get(`${url}/${deckId}/draw/`)
}).then(res => {
  let secondCard = res.data.cards[0];
  let cards = [firstCard, secondCard];
  cards.forEach(function(card) {
    console.log(`2. ${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
  })
});

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
let idOfDeck = null;
axios.get(`${url}/new/draw`).then(res => {
  console.log(res.data.deck_id)
  idOfDeck = res.data.deck_id;
  return idOfDeck;
});
btn.addEventListener('click', function(){
  axios.get(`${url}/${idOfDeck}/draw/`)
    .then(res => {
      const img = document.createElement('img');
      img.src = res.data.cards[0].image;
      body.append(img);
    })
});



/*axios.get('http://deckofcardsapi.com/api/deck/new/shuffle').then(res => {
  console.log(res.data);
})*/
/*
axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=4').then(res => {
  const img = document.createElement('img');
  console.log(res.data);
  for (let i = 0; i < res.data.cards.length; i++){
    console.log(`${res.data.cards[i].value} OF ${res.data.cards[i].suit}`);
  }
  setTimeout(function(){
    img.src = res.data.cards[0].image;
    body.append(img);    setTimeout(function(){
      img.src = res.data.cards[1].image;
      body.append(img);
      setTimeout(function(){
        img.src = res.data.cards[2].image;
        body.append(img)
        setTimeout(function(){
          img.src = res.data.cards[3].image;
          body.append(img);
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})
*/