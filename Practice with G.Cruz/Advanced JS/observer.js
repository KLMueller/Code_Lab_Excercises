class Observable {
    subscribers = [];
    
    subscribe(fn){
        this.subscribers.push(fn)
    }
unsubscribe(fn){
    this.subscribers = this.subscribers.filter((removeFn)=>{
        return fn != removeFn

    })
}

    broadcast(value){
        this.subscribers.forEach((fn)=>{
fn(value)
        })
    }
}
let celebrityObsv = new Observable();
celebrityObsv.subscribe((event)=>{
    console.log(`I am going to ${event}.`);
})

// celebrityObsv.subscribe((event)=>{
//     console.log(`I am not going to ${event}.`);
// })

const someFan = (event) =>{
    console.log(`I am not going to the ${event}.`);
}
celebrityObsv.subscribe(someFan)
// console.log(celebrityObsv)
celebrityObsv.broadcast("Disco Morning");
celebrityObsv.unsubscribe(someFan)
celebrityObsv.broadcast("Fun Night Concert")

