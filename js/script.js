function calculateAge() {
  var dobInput = index.getElementById("dob");
  var dob = dobInput.value;
  var now = new Date();
  var birthdate = new Date(dob);
  var age = now.getFullYear() - birthdate.getFullYear();
  var m = now.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthdate.getDate())) {
    age--;
  }
  index.getElementById("age").value = age;
}

var dobInput = index.getElementById("dob");
dobInput.addEventListener("change", calculateAge);