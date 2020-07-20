$(document).ready(function() {
    var lastId,
   topMenu = $(".click-menu"),
   topMenuHeight = topMenu.outerHeight()+1,
   // All list items
   menuItems = topMenu.find("a"),
   // Anchors corresponding to menu items
   scrollItems = menuItems.map(function(){
     var item = $($(this).attr("href"));
      if (item.length) { return item; }
   });
    //animate scroll
   menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
  });


  $(".group .btn").on("click",function(){

    var nb = 0;
    var require = $("form .require");
    var message = $(".message");

    require.each(function(){
        if($.trim($(this).val())==""){
            $(this).parent("div").addClass("error");
            nb++;
        }
        else{
            $(this).parent("div").removeClass("error");
        }
    });

    if(nb==0){
        var email = $("#con_email");
        var content = $("#con_message");
        var nom = $("#con_name");

        var serverURI = 'https://e-cine.xyz/laviesurmars_backend/API/jarce/index.php';

        const sendmail = fetch(serverURI,
            {
                method: 'POST',
                body: JSON.stringify({
                data: {"email": $.trim(email.val()), "content": $.trim(content.val()), "nom": $.trim(nom.val())}
            })
        })
        .then(response => response.json())
        .then(res => {
            var data = res.data;
            if(!data.error) {
                if(data.return == "<i class='fas fa-exclamation-circle'></i> Le format de votre email est incorrect"){
                    email.parent("div").addClass("error");
                    message.addClass("error");
                    message.removeClass("success");
                }
                else{
                    email.parent("div").removeClass("error");
                    message.removeClass("error");
                    message.addClass("success");
                    require.val("");
                }
                message.html(data.return);
                
            }
            else{
                message.addClass("error");
                message.removeClass("success");
                message.html("<i class='fas fa-exclamation-circle'></i> Une erreur est survenue, veuillez réessayer plus tard");
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    else{
        message.addClass("error");
        message.removeClass("success");
        message.html("<i class='fas fa-exclamation-circle'></i> Veuillez remplir tous les champs");
    }
    
});



    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
      
     var fromTop = $(this).scrollTop()+topMenuHeight;
      var cur = scrollItems.map(function(){
      
       if ($(this).offset().top < fromTop)
          
         return this;
     });
       // Get the id of the current element
     cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }    
    });
  
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    
  
    $(function() {
  
      // Cache the Window object
      var $window = $(window);
  
      // Parallax Backgrounds
      // Tutorial: https://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
  
      $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning the object
  
        $window.scroll(function() {
  
          // Scroll the background at var speed
          // the yPos is a negative value because we're scrolling it UP!								
          var yPos = -($window.scrollTop() / $bgobj.data('speed'));
  
          // Put together our final background position
          var coords = '50% ' + yPos + 'px';
  
          // Move the background
          $bgobj.css({
            backgroundPosition: coords
          });
  
        }); // end window scroll
      });
  
    });
    
  
  });


$('form').on( 'change keyup keydown paste cut', 'textarea', function (){
    $(this).height(0).height(this.scrollHeight);
}).find( 'textarea' ).change();

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


