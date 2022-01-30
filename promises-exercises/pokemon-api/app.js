console.log('JS is connected')
const url = 'https://pokeapi.co/api/v2/'
let threePokes = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

axios.get(`${url}pokemon?limit=1118`).then(res => {
  
  let pokeData = res.data.results;
  //console.log(res.data.results[0].name);
  for (let i = 0; i < res.data.results.length; i++){
    console.log(res.data.results[i].name, res.data.results[i].url)
  }
  console.log(pokeData);
  let randomIdx1 = getRandomIntInclusive(0, 1118);
  let randomIdx2 = getRandomIntInclusive(0, 1118);
  let randomIdx3 = getRandomIntInclusive(0, 1118);

  threePokes.push(pokeData[randomIdx1]);
  threePokes.push(pokeData[randomIdx2]);
  threePokes.push(pokeData[randomIdx3]);
  return threePokes;
}).then(console.log(threePokes))
//console.log(threePokes)