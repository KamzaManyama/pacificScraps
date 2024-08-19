function sendMail() {
    // Initialize EmailJS with your user ID
    emailjs.init('user_YaS3r0qUci5udv2LRt'); // Replace 'maredi' with your actual user ID from EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent the form from submitting the traditional way

         // Get form values
         const name = document.getElementById('cf-name').value;
         const email = document.getElementById('cf-email').value;
         const subject = document.getElementById('cf-subject').value;
         const message = document.getElementById('cf-message').value;

         // Validate input
         if (email && message.length > 1) {
              // Send the email via EmailJS
              emailjs.send('service_kxg9n0f', 'template_1yecj9e', {
                   name: name,
                   email: email,
                   subject: subject,
                   message: message,
                   to_email: 'kmanyama@009@gmail.com' // The target email
              }).then(function(response) {
                   document.getElementById('success-message').style.display = 'block';
                   document.getElementById('error-message').style.display = 'none';
              }, function(error) {
                   console.error('Error:', error);
                   document.getElementById('success-message').style.display = 'none';
                   document.getElementById('error-message').style.display = 'block';
              });
         } else {
              document.getElementById('success-message').style.display = 'none';
              document.getElementById('error-message').style.display = 'block';
         }
    });
}

// Call the sendMail function to initialize the form handler
sendMail();
