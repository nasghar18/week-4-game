$(document).ready(function() { 
  
  var wins = 0;
  var losses = 0;

  function target(){
  var targetNumber = Math.floor(Math.random() * 102 + 19);
  $("#number-to-guess").text(targetNumber);
  var numberOptions = [Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1)];
  var counter = 0;
  $("#score").text(counter);
  
  function resetgame(){
    targetNumber = 0;
    numberOptions = 0;
    counter = 0;
    $("#crystals").empty();
    crystalValue = 0;
  }
  
  var imgs = ["assets/images/coin2.png", "assets/images/green-mushroom2.png", "assets/images/yoshis-egg.png", 
  "assets/images/red-mushroom.png"];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageMario = $("<img>");
    imageMario.addClass("crystal-image");
    imageMario.attr("src", imgs[i]);
    imageMario.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageMario);
  }
  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
     $("#score").text(counter);
    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      resetgame();
      target();
    }
    else if (counter >= targetNumber) {
      losses++;
      $("#losses").text(losses);
      resetgame();
      target();
    }
  });
}

target();

  
   

});
