
let person = {
 name: 'feven',
 age: 23,
 gender:'undefined',
}

//dot notation
person.gender = 'female'
person.age= 24;

console.log(person);

// bracket notation
person['name'] = 'Eyosi';
person['gender'] = 'male'
person['age'] = 12;

console.log(person);



let selectedcolors = ['red', 'pink'];
selectedcolors[1]= 'black';
console.log(selectedcolors.length);



function greet(name){
    console.log('hello' + " " + name);
}

greet('feven');
greet("eyosi");



