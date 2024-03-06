
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

const ctx4= document.getElementById('scatterchart');

new Chart(ctx4, {
  type: 'scatterchart',
  data: {
    labels: ['Ethiopia', 'china', 'usa', 'norway', 'Alabania', 'Sweden'],
    datasets: [{
      label: '300',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1


const ctx4= document.getElementById('scatterchart');

new Chart(ctx4, {
  type: 'scatterchart',
  data: {
    labels: ['Ethiopia', 'china', 'usa', 'norway', 'Alabania', 'Sweden'],
    datasets: [{
      label: '300',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
      
    }]
  },
});

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

const config = {
    type: 'line',
    data: data,
  };


