// Initialize array of male and female Akan names
const maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
const femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];
// Initialize instances to collect form data
function collectUserInfo() {
  let form = document.forms[0];
  let day, month, year, gender;

  gender = form.gender.value;

  day = parseInt(form.day.value);
  month = parseInt(form.month.value);
  year = parseInt(form.year.value);

  return [gender, day, month, year];
}
// Initialize instances to calculate the day of the week
function calculateDayOfWeek(birthDate) {
  let [dayOfMonth, monthOfYear, yearOfBirth] = birthDate;
  let centuryDigits, yearDigits;


  if (monthOfYear < 1) {
    monthOfYear += 12;
    yearOfBirth -= 1;
  }


  centuryDigits= parseInt(yearOfBirth/100);
  yearDigits=parseInt(yearOfBirth%100);

  let dayOfWeek = (parseInt(((centuryDigits/4)-2*centuryDigits-1)+(5*parseInt(yearDigits/4))+(parseInt(26*(monthOfYear + 1)/10 +dayOfMonth)))%7)-1;
  return dayOfWeek;
}
// This function will fetch the Akan name for the day of the week and specified gender
function findAkanName() {
  let formData = collectUserInfo();
  let userBirthDate, userGender, dayOfWeek;

  [userGender, ...userBirthDate] = formData;
  dayOfWeek = calculateDayOfWeek(userBirthDate);

  if (userGender === "Male") {
    alert("Your Akan Name is: "+maleAkanNames[dayOfWeek]);
  } else {
    alert("Your Akan Name is: "+femaleAkanNames[dayOfWeek]);
  }
  return false;
}
