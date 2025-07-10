// --- Embedded Data Section from latest CSV ---
const countries = [
  "United Kingdom", "France", "Romania", "Germany", "Spain", "Netherlands", "Czechia", "Egypt", "Morocco", "Saudi Arabia"
];

const athletes = [
  { name: "Jude Bellingham", sport: "Football", gender: "Male", nationality: "United Kingdom", cost: 1.5, social: 42477875, data: [10.0,3.8,3.1,9.8,6.8,5.6,4.1,2.1,2.7,2.7] },
  { name: "Bukayo Saka", sport: "Football", gender: "Male", nationality: "United Kingdom", cost: 0.75, social: 13480403, data: [10.0,2.0,2.2,2.0,2.5,2.4,1.9,1.9,1.7,2.0] },
  { name: "Jamal Musiala", sport: "Football", gender: "Male", nationality: "Germany", cost: 1.5, social: 10444721, data: [2.6,1.8,2.1,6.9,2.4,2.2,1.8,1.8,1.6,1.8] },
  { name: "Omar Marmoush", sport: "Football", gender: "Male", nationality: "Egypt", cost: 0.5, social: 6058172, data: [2.6,1.6,2.0,3.1,2.0,1.9,1.6,7.3,1.6,2.3] },
  { name: "Achraf Hakimi", sport: "Football", gender: "Male", nationality: "Morocco", cost: 0.75, social: 29572448, data: [2.3,4.4,2.4,3.1,6.2,2.7,1.8,2.5,10.0,2.9] },
  { name: "Virgil Van Dijk", sport: "Football", gender: "Male", nationality: "Netherlands", cost: 1.2, social: 20925752, data: [7.3,2.6,3.0,2.6,3.5,8.4,2.5,3.6,2.7,3.0] },
  { name: "Aitana Bonmati", sport: "Football", gender: "Female", nationality: "Spain", cost: 0.5, social: 2829806, data: [0.6,0.4,0.4,0.4,4.9,0.5,0.2,0.2,0.3,0.3] },
  { name: "Salma Paralluelo", sport: "Football", gender: "Female", nationality: "Spain", cost: 0.25, social: 670322, data: [0.6,0.3,0.4,0.4,4.1,0.4,0.2,0.1,0.1,0.2] },
  { name: "Alexia Putellas", sport: "Football", gender: "Female", nationality: "Spain", cost: 0.3, social: 5233736, data: [0.7,0.5,0.4,0.4,6.1,0.6,0.3,0.2,0.4,0.3] },
  { name: "Sakina Karachaoui", sport: "Football", gender: "Female", nationality: "France", cost: 0.25, social: 1065976, data: [1.6,3.8,0.4,0.4,0.7,0.5,0.2,0.1,2.2,0.2] },
  { name: "Lauren James", sport: "Football", gender: "Female", nationality: "United Kingdom", cost: 0.4, social: 2397576, data: [3.0,0.4,0.4,0.4,0.6,0.5,0.2,0.1,0.1,0.2] },
  { name: "Leah Williamson", sport: "Football", gender: "Female", nationality: "United Kingdom", cost: 0.5, social: 1603454, data: [3.7,0.4,0.4,0.4,0.7,0.6,0.2,0.1,0.1,0.2] },
  { name: "Farah Jefry", sport: "Football", gender: "Female", nationality: "Saudi Arabia", cost: 0.1, social: 551454, data: [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.0,3.4] },
  { name: "Carlos Alcaraz", sport: "Tennis", gender: "Male", nationality: "Spain", cost: 2.5, social: 8625490, data: [1.9,2.2,2.0,1.0,10.0,1.2,1.6,0.6,0.7,0.9] },
  { name: "Alex Zverez", sport: "Tennis", gender: "Male", nationality: "Germany", cost: 0.5, social: 3000741, data: [1.6,1.5,1.8,3.1,1.7,1.0,1.6,0.6,0.6,0.9] },
  { name: "Ons Jabeur", sport: "Tennis", gender: "Female", nationality: "Tunisia", cost: 0.5, social: 3305023, data: [1.5,1.4,1.7,0.8,1.5,0.9,1.3,2.6,2.6,1.0] },
  { name: "Marketa Vondrousova", sport: "Tennis", gender: "Female", nationality: "Czechia", cost: 0.5, social: 172069, data: [1.4,1.3,1.7,0.8,1.4,0.9,4.2,0.6,0.6,0.9] },
  { name: "Iga Swiatek", sport: "Tennis", gender: "Female", nationality: "Poland", cost: 0.6, social: 3123359, data: [1.7,1.4,1.8,0.9,1.6,1.0,1.5,0.6,0.6,0.9] },
  { name: "Carlos Sainz", sport: "Motorsport", gender: "Male", nationality: "Spain", cost: 1.0, social: 18686079, data: [4.4,1.8,1.6,1.5,10.0,4.6,1.6,0.3,0.4,1.0] },
  { name: "Pierre Gasly", sport: "Motorsport", gender: "Male", nationality: "France", cost: 0.75, social: 8316921, data: [2.7,4.6,1.2,1.2,2.0,4.6,1.2,0.3,0.4,0.9] },
  { name: "Charles Leclerc", sport: "Motorsport", gender: "Male", nationality: "Monaco", cost: 1.5, social: 28033179, data: [4.4,5.5,2.1,2.0,3.2,4.7,2.0,0.3,0.5,1.0] },
  { name: "Lando Norris", sport: "Motorsport", gender: "Male", nationality: "United Kingdom", cost: 1.5, social: 17715648, data: [7.5,1.7,1.5,1.8,3.0,6.6,1.7,0.3,0.4,1.0] },
  { name: "Marc Marquez", sport: "Motorsport", gender: "Male", nationality: "Spain", cost: 0.6, social: 18250532, data: [1.1,0.9,0.5,0.6,10.0,0.7,0.8,0.1,0.1,0.3] },
  { name: "Dania Akeel", sport: "Motorsport", gender: "Female", nationality: "Saudi Arabia", cost: 0.075, social: 34663, data: [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.1] },
  { name: "Victor Wembanyama", sport: "Basketball", gender: "Male", nationality: "France", cost: 3.0, social: 6461011, data: [0.8,5.9,0.9,0.7,1.6,0.7,0.7,0.4,0.4,0.7] },
  { name: "Luka Doncic", sport: "Basketball", gender: "Male", nationality: "Slovenia", cost: 3.0, social: 18774339, data: [1.1,1.3,1.1,1.0,4.6,0.8,0.9,0.5,0.5,0.8] },
  { name: "Nikola Jokic", sport: "Basketball", gender: "Male", nationality: "Serbia", cost: 2.0, social: 690000, data: [0.6,0.7,0.8,0.6,1.2,0.5,0.6,0.4,0.4,0.7] },
  { name: "Remo Evenepoel", sport: "Cycling", gender: "Male", nationality: "Belgium", cost: 0.3, social: 1815913, data: [0.8,1.2,0.8,0.6,1.8,1.4,1.2,0.2,0.4,0.2] },
  { name: "Mathieu Van Der Poel", sport: "Cycling", gender: "Male", nationality: "Netherlands", cost: 0.5, social: 1575890, data: [0.8,1.2,0.8,0.6,1.8,4.5,1.1,0.2,0.3,0.2] },
  { name: "Leon Marchand", sport: "Aquatics", gender: "Male", nationality: "France", cost: 0.35, social: 1669426, data: [0.2,5.2,0.5,0.3,0.5,0.2,0.2,0.1,0.1,0.2] },
  { name: "Armand Duplantis", sport: "Track & Field", gender: "Male", nationality: "Sweden", cost: 0.2, social: 1487878, data: [1.0,0.9,0.5,0.7,0.7,0.6,1.1,0.2,0.5,0.4] },
  { name: "Katarina Johnson-Thompson", sport: "Track & Field", gender: "Female", nationality: "United Kingdom", cost: 0.25, social: 532054, data: [3.5,0.5,0.5,0.6,0.6,0.5,0.9,0.2,0.5,0.4] },
  { name: "Femke Bol", sport: "Track & Field", gender: "Female", nationality: "Netherlands", cost: 0.3, social: 649187, data: [0.9,0.5,0.5,0.6,0.6,3.8,0.9,0.2,0.5,0.4] },
  { name: "Nafissatou Thiam", sport: "Track & Field", gender: "Female", nationality: "Belgium", cost: 0.2, social: 360431, data: [0.9,0.6,0.5,0.6,0.6,0.6,0.9,0.2,0.5,0.4] },
  { name: "Alica Schmidt", sport: "Track & Field", gender: "Female", nationality: "Germany", cost: 0.5, social: 8355712, data: [1.3,0.9,0.7,3.9,1.1,1.0,1.6,0.2,0.6,0.4] },
  { name: "Ewa Swoboda", sport: "Track & Field", gender: "Female", nationality: "Poland", cost: 0.25, social: 1151987, data: [1.0,0.5,0.5,0.6,0.6,0.6,0.9,0.2,0.5,0.4] },
  { name: "Bebe Vio", sport: "Fencing", gender: "Female", nationality: "Italy", cost: 0.075, social: 1418672, data: [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0] }
];
// --- End Embedded Data Section ---

