$(document).ready(function(){
  $("#nameForm form").submit(function(event) {
    var person = $("input#nameInput").val();
    $(".nameInput").text(person);

    var company = $("input#companyInput").val().toUpperCase();
    $(".companyInput").text(company);




    $("#story").show();

    event.preventDefault();

  });



});
