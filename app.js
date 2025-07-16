// مثال مبسط من app.js النهائي مع الأدوية
const drugs = [
  {
    name: "Amoxicillin (125 mg / 5 mL)",
    type: "antibiotic",
    minAge: 0,
    concentration: 25, // mg per mL
    options: {
      "التهاب أذن وسطى": { doseMgKg: 60, times: 3 },
      "التهاب لوزتين": { doseMgKg: 90, times: 3 },
      "التهاب رئة": { doseMgKg: 90, times: 3 }
    }
  },
  {
    name: "Paracetamol (125 mg / 5 mL)",
    type: "analgesic",
    minAge: 0,
    concentration: 25,
    options: {
      "خافض حرارة": { doseMgKg: 15, times: 4 },
      "مسكن ألم": { doseMgKg: 10, times: 3 }
    }
  },
  {
    name: "Zinc Sulfate (10 mg / 5 mL)",
    type: "other",
    minAge: 0,
    concentration: 2,
    options: {
      "إسهال حاد": { doseMgKg: 20, times: 1 },
      "مكمل غذائي": { doseMgKg: 10, times: 1 }
    }
  }
];

const weightsByAge = {
  months: [0, 4.4, 5.3, 6, 6.5, 7, 7.5, 7.9, 8.2, 8.5, 8.8, 9, 9.3],
  years: [0, 10, 12.3, 14.3, 16, 18, 20, 23, 25, 27, 32, 36, 41]
};

function filterDrugs() {
  const category = document.getElementById("category").value;
  const medSelect = document.getElementById("med");
  medSelect.innerHTML = "";
  drugs.forEach((drug) => {
    if (category === "all" || drug.type === category) {
      const opt = document.createElement("option");
      opt.value = drug.name;
      opt.textContent = drug.name;
      medSelect.appendChild(opt);
    }
  });
}

function showConditions() {
  const selected = document.getElementById("med").value;
  const drug = drugs.find(d => d.name === selected);
  const container = document.getElementById("conditionContainer");
  const condSelect = document.getElementById("condition");
  condSelect.innerHTML = "";
  if (drug && drug.options) {
    container.style.display = "block";
    Object.keys(drug.options).forEach(key => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = key;
      condSelect.appendChild(opt);
    });
  } else {
    container.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", filterDrugs);

function calculateDose() {
  const ageY = parseFloat(document.getElementById("ageYears").value) || 0;
  const ageM = parseFloat(document.getElementById("ageMonths").value) || 0;
  const ageInMonths = ageY * 12 + ageM;
  const weightInput = parseFloat(document.getElementById("weight").value);
  const selected = document.getElementById("med").value;
  const drug = drugs.find(d => d.name === selected);
  const condition = document.getElementById("condition").value;

  let weight = weightInput;
  if (!weight) {
    if (ageInMonths <= 12 && weightsByAge.months[ageInMonths]) {
      weight = weightsByAge.months[ageInMonths];
    } else if (ageY <= 12 && weightsByAge.years[ageY]) {
      weight = weightsByAge.years[ageY];
    } else {
      weight = ageInMonths < 12 ? (ageInMonths + 9) / 2 : (ageY * 2) + 8;
    }
  }

  let doseMgKg = drug.options ? drug.options[condition].doseMgKg : 10;
  let times = drug.options ? drug.options[condition].times : 3;
  const mlPerMg = 1 / drug.concentration;
  const dosePerTime = doseMgKg * mlPerMg * weight;
  const totalDose = dosePerTime * times;

  document.getElementById("result").innerHTML = `
    <strong>الدواء:</strong> ${drug.name}<br>
    <strong>الحالة:</strong> ${condition}<br>
    <strong>الوزن:</strong> ${weight.toFixed(1)} كجم (مقدر)<br>
    <strong>الجرعة لكل مرة:</strong> ${dosePerTime.toFixed(2)} مل<br>
    <strong>عدد الجرعات باليوم:</strong> ${times} مرات<br>
    <strong>الجرعة اليومية الكلية:</strong> ${totalDose.toFixed(2)} مل
  `;
}