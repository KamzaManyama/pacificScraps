// Create a button element
const button = document.createElement('button');
button.textContent = 'Call Contact';

// Add an event listener to the button
button.addEventListener('click', () => {
  // Specify the phone number
  const phoneNumber = '1234567890';

  // Check if the device is a phone (mobile)
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Open the phone's dialer with the phone number
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // Handle the error on laptops/desktops (non-phone devices)
    alert('This device is not capable of making phone calls.');
  }
});

