$(document).ready(function() {
  var designMenuOpen = false;
  var photoMenuOpen = false;
  var mobileMenuOpen = false;

      function toggleMenuDesign(){
        event.preventDefault();
        var designMenuOpen = true;
    		$("#secondary-nav--design").slideToggle(450);
      }

      function toggleMenuPhotography(){
        event.preventDefault();
        var photoMenuOpen = true;
        $("#secondary-nav--photography").slideToggle(450);
      }

      function toggleMenuMobile(){
        event.preventDefault();
        var mobileMenuOpen = true;
        $(".primarynav").slideToggle(450);
      }



        $("#toggleDesignMenu").click(toggleMenuDesign);
        $("#togglePhotographyMenu").click(toggleMenuPhotography);
        $("#toggleMenu-Mobile").click(toggleMenuMobile);
        $(".royalSlider").royalSlider({
          autoScaleSlider: true,
          autoScaleSliderHeight: 475,
          loop: true,
          transitionType: "fade",
          transitionSpeed: 400,

          keyboardNavEnabled: true
        });
});
