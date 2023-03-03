function calculateAge() {
  var now = new Date();
  var birthdate = new Date(document.getElementById("dob"));
  var age = now.getFullYear() - birthdate.getFullYear();
  var m = now.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthdate.getDate())) {
    age--;
  }
  document.getElementById("age").value = age;
}
  
// Attach an event listener to the date of birth field
var dobInput = document.getElementById("dob");
dobInput.addEventListener("change", calculateAge);