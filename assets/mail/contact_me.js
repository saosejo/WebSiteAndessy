$(function () {
    $(
        "#contactForm input,#contactForm textarea,#contactForm button"
    ).jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(" ") >= 0) {
                firstName = name.split(" ").slice(0, -1).join(" ");
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            
            Email.send({
            SecureToken: "f6468787-b8d3-4669-9756-e25dfb096154",
            To : 'contacto@andessy.com',
            From : email,
            Subject :  "Andessy Website Contact Form: " + name,
            Body : "<html><h2>Información</h2><strong>Mensaje: </strong>"+message+"<br></br><strong> Número de contacto: </strong> "+phone+"</html>"
            }).then(
                 message => showAlert(message)
            );

       },
        filter: function () {
            return $(this).is(":visible");
        },
    });


    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});


function showAlert(message) {
    if (message == "OK") {

         // Success message
        $("#success").html("<div class='alert alert-success'>");
        $("#success > .alert-success").html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        ).append("</button>");
        $("#success > .alert-success").append(
                        "<strong>Tu mensaje ha sido enviado, pronto nos comunicaremos contigo. </strong>"
                    );
        $("#success > .alert-success").append("</div>");
        //clear all fields
        $("#contactForm").trigger("reset");
        $this = $("#sendMessageButton");
        $this.prop("disabled", false); // Disable submit button until AJAX call is complete to prevent duplicate messages
            
    }else{

        //Fail message
                    $("#success").html("<div class='alert alert-danger'>");
                    $("#success > .alert-danger")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong>").text(
                            "Lo siento " +
                                firstName +
                                ", parece que mi servidor de correo no responde. Por favor, inténtelo de nuevo más tarde!"
                        )
                    );
                    $("#success > .alert-danger").append("</div>");
                    //clear all fields
                    $("#contactForm").trigger("reset");
    }

}