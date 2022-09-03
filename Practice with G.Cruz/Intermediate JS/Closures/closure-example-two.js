function superHero(name){
    let powerLevel = Math.random()* 100;
    return function(catchPhrase){
        console.log(`My name is ${name}. Power Level is ${powerLevel} and ${catchPhrase}`)
    }
}

let toiletManCatchPhrase = superHero("Toilet Paper Man");
toiletManCatchPhrase("I'm going to wipe the floor with you!");
toiletManCatchPhrase("Did someone say flush?")

// let batmanCatchPhrase = superHero("Batman");
// batmanCatchPhrase("I am vengeance!")

superHero("Batman")("I am vengeance!")

