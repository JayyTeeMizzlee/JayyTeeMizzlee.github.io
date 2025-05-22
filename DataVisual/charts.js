class ChartRenderer {
    constructor(labels, data) {
      this.labels = labels;
      this.data = data;
    }
  
    renderDoughnut(canvasId, title) {
      new Chart(document.getElementById(canvasId), {
        type: "doughnut",
        data: {
          labels: this.labels,
          datasets: [{
            label: "Visitor Count",
            data: this.data,
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: title
            }
          }
        }
      });
    }
  
    renderBar(canvasId, title) {
      new Chart(document.getElementById(canvasId), {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [{
            label: "Number of Visitors",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: this.data,
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            title: {
              display: true,
              text: title
            }
          },
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
  