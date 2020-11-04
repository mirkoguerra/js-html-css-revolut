$(document).ready(function(){

  $("section.nav-bar div.right-nav-bar div.links a:first-of-type").click(function(){
    $("section.ghost-boxes div.features-box").toggleClass("visible");
  });

});
