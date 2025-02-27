function validateForm() {
    let isValid = true;

   
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.innerText = '');

   
    const firstName = document.getElementById('first-name');
    if (!firstName.value.trim()) {
        document.getElementById('first-name-error').innerText = 'First name is required.';
        isValid = false;
    }

    
    const lastName = document.getElementById('last-name');
    if (!lastName.value.trim()) {
        document.getElementById('last-name-error').innerText = 'Last name is required.';
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

   
    const contact = document.getElementById('contact');
    const contactPattern = /^[0-9]{10}$/;
    if (!contact.value || !contactPattern.test(contact.value)) {
        document.getElementById('contact-error').innerText = 'Please enter a valid 10-digit mobile number.';
        isValid = false;
    }

 
    const aadhar = document.getElementById('aadhar').value.trim();
    if (!/^\d{12}$/.test(aadhar)) {
        isValid = false;
        document.getElementById('aadharError').innerText = "Aadhar number should be a 12-digit number.";
    }

    
    const pan = document.getElementById('pan').value.trim();
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
        isValid = false;
        document.getElementById('panError').innerText = "Invalid PAN Card number.";
    }
    const password = document.getElementById('password');
    if (!password.value || password.value.length < 6) {
        document.getElementById('password-error').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }


    const confirmPassword = document.getElementById('confirm-password');
    if (confirmPassword.value !== password.value) {
        document.getElementById('confirm-password-error').innerText = 'Passwords do not match.';
        isValid = false;
    }

    let marks = [];
    for (let i = 1; i <= 6; i++) {
        marks.push(Number(document.getElementById(`subject${i}`).value));
    }
    marks = marks.filter(mark => mark > 0);
    if (marks.length < 5) {
        isValid = false;
        document.getElementById('marksError').innerText = "Please enter marks for at least 5 subjects.";
    } else {
        marks.sort((a, b) => b - a);
        const percentage = (marks.slice(0, 5).reduce((sum, mark) => sum + mark, 0) / 5);
        alert(`Your percentage for the best of 5 subjects is: ${percentage.toFixed(2)}%`);
    } 
    
    return isValid;
}