let radarChart;

// Utility: format number with commas
function formatNumber(num) {
  return Number(num).toLocaleString();
}
function formatMillionEuros(num) {
  return "€" + Number(num).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "m";
}

function populateOptionsPanel() {
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";
  athletes.forEach((athlete, idx) => {
    const label = document.createElement("label");
    label.className = "athlete-option";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = idx;
    checkbox.checked = idx < 5;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(athlete.name));
    optionsList.appendChild(label);
    optionsList.appendChild(document.createElement("br"));
  });
  optionsList.addEventListener("change", () => {
    updateChart();
    updateSummary();
  });
}

function getSelectedAthleteIndices() {
  const optionsList = document.getElementById("options-list");
  const checkboxes = optionsList.querySelectorAll("input[type=checkbox]");
  return Array.from(checkboxes).reduce((arr, cb, idx) => {
    if (cb.checked) arr.push(idx);
    return arr;
  }, []);
}

function getColor(index) {
  const palette = [
    "#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6",
    "#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3",
    "#808000","#ffd8b1","#000075","#808080","#000000"
  ];
  return palette[index % palette.length];
}

function updateChart() {
  if (!athletes.length || !countries.length) return;
  const selected = getSelectedAthleteIndices();

  const athleteDatasets = selected.map(idx => ({
    label: athletes[idx].name,
    data: athletes[idx].data,
    fill: true,
    borderColor: getColor(idx),
    backgroundColor: getColor(idx) + "55",
    pointBackgroundColor: getColor(idx),
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: getColor(idx)
  }));

  const cumulativeData = cumulativeCountryScores(selected).map(Number);
  const cumulativeDataset = {
    label: 'Cumulative Country Score',
    data: cumulativeData,
    fill: false,
    borderColor: '#222',
    borderWidth: 3,
    borderDash: [10, 6],
    pointBackgroundColor: '#222',
    pointBorderColor: '#fff',
    pointRadius: 6,
    pointHoverRadius: 8,
    order: 0
  };

  const datasets = [...athleteDatasets, cumulativeDataset];

  if (radarChart) {
    radarChart.data.labels = countries;
    radarChart.data.datasets = datasets;
    radarChart.update();
  } else {
    const ctx = document.getElementById("radarChart").getContext("2d");
    radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: countries,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: false }
        },
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 10,
            pointLabels: { display: true },
            ticks: { display: false }
          }
        }
      }
    });
  }
}

