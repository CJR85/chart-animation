const ctx = document.getElementById('myChart').getContext('2d');

let delayed;

// Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58,123,213,1)');
gradient.addColorStop(1, 'rgba(0,210,255,0.3)');

const labels = [
  'Black Ops',
  'Modern Warfare 3',
  'Black Ops 2',
  'Ghosts',
  'Black Ops 3',
];

const data = {
  labels,
  datasets: [
    {
      data: [30.72, 30.71, 29.59, 28.98, 26.72],
      label: 'Call of Duty Sales',
      fill: true,
      backgroundColor: gradient,
      borderColor: '#fff',
      pointBackgroundColor: '#555',
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    radius: 5,
    hitRadius: 30,
    hoverRadius: 12,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return '$' + value + 'm';
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
