
function validate() {
    var fname = document.getElementById('firstname');
    var lname = document.getElementById('lastname');
    var email = document.getElementById('email');

    if (email.value.length === 0 || fname.value.length === 0 || lname.value.length === 0) {
        alert("One or more fields are incorrect please enter correct information and try again");
        return false;
    }
    else {
        alert("Form processed successfully.");
        return true;
    }

}
