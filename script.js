

document.getElementById('jessica-taylor').addEventListener('click', function() {
  fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
      'Authorization': 'Basic ' + btoa('coalition:skills-test')
    }
  })
  .then(response => response.json())
  .then(data => {
    const jessica = data.find(patient => patient.name === 'Jessica Taylor');
    if (jessica) {
      document.getElementById('profile-image').src = jessica.profile_picture;
      document.getElementById('patient-name').textContent = jessica.name;
      document.getElementById('dob').textContent = jessica.date_of_birth;
      document.getElementById('gender').textContent = jessica.gender;
      document.getElementById('phone').textContent = jessica.phone_number;
      document.getElementById('insurance').textContent = jessica.insurance_type;

      // Update Diagnosis History
      const diagnosisList = document.getElementById('diagnosis-list');
      console.log(diagnosisList);
      diagnosisList.innerHTML = '';
      jessica.diagnosis_history.forEach(diagnosis => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${diagnosis.name}</td>
          <td>${diagnosis.description}</td>
          <td>${diagnosis.status}</td>
        `;
        diagnosisList.appendChild(row);
      });

      // Update Lab Results
      const labResultsList = document.querySelector('.lab-results ul');
      labResultsList.innerHTML = '';
      jessica.lab_results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        labResultsList.appendChild(listItem);
      });
    }
  })
  .catch(error => console.error('Error fetching data:', error));
});




  document.addEventListener("DOMContentLoaded", function () {
    const jessicaElement = document.getElementById("jessica-taylor");

    jessicaElement.addEventListener("click", function () {
      // Sample data for Jessica Taylor
      const respiratoryRate = "18 bpm";
      const respiratoryStatus = "Normal";

      const temperature = "98.7°F";
      const temperatureStatus = "Normal";

      // Update DOM with values
      document.getElementById("respiratory-rate").textContent = respiratoryRate;
      document.getElementById("respiratory-status").textContent = respiratoryStatus;

      document.getElementById("temperature").textContent = temperature;
      document.getElementById("temperature-status").textContent = temperatureStatus;

        document.getElementById("heart-rate").textContent = "72 bpm";
    document.getElementById("heart-status").textContent = "Normal";
    });
  });






// CHART CODE

 const ctx = document.getElementById('bloodPressureChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Blood Pressure (mmHg)',
        data: [120, 125, 130, 128, 132, 127],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          suggestedMin: 100,
          suggestedMax: 140
        }
      }
    }
  });


