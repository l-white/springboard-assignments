import fruits from "./foods";

function choice(){
    return(fruits[Math.floor(Math.random()*fruits.length)]); 
}

function remove(item){
    const remainingFruits = fruits.filter(e => e !== item);
    const listItems = remainingFruits.map((remainingFruit, id) => <li key={id}>{remainingFruit}</li>)
    
    return (
        <ul>{listItems}</ul>
    );
}

export {choice, remove};
