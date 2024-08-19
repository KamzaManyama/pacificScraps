document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide all previous messages and errors
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('subject-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';

    // Validate the form
    let valid = true;
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    }

    if (!subject) {
        document.getElementById('subject-error').style.display = 'block';
        valid = false;
    }

    if (message.length <= 1) {
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    }

    if (valid) {
        // Simulate a successful form submission
        document.getElementById('success-message').style.display = 'block';
        // Reset the form fields
        document.getElementById('contact-form').reset();
    } else {
        // Show the error message
        document.getElementById('error-message').style.display = 'block';
    }
});
