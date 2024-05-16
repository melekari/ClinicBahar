function sendMail() {
  const txtName = document.getElementById("name").value;
  const txtEmail = document.getElementById("email").value;
  const txtPhone = document.getElementById("phone").value;
  const txtMessage = document.getElementById("message").value;

  if (txtName === '' || txtEmail === '' || txtPhone === '' || txtMessage === '') {
    alert('Please fill in all fields');
    return;
  }

  var params = {
    name: txtName,
    email: txtEmail,
    phone: txtPhone,
    message: txtMessage,
  };
  const serviceID = "service_dg5ee6d";
  const templateID = "template_c9fsr4t";

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
      })
    .catch(err => console.log(err));
}