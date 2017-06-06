$(document).ready(function() {
  $("form#text-form").submit(function(event) {
    var inputString = $("input#text").val();
    //alert(inputString);
    var outputArray = [];

    for (var i=0; i <= inputString.length; i++) {
      if (inputString.chatAt(i) === "e") {
        outputArray[i] = "-";
      } else {
        outputArray[i] = inputString.charAt(i);
      }
    }
    alert(outputArray.toString());

    event.preventDefault();
  });
});
