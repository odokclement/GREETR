// gets the new object
var g = G$("wesley", "mark");

// chainable methods
g.greet().setLang("es").greet(true).log();

// lets use object on the click of the login button
$("#login").click(function () {
  // create the new "Greetr" object
  var loginGrtr = G$("john", "doe");

  // hides the div with id logindiv
  $("#logindiv").hide();
  // fire of html greeting ,passing the '#greeting'as a selector and choosen language and log the welcome as well
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
