$(document).ready(function() {
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
