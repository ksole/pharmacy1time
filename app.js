
const drugs = [
  { name: "Amoxicillin (125 mg / 5 mL)", dose: 0.5, times: 3, type: "antibiotic", minAge: 0 },
  { name: "Amoxicillin (250 mg / 5 mL)", dose: 0.25, times: 3, type: "antibiotic", minAge: 0 },
  { name: "Amoxicillin+Clavulanate (156 mg / 5 mL)", dose: 0.25, times: 3, type: "antibiotic", minAge: 3 },
  { name: "Amoxicillin+Clavulanate (312 mg / 5 mL)", dose: 0.15, times: 3, type: "antibiotic", minAge: 3 },
  { name: "Amoxicillin+Clavulanate (457 mg / 5 mL)", dose: 0.2, times: 2, type: "antibiotic", minAge: 3 },
  { name: "Cephalexin (125 mg / 5 mL)", dose: 0.5, times: 3, type: "antibiotic", minAge: 1 },
  { name: "Cephalexin (250 mg / 5 mL)", dose: 0.25, times: 3, type: "antibiotic", minAge: 1 },
  { name: "Cefixime (100 mg / 5 mL)", dose: 0.4, times: 1, type: "antibiotic", minAge: 6 },
  { name: "Cefuroxime (125 mg / 5 mL)", dose: 0.25, times: 2, type: "antibiotic", minAge: 3 },
  { name: "Cefdinir (125 mg / 5 mL)", dose: 0.3, times: 2, type: "antibiotic", minAge: 6 },
  { name: "Erythromycin (125 mg / 5 mL)", dose: 0.5, times: 3, type: "antibiotic", minAge: 0 },
  { name: "Clarithromycin (125 mg / 5 mL)", dose: 0.25, times: 2, type: "antibiotic", minAge: 6 },
  { name: "Cotrimoxazole (240 mg / 5 mL)", dose: 0.25, times: 2, type: "antibiotic", minAge: 2 },
  { name: "Nitrofurantoin (25 mg / 5 mL)", dose: 0.25, times: 2, type: "antibiotic", minAge: 1 },
  { name: "Azithromycin (200 mg / 5 mL)", dose: 0.25, times: 1, type: "antibiotic", minAge: 6 },
  { name: "Metronidazole (125 mg / 5 mL)", dose: 0.4, times: 3, type: "antibiotic", minAge: 0 },
  { name: "Metronidazole (200 mg / 5 mL)", dose: 0.25, times: 3, type: "antibiotic", minAge: 0 },
  { name: "Paracetamol (125 mg / 5 mL)", dose: 0.5, times: 3, type: "analgesic", minAge: 0 },
  { name: "Paracetamol (250 mg / 5 mL)", dose: 0.25, times: 3, type: "analgesic", minAge: 0 },
  { name: "Ibuprofen (100 mg / 5 mL)", dose: 0.5, times: 3, type: "analgesic", minAge: 6 },
  { name: "Diphenhydramine (10 mg / 5 mL)", dose: 0.625, times: 3, type: "antihistamine", minAge: 24 },
  { name: "Cetirizine (5 mg / 5 mL)", dose: 0.25, times: 1, type: "antihistamine", minAge: 6 },
  { name: "Loratadine (5 mg / 5 mL)", dose: 0.2, times: 1, type: "antihistamine", minAge: 24 },
  { name: "Levocetirizine (2.5 mg / 5 mL)", dose: 0.2, times: 1, type: "antihistamine", minAge: 6 },
  { name: "Desloratadine (2.5 mg / 5 mL)", dose: 0.2, times: 1, type: "antihistamine", minAge: 6 },
  { name: "Chlorphineramine (2 mg / 5 mL)", dose: 0.4, times: 3, type: "antihistamine", minAge: 12 },
  { name: "Ondansetron (4 mg / 5 mL)", dose: 0.25, times: 2, type: "antiemetic", minAge: 6 },
  { name: "Hyoscine Butylbromide (5 mg / 5 mL)", dose: 0.45, times: 3, type: "antiemetic", minAge: 6 },
  { name: "Domperidone (5 mg / 5 mL)", dose: 0.3, times: 3, type: "antiemetic", minAge: 0 },
  { name: "Simethicone (40 mg / 1 mL)", dose: 0.3, times: 3, type: "antiemetic", minAge: 0 },
  { name: "Prednisolone (15 mg / 5 mL)", dose: 0.15, times: 2, type: "steroid", minAge: 1 },
  { name: "Prednisolone (5 mg / 5 mL)", dose: 0.5, times: 2, type: "steroid", minAge: 1 },
  { name: "Dexamethasone (0.5 mg / 5 mL)", dose: 1.0, times: 2, type: "steroid", minAge: 1 },
  { name: "Ferrous Sulfate (25 mg / 1 mL)", dose: 0.3, times: 2, type: "other", minAge: 0 },
  { name: "Zinc Sulfate (10 mg / 5 mL)", dose: 0.5, times: 2, type: "other", minAge: 0 },
  { name: "Lactulose (667 mg / mL)", dose: 2, times: 1, type: "other", minAge: 0 },
  { name: "Dimetindene (Fenistil) 1 mg / 1 mL", dose: 0.1, times: 3, type: "antihistamine", minAge: 1 }
];

function filterDrugs() {
  const category = document.getElementById('category').value;
  const medSelect = document.getElementById('med');
  medSelect.innerHTML = '';
  drugs.forEach(drug => {
    if (category === 'all' || drug.type === category) {
      const opt = document.createElement('option');
      opt.value = drug.name;
      opt.textContent = drug.name;
      medSelect.appendChild(opt);
    }
  });
}

document.addEventListener('DOMContentLoaded', filterDrugs);

function calculateDose() {
  const ageY = parseFloat(document.getElementById('ageYears').value) || 0;
  const ageM = parseFloat(document.getElementById('ageMonths').value) || 0;
  const ageInMonths = (ageY * 12) + ageM;
  const weightInput = parseFloat(document.getElementById('weight').value);
  const med = document.getElementById('med').value;
  const drug = drugs.find(d => d.name === med);
  if (!drug) return;

  let weight = weightInput;
  if (!weight) {
    weight = ageInMonths < 12
      ? 6 + (ageInMonths * 0.5)
      : 8 + (ageInMonths * 0.25);
    weight = Math.round(weight * 10) / 10;
  }

  const dosePerTime = drug.dose * weight;
  const totalDose = dosePerTime * drug.times;

  const minAgeText = drug.minAge !== undefined
    ? `<br><strong>أقل عمر لاستخدام الدواء:</strong> ${drug.minAge} ${drug.minAge < 12 ? 'شهر' : 'شهور أو أكثر'}`
    : '';

  document.getElementById('result').innerHTML = `
    <strong>الدواء:</strong> ${drug.name}<br>
    <strong>الوزن:</strong> ${weight.toFixed(1)} كجم (مقدر)<br>
    <strong>الجرعة لكل مرة:</strong> ${dosePerTime.toFixed(2)} مل<br>
    <strong>عدد الجرعات باليوم:</strong> ${drug.times} مرات<br>
    <strong>الجرعة اليومية الكلية:</strong> ${totalDose.toFixed(2)} مل
    ${minAgeText}
  `;
}
