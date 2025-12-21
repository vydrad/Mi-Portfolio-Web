(function(){
    emailjs.init("_dlyN5CbujWLKDVk8");
  })();

  document.getElementById("contact-form")
    .addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_4sf6coh",
        "template_9oks78j",
        this
      )
      .then(() => {
        alert("Mensaje enviado correctamente 👍");
        this.reset();
      }, (error) => {
        alert("Error al enviar el mensaje 😢");
        console.error(error);
      });
    });