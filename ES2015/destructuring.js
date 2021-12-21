// Assigning variables to object properties
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

const {numbers: {a, b}} = obj;

// Array Swap
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
console.log(raceResults(['Tom', 'Ernie', 'Joyce', 'Phenelope', 'Giddeon']));