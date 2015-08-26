$(document).ready(function() {

  $(".royalSlider").royalSlider({
    autoScaleSlider: true,
    autoScaleSliderHeight: 475,
    loop: true,
    transitionType: "fade",
    transitionSpeed: 400,

    keyboardNavEnabled: true
          });

  var designMenuOpen = false;
  var photoMenuOpen = false;
      function toggleMenuDesign(){
        event.preventDefault();
        var designMenuOpen = true;
    		$("#secondary-nav--design").slideToggle();
        if (photoMenuOpen = true) {
          $("#secondary-nav--design").show();
          $("#secondary-nav--photography").hide();
        }
      }


        $("#toggleDesignMenu").click(toggleMenuDesign);
        $("#togglePhotographyMenu").click(toggleMenuPhotography);


});
