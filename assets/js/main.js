$(document).ready(function(){
    $(window).scroll(function(){


       if($(this).scrollTop()>=200){
           // $('#top').fadeIn();

           $('#top').css({
              bottom:"20px",
           });
       }
       

       else{
           // $('#top').fadeOut();

           $('#top').css({
               bottom:"-60px",
            });
       }

    });
});


       
$(document).ready(function(){
    $('#top').click(function(e){
     e.preventDefault();

       $('body,html').animate({
        scrollTop:0
       },1000);
       
    });
});


