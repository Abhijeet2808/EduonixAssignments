function validate() {
  var result_text = document.getElementById("result");
  var date = document.getElementById("date").value;
  var name = document.getElementById("name").value;
  if (name.search(/^[a-zA-Z !@#$%^&*)(]{2,20}$/) == -1) {
    result_text.innerHTML = "Invalid Characters in Name";
    return;
  }
  var people = document.getElementById("people");
  var mobile_no = document.getElementById("mobile").value;
  if (mobile_no.search(/^[0-9]+$/) == -1 || mobile_no.length != 10) {
    result_text.innerHTML = "Invalid mobile number!";
    return;
  }
  alert("Reservation Successful Have A Nice Day");
  result_text.innerHTML = "Success!, Please Login To Know More";
}
