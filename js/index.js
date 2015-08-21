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

      function toggleMenuPhotography(){
        event.preventDefault();
        var photoMenuOpen = true;
        $("#secondary-nav--photography").slideToggle();
        if (designMenuOpen = true) {
          $("#secondary-nav--photography").show();
          $("#secondary-nav--design").hide();
        }
      }

        $("#toggleDesignMenu").click(toggleMenuDesign);
        $("#togglePhotographyMenu").click(toggleMenuPhotography);




});
