// Initialize array of male and female Akan names
const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Initialize instances to calculate the day of the week
function calculateDayOfWeek() {
  var myBirthday = document.getElementById("myBirthday").value;
  var dateOfBirth=new Date();
  var entry = myBirthday.split("-");
  dateOfBirth.setFullYear(parseInt(entry[0]));
  dateOfBirth.setMonth(parseInt(entry[1])-1);
  dateOfBirth.setDate(parseInt(entry[2]));
  return dateOfBirth.getDay();
}
// This function will fetch the Akan name for the day of the week and specified gender
function findAkanName() {
  var gender = document.getElementById("gender").value;
  if (gender === "male") {
    alert("Your Akan Name is: "+maleAkanNames[calculateDayOfWeek()]);
  } else {
    alert("Your Akan Name is: "+femaleAkanNames[calculateDayOfWeek()]);
  }
  return false;
}
