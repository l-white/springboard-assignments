// hasDuplicate
const hasDuplicate = (arr) => {
    return new Set(arr).size === arr.length ? false : true;
}

// vowelCount
const vowelCount = (string) => {
    const arr = string.toLowerCase().split('');
    const map = new Map();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    function isVowel(char){
        return vowels.includes(char);
    }
    for (let i = 0; i < string.length; i++){
        if (isVowel(string[i]) === true){
            map.set(string[i], (map.get(string[i]) ?? 0) + 1);
        }
    }
    return map;
}
//let map = new Map();
//console.log(map)
console.log(vowelCount('awesome'));
console.log(vowelCount('Colt'));
console.log(vowelCount('laura'));