function summarizeByKey(selectedIndices, key) {
  const summary = {};
  selectedIndices.forEach(idx => {
    const value = athletes[idx][key];
    summary[value] = (summary[value] || 0) + 1;
  });
  return summary;
}

function totalSocial(selectedIndices) {
  return selectedIndices.reduce((sum, idx) => sum + athletes[idx].social, 0);
}
function totalCost(selectedIndices) {
  return selectedIndices.reduce((sum, idx) => sum + (athletes[idx].cost || 0), 0);
}

function cumulativeCountryScores(selectedIndices) {
  if (selectedIndices.length === 0) return Array(countries.length).fill("0.0");
  return countries.map((_, countryIdx) => {
    const scores = selectedIndices.map(idx => Number(athletes[idx].data[countryIdx]));
    if (scores.length === 0) return "0.0";
    const maxScore = Math.max(...scores);
    const restScores = scores.filter(x => x !== maxScore);
    let total = maxScore + 0.6 * restScores.reduce((a, b) => a + b, 0);
    if (total > 10) total = 10;
    return total.toFixed(1);
  });
}
function averageCountryScore(cumulativeScores) {
  if (!cumulativeScores.length) return "0.0";
  const sum = cumulativeScores.reduce((acc, val) => acc + parseFloat(val), 0);
  return (sum / cumulativeScores.length).toFixed(1);
}

function updateSummary() {
  if (!athletes.length || !countries.length) return;
  const selected = getSelectedAthleteIndices();
  const cumulativeScores = cumulativeCountryScores(selected);
  const sportSummary = summarizeByKey(selected, "sport");
  const genderSummary = summarizeByKey(selected, "gender");
  const nationalitySummary = summarizeByKey(selected, "nationality");
  const socialSum = totalSocial(selected);
  const costSum = totalCost(selected);

  document.getElementById('athlete-count-number').textContent = selected.length;
  document.getElementById('sport-count-number').textContent = Object.keys(sportSummary).length;
  document.getElementById('sport-breakdown-context').textContent =
    Object.entries(sportSummary).map(([sport, count]) => `${sport}: ${count}`).join(", ") || "-";
  document.getElementById('gender-count-number').textContent = Object.keys(genderSummary).length;
  document.getElementById('gender-breakdown-context').textContent =
    Object.entries(genderSummary).map(([gender, count]) => `${gender}: ${count}`).join(", ") || "-";
  document.getElementById('nationality-count-number').textContent = Object.keys(nationalitySummary).length;
  document.getElementById('nationality-breakdown-context').textContent =
    Object.entries(nationalitySummary).map(([nation, count]) => `${nation}: ${count}`).join(", ") || "-";
  document.getElementById('social-following-number').textContent = formatNumber(socialSum);
  document.getElementById('total-cost-number').textContent = formatMillionEuros(costSum);

  let tableHtml = `<table class="country-score-table"><tr><th>Country</th><th>Cumulative Score</th></tr>`;
  for (let i = 0; i < countries.length; i++) {
    tableHtml += `<tr>
      <td class="country-name">${countries[i]}</td>
      <td class="cumulative-score">${cumulativeScores[i]}</td>
    </tr>`;
  }
  tableHtml += `</table>`;
  const avgScore = averageCountryScore(cumulativeScores);
  tableHtml += `
    <div class="dashboard-box" id="avg-market-score-box" style="margin-top:12px;">
      <div class="dashboard-number" id="avg-market-score-number">${avgScore}</div>
      <div class="dashboard-label">Avg. Country Score</div>
    </div>
  `;
  document.getElementById("country-table-container").innerHTML = tableHtml;
}

// Initial render
populateOptionsPanel();
updateChart();
updateSummary();