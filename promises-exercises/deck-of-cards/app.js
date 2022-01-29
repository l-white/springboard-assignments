//const { default: axios } = require("axios")

console.log('JS is connected')
const body = document.querySelector('body')
/*axios.get('http://deckofcardsapi.com/api/deck/new/shuffle').then(res => {
  console.log(res.data);
})*/

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