function gotoregister() {
    var destinationPage = "register.html";
    window.location.href = destinationPage;
}
function gotologin() {
    var destinationPage = "login.html";
    window.location.href = destinationPage;
}
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetForm() {
    document.getElementById('mainform1').reset();
}

function validation() {
    var email = document.getElementById('email');
    var phone = document.getElementById('phoneNo');
    var pass = document.getElementById('password');
    var age = document.getElementById('age')
    var name = document.getElementById('name')
    if (!validateEmail(email.value)) {
        alert("Enter a valid email");
        resetForm();
        return;
    }
    else if (pass.value.length < 8) {
        alert("Password should be at least 8 characters long");
        resetForm();
        return;
    }
    else if (isNaN(phone.value)) {
        alert("Please enter only numbers for the Phone Number");
        resetForm();
        return;
    }
    else if (isNaN(age.value)) {
        alert("Please enter only numbers for the age ");
        resetForm();
        return;
    }
    else if (!isNaN(name.value)) {
        alert("Please enter only numbers for the age ");
        resetForm();
        return;
    }
    else {
        gotologin();
    }
}
