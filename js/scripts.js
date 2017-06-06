$(document).ready(function() {
  $("form#text-form").submit(function(event) {
    var inputString = $("input#text").val();
    //alert(inputString + " " + inputString.length);
    var outputArray = [];
    var outputString = "";

    for (var i=0; i < inputString.length; i+=1) {
      outputArray[i] = inputString.charAt(i);
    }

    for (var i=0; i < outputArray.length; i++) {
      if (outputArray[i] === 'e' || outputArray[i] === 'a' || outputArray[i] === 'i' || outputArray[i] === 'o' || outputArray[i] === 'u') {
        outputArray[i] = '-';
      }
    }

    for (var i=0; i < outputArray.length; i++) {
      outputString = outputString.concat(outputArray[i]);
    }
    //alert(outputString);
    //alert(outputArray.toString());
    $("#phrase").text(outputString);
    $("#text-form").hide();
    $("#puzzle").show();

    event.preventDefault();
  });
  $("#backButton").click(function() {
    $("#text-form").show();
    $("#puzzle").hide();
  });
});
