buttonColors=["red","blue","green","yellow"];
gamePattern=[];
userClickedPattern=[];
function nextSequence(){
  var randomNum1=Math.floor(Math.random()*3)+1;
  var randomChosenColor=buttonColors[randomNum1];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}
  $(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColour);
  });
function playSound(name){
  var audio=new Audio(sounds\name+".mp3");
  audio.play();
}
function animatePress(currentColor){
  $("#"+currentColor).addclass(".pressed");
  setTimeout(function(){
    $("#"+currentColor).removeclass(".pressed");
  },100);
};
