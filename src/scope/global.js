var hello = 'Hello'
let world = 'Hello world!'
const helloworld = 'Hello world*'

const greet = () => {
    console.log(hello)
    console.log(world)
    console.log(helloworld)
}
 
greet()

// No hacer esto!!! es una mala práctica!!

const helloWorld = () => {
    globalVar = 'Im global' 
}

helloWorld()
console.log(globalVar)