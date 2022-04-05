console.log("hello world");
console.log(10+3);
console.log(14+13);
console.log(2+3);
let phrase = "Singed est grave bg"
console.log(phrase)
let name = "Silva"
let Firstname = "Ricardo"
let city = "Brussels"
console.log(' My name is '+ Firstname +' ' + name + ' and i live in ' + city)

let age = prompt("how old are you")

if (age >= 18 ) {
console.log('You are an adult')
} else {
console.log('you are not an adult')
}

let min = Number(prompt('min number between 0 and 10 pas inclus'))
let max = Number(prompt('max number between 0 and 10 pas inclus'))
let current = Number(prompt('current number between 0 and 10 pas inclus'))


if(min > current) {
    console.log('you are dumb')
}

else if(current > max) {
    console.log('you are dumb')
}
else if(max < min) {
    console.log('you are dumb')
}
else if(min < current) {
    console.log('you are smart')
}
else if(current < max) {
    console.log('you are smart')
}
else if (min < max){
    console.log('you are smart')
}

else { 
    console.log('you are dumb')
}



