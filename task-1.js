function sendMail(){
    let form = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_y0hgaps","template_ajumas4",form).then(alert("Email Sent"))
}