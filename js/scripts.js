/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict



    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    $("#firstService").hover(function(){
      $("#server").attr('data-icon', "plus");
      }, function(){
      $("#server").attr('data-icon', "server");
    });

    $("#secondService").hover(function(){
      $("#arquitectura").attr('data-icon', "plus");
      }, function(){
      $("#arquitectura").attr('data-icon', "sitemap");
    });


    $("#thirdService").hover(function(){
      $("#productividad").attr('data-icon', "plus");
      }, function(){
      $("#productividad").attr('data-icon', "chart-line");
    });

    $("#fourService").hover(function(){
      $("#planeacion").attr('data-icon', "plus");
      }, function(){
      $("#planeacion").attr('data-icon', "users-cog");
    });

    $("#fiveService").hover(function(){
      $("#consultoria").attr('data-icon', "plus");
      }, function(){
      $("#consultoria").attr('data-icon', "diagnoses");
    });

    $("#sixService").hover(function(){
      $("#conocimiento").attr('data-icon', "plus");
      }, function(){
      $("#conocimiento").attr('data-icon', "lightbulb");
    });

     $("#firstService").click(function() {
         $("#myModal").find('.modal-title').text("Server Migration");
         $('#imgModal').attr('src','assets/img/aws/server.png');
         
         $("#textModal").text("De la mano de técnicos especializados, entendemos las necesidades informáticas de nuestro cliente, el estado de las mismas y las expectativas de la compañía en términos de transformación digital. Luego, a partir de un marco de referencia de buenas prácticas, diseñamos en conjunto una estrategia para lograr una migración ágil y amigable de los datos de sus servicios o aplicaciones. Nos apoyamos en los diferentes servicios que ofrece AWS bajo la premisa de: excelencia operacional, seguridad, confianza, eficiencia de desempeño y optimización de costos.");
        $('#myModal').modal('show');
     });


     $("#secondService").click(function() {
         $("#myModal").find('.modal-title').text("Arquitectura empresarial/software");
        $('#imgModal').attr('src','assets/img/aws/arquitecture.png');
         
         $("#textModal").text("Diagnosticamos arquitecturas locales para entregar un plan detallado de cuellos de botella, ineficiencias, sobrecostos y tecnologías subutilizadas para luego rediseñar arquitecturas a través de buenas prácticas en los estilos y patrones de software.");
        $('#myModal').modal('show');
     });

       $("#thirdService").click(function() {
         $("#myModal").find('.modal-title').text("Mejoras en productividad");
       $('#imgModal').attr('src','assets/img/aws/productivity.png');
         
         $("#textModal").text("Bajo un proceso sencillo y siguiendo marcos metodológicos, podemos capturar eventos por medio de soluciones informáticas y electrónicas (IoT) y analizamos procesos que puedan estar sujetos a algún tipo de automatización a través de soluciones informáticas o patrones matemáticos que nos ayuden a encontrar comportamientos que lleven al resultado de una mayor productividad.");
        $('#myModal').modal('show');
     });

        $("#fourService").click(function() {
         $("#myModal").find('.modal-title').text("Sistema de planificación y control de equipos de trabajo");
       $('#imgModal').attr('src','assets/img/aws/teams.png');
         
         $("#textModal").text("Se compone por una suite de herramientas informáticas que permiten planificar la carga de trabajo de los equipos de la compañía para luego poder tener un seguimiento detallado de su gestión y cumplimiento de tareas. ");
         $("#textModal2").text("Servicios AWS involucrados: EC2, RDS, DynamoDB");

        $('#myModal').modal('show');
     });

      $("#fiveService").click(function() {
         $("#myModal").find('.modal-title').text("Consultoría de arquitecturas empresariales");
       $('#imgModal').attr('src','assets/img/aws/arquitectureconsultor.png');
         
         $("#textModal").text("A través de nuestra metodología de diagnóstico, entramos a analizar los cuellos de botella e ineficiencias en el uso de las tecnologías actuales que usa el cliente para luego diseñar arquitecturas idóneas y así lograr mejores fases de productividad y consulta de la información. Todo esto basado en los servicios (IaaS, PaaS y SaaS de AWS).");
         $("#textModal2").text("Servicios AWS involucrados: Cloudformation, IAM, EC2, VPC, SQS, SNS");

        $('#myModal').modal('show');
     });

      $("#sixService").click(function() {
         $("#myModal").find('.modal-title').text("Consultoría de generación de conocimiento");
       $('#imgModal').attr('src','assets/img/aws/knowlege.png');
         
         $("#textModal").text("A través del proceso de descubrimiento de conocimiento basado en datos (KDD), Andessy ofrece a sus clientes la posibilidad de generar reportes gerenciales, tableros de control/dashboards para el equipo administrativo y de operaciones basado en las necesidades del cliente.");
         $("#textModal2").text("Servicios AWS involucrados: Sergemaker, Rekognition, Polly, Lex, Redshift, Lake Formation");

        $('#myModal').modal('show');
     });


    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
