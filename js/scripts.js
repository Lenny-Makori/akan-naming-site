// Initialize array of male and female Akan names
const maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi"
];
const femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua"
];
// Initialize instances to collect form data
function fetchFormData() {
  let form = document.forms[0];
  let day, month, year, gender;

  gender = form.gender.value;

  day = parseInt(form.day.value);
  month = parseInt(form.month.value);
  year = parseInt(form.year.value);

  return [gender, day, month, year];
}
