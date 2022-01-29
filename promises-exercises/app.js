console.log('JS is connected')

const p = document.getElementById('number');
const p2 = document.getElementById('7');
const p3 = document.getElementById('5');
const p4 = document.getElementById('multipleNums');
const body = document.querySelector('body');

$.get('http://numbersapi.com/random/year?json', function(data) {
    p.innerHTML = data.number + " is a " + data.type + ". " + data.text;
    if (data.number > 0){
      p.innerHTML += " " + data.number + " is greater than zero."
    } else {
      p.innerHTML += " " + data.number + " is less than zero. This fact happened prior to the year 0 AD."
    }
});

$.get('http://numbersapi.com/7', function(data){
  p2.innerText = data;
})

$.get('http://numbersapi.com/5/math', function(data){
  p3.append(data);
})

$.get('http://numbersapi.com/1,3,5', function(data){
  /*console.log(data);
  console.log(JSON.parse(data))
  console.log(JSON.parse(data)[1])
  console.log(JSON.parse(data)[3])
  console.log(JSON.parse(data)[5])*/
  p4.append(`${JSON.parse(data)[1]} ${JSON.parse(data)[3]}  ${JSON.parse(data)[5]}`);
})

//let fourFacts = [];
/*
for (let i = 1; i < 5; i++){
  $.get('http://numbersapi.com/4', function(data){
  console.log(i, data);
  //fourFacts.push(data)
  body.append(data);
})
}*/
/*
Promise.all(fourFacts)
  .then(factsArr => {
    for (let res of factsArr){
      console.log(res.data)
      //return factsArr;
      console.log(factsArr)
    }
  }).catch(err => console.log(err));
*/
//console.log(fourFacts);


Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`http://numbersapi.com/4?json`);
  })
).then(facts => {
  facts.forEach(data => body.append(`${data.text} `));
});
