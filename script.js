document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '!');
      
      // Reset the form after successful submission
      document.getElementById('contactForm').reset();
      
      // Optionally, you can refresh the page (if you prefer a full page reload)
      // location.reload();
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.send("service_eijmuge", "__ejs-test-mail-service__", {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        alert('Message sent successfully!');  // Notify the user
    }, function(error) {
        alert('Failed to send message. Please try again later.');  // Notify the user on error
    });
});
