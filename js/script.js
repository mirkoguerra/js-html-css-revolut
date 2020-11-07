$(document).ready(function(){

  $('.has-dropdown').click(function(){

        // al click su uno dei link, rendo invisibili i figli dei fratelli dell'elenco di link
        $(this).siblings().children('.dropdown').removeClass("active");

        // al click su uno dei link, faccio apparire / scomparire suo figlio
        $(this).children('.dropdown').toggleClass('active');

    });

  $(document).click(function(event){

    // se viene cliccato un punto della pagina che non ha il tag <a>, la classe active viene rimossa dagli elementi che hanno la classe dropdown
    if (event.target.tagName !== 'A') {
      $('.dropdown').removeClass('active');
    }

  });

});
