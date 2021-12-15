/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let firstAndLast = [];
    arr.forEach(function(word){
        firstAndLast.push(word[0] + word[word.length - 1]);
    })
    return firstAndLast;
}

console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]


function addKeyAndValue(arr,key,value){
    let revisedObj = arr.map(obj => {
        let rObj = {};
        rObj[obj.key] = obj.value;
        
    });
    return revisedObj;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));*/


function onlyEvenValues(arr){
    return arr.filter(element => element % 2 === 0);
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let filtered = arr.filter(element => element % 2 !== 0);
    return filtered.map(e => e * 2);
}

console.log(doubleOddNumbers([4,4,4,4,4]));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let lowerCaseStr = str.replace(/\s+/g, '').toLowerCase()
    let obj = {};
    let vowels = lowerCaseStr.match(/[aeiou]/gi);
    const vowelLetters = 'aeiou';
    // .split('');
    //let rex = /^[aeiou]/i;
    //let results = strings.filter(str => rex.test(str));
    //let filtered = lowerCaseStr.filter(str, char => "aeiou".includes(char));

    
    vowels.forEach((element) => {
        if(obj.hasOwnProperty([element])){
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    });
    
    /*
    for (let i = 0; i < vowels.length; i++){
        if (obj.hasOwnProperty(vowels[i])) {
            obj[vowels[i]] += 1;
        } else {
            obj[vowels[i]] = 1;
        }
    }*/
    return obj;
    //return vowels;
}

console.log(vowelCount('I Am awesome and so are you'));

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowels = 'aeiou';
    let strToArr = str.toLowerCase().split('');
    //return strToArr.filter(letter => letter.indexOf(vowels) === 1);
    return strToArr;
}
console.log(removeVowels("iamastring"));

const isNotVowel = function(char){
    return 'aeiou'.indexOf(char) === -1;
}

console.log(isNotVowel("iamastring"));

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    //let newArr = arr.map((x, index)=> {x * arr[index]});
    //return newArr;
    return arr.map((x , i) => x * i);
}

console.log(valTimesIndex([1,-2,-3]))

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    /*return arr.map(function(value){
        return key[value];
    })*/
    /*let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i][key]);
    }*/
    let newArr = arr.map((x , i) => arr[i][key]);
    return newArr;
}

console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
   return arr.map(x => `${x.first} ${x.last}`);
}

console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/


/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
 //let newStr = str.toLowerCase().split('');
 //const vowels = ['a', 'e', 'o', 'i', 'u'];
 //let array = [];
    
    //array.push(newStr[i]);
 
return str.toLowerCase().replace(/[aeiou]/gi, '');
}

console.log(removeVowels('TIM'));

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    //return arr.indexOf(searchValue) ? arr.filter(x => x === searchValue).join('') : 'undefined';
    return arr.filter(x => x === searchValue)[0];
    //return arr.indexOf(searchValue);
}

console.log(find([1,2,3,4,5], 3));
console.log(find([1,2,3,4,5], 10));

console.log([1,2,3,4,5].indexOf(3));

function filterByValue(arr, key) {
    return arr.filter(item => item[key]);
    //return key;
}

const arrOfNames = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}];
//console.log(arrOfNames.filter(item => item.isCatOwner));
console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    /*return arr.filter(function(element) {
        return element[key] === searchValue;
      })[0];*/
      return arr.filter(x => x[key] === searchValue)[0];
}

console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));

//console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));


//console.log([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}].filter(x => x.isCatOwner)[0]);

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    //return arr.map(x => Object.assign({}, x, {key : value}));
    arr.forEach(function(val) {
        val[key] = value;
      });
      return arr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));