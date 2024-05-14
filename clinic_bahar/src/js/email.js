import {emailjs} from "https://cdn.emailjs.com/dist/email.min.js";
  
  emailjs.init("user_ReBNROvUztgbj_AoQ");

  function sendEmail() {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Send email
    emailjs.send("service_5rdlsqo", "template_olqjwdr", {
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
      .then(function(response) {
        console.log("Email sent successfully!", response);
        // Optionally, show a success message or redirect the user
      }, function(error) {
        console.error("Email could not be sent", error);
        // Optionally, show an error message
      });
  }

