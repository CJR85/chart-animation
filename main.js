const ctx = document.getElementById('myChart').getContext('2d');

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
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
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
