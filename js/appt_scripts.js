$(document).ready(function() {
  $("#appt form").submit(function(event) {
    var client = $("input#clientName").val();
    var apptDate = $("input#dateOfAppt").val();
    var apptStart = $("input#startTime").val();
    var apptEnd = $("input#endTime").val();

    $(".clientName").text(client);
    $(".dateOfAppt").text(apptDate);
    $(".startTime").text(apptStart);
    $(".endTime").text(apptEnd);

    event.preventDefault();
  });



});
