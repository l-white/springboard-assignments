console.log('JS is connected')

const section = document.getElementById('section');

const pokeNames = []

async function fetchPokeData(){
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    //console.log(res.data.results)
    const pokes = res.data.results
    //pokes.forEach(poke => pokeNames.push(poke['name']))
        //console.log(poke['name']))
    console.log(pokes)
    pokes.forEach(poke => pokeNames.push(poke['name']))
}
//pokeNames.push('hello')
console.log(pokeNames)


async function getInfoOnPoke(){
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon/clefairy/')
    console.log(res.data)
}

class Pokemon {
    constructor(id) {
        this.id = id;
        this.types = [];
    }
    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.name = res.data.name;
        for (let type of res.data.types){
            this.types.push(type.type.name)
        }
        console.log(res.data)
    }
    async getUrl(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.url = res.data.forms[0].url;
        console.log(this.url)
    }
    /*async getImage(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        //this.img = res.data.sprites.front_default;
        //console.log(this.img.front_default)
        console.log(res.data.sprites.front_default)
        return res.data.sprites.front_default;
    }*/
    async getImage(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        //console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`)
        //let name = document.createElement('p');
        //name.innerHTML = res.data.name;
        let pokeImage = document.createElement('img');
        pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
        //section.append(name)
        section.append(pokeImage)
    }
    async getName(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        let name = document.createElement('p');
        name.innerHTML = res.data.name;
        section.append(name)
    }
    
    /*async getName(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        let name = document.createElement('p');
        name.innerText = res.data.name;
        console.log(name)
        section.append(name)
    }*/
}


// Corss-Origin Blocking - get image from elsewhere in response
//const img = document.createElement('img');
//const poke = new Pokemon(45)
//const anotherPoke = new Pokemon(3)
//const thirdPoke = new Pokemon(91)
//img.src = poke.getImage()
//console.log(poke.getImage())
//img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png'
//img.src = poke.getImage()
//section.append(poke.getImage())
//poke.getImage()
//anotherPoke.getImage()
//thirdPoke.getImage()
fetchPokeData()
getInfoOnPoke()
