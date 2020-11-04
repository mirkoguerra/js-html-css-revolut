$(document).ready(function(){

  $('.has-dropdown').click(function(){

        $('.has-dropdown').children().removeClass('active');

        $(this).children().addClass('active');

    })

});
