
function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  const serviceID= "service_dg5ee6d";
  const templateID= "template_c9fsr4t";
  
  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
      document.getElementById("name").value ="";
      document.getElementById("email").value ="";
      document.getElementById("phone").value ="";
      document.getElementById("message").value ="";
      console.log(res);
      alert("your message sent successfully");
    })
  .catch(err=>console.log(err));
}


