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
  p4.append(`${JSON.parse(data)[1]} ${JSON.parse(data)[3]}  ${JSON.parse(data)[5]}`);
})


Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`http://numbersapi.com/4?json`);
  })
).then(facts => {
  facts.forEach(data => body.append(`${data.text} `));
});
