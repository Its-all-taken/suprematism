$(document).ready(function(){
  $(".arrow").click(function (){
      $(".d-rect").toggleClass("anim-2")
    })
  $(".b-square").click(function (){
    let bgColor= ["#000", "#FDFBED", "#A7A2A9", "#93C6D6", "#881600", "#C16200"];
    let ranColor = bgColor[Math.floor(Math.random()*bgColor.length)];
    $(".b-square").click(function(i,val){
      $("body").css("background-color",ranColor);
      $(".arrow").toggleClass("ani-a");
    })
  });
});
