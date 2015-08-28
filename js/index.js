$(document).ready(function() {
  var designMenuOpen = false;
  var photoMenuOpen = false;

      function toggleMenuDesign(){
        event.preventDefault();
        var designMenuOpen = true;
    		$("#secondary-nav--design").slideToggle();
        $(".rotateDesign").rotate(180);
      }

      function toggleMenuPhotography(){
        event.preventDefault();
        var photoMenuOpen = true;
        $("#secondary-nav--photography").slideToggle();
      }


        $("#toggleDesignMenu").click(toggleMenuDesign);
        $("#togglePhotographyMenu").click(toggleMenuPhotography);
        $(".royalSlider").royalSlider({
          autoScaleSlider: true,
          autoScaleSliderHeight: 475,
          loop: true,
          transitionType: "fade",
          transitionSpeed: 400,

          keyboardNavEnabled: true
        });


});
