const ctx2= document.getElementById('doughnut');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Ethiopia', 'china', 'usa', 'norway', 'Alabania', 'Sweden'],
    datasets: [{
      label: '300',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const config = {
    type: 'doughnut',
    data: data,
  };
  // giving data set
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
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

  
  
