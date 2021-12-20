// Shorthand Property Names
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

// Computed Property Names
let favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!'
}

// Object Methods
const instr = {
  firstName: 'Colt',
  sayHi(){
    return 'Hi!'
  },
  sayBye(){
    return `${this.firstName} says bye!`
  }
}

// createAnimal function
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb](){
      return `${noise}!`
    }
  }
}

const d = createAnimal("dog", "bark", "Woooof!");
console.log(d.bark()); // Returns "Woooof!"