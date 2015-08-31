$(document).ready(function() {
  var designMenuOpen = false;
  var photoMenuOpen = false;
  var mobileMenuOpen = false;
  var rotationDesign = 0;
  var rotationPhoto = 0;

      function toggleMenuDesign(){
        event.preventDefault();
        var designMenuOpen = true;
    		$("#secondary-nav--design").slideToggle();
      }

      function toggleMenuPhotography(){
        event.preventDefault();
        var photoMenuOpen = true;
        $("#secondary-nav--photography").slideToggle();
      }

      function toggleMenuMobile(){
        event.preventDefault();
        var mobileMenuOpen = true;
        $(".primarynav").slideToggle();
      }

      $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() > 768) {
          $(".primarynav").css("display","block")
          }
      });

      $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() < 768) {
          $(".primarynav").css("display","none");
        }
      });


        $("#toggleDesignMenu").click(toggleMenuDesign);
        $("#togglePhotographyMenu").click(toggleMenuPhotography);
        $("#toggleMenu-Mobile").click(toggleMenuMobile);
        $(".royalSlider").royalSlider({
          autoScaleSlider: true,
          autoScaleSliderHeight: 450,
          loop: true,
          transitionType: "fade",
          transitionSpeed: 400,
          keyboardNavEnabled: true
        });
        $("#toggleDesignMenu").click(function(){
            rotationDesign += 180;
            $(this).find(".arrowDesign").rotate(rotationDesign);
            });
            jQuery.fn.rotate = function(degrees) {
            $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
            return $(this);
        };

});
