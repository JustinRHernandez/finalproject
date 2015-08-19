
  // var h = $("header").height();
  // $(".main__nav").height(h);
  // $(".socialmedia").height(h);
$(document).ready(function() {
  // var isMenuOpen = false;
      function toggleMenuDesign(){
        event.preventDefault();
    		$("#secondary-nav--design").slideToggle();
        angle = (angle+90)%360;
        img.rotateDesign = "rotate"+angle;
        // $(".rotateDesign").toggleClass("rotate-reset");
      }

      function toggleMenuPhotography(){
        event.preventDefault();
        $("#secondary-nav--photography").slideToggle();
      }

        $("#toggleDesignMenu").click(toggleMenuDesign);
        $("#togglePhotographyMenu").click(toggleMenuPhotography);

    // function hideSecondaryNavDesign(){
    //   event.preventDefault();
  	// 	$("#secondary__nav--design--container").slideUp();
    //   $("#hideSecondaryNav__Design").hide();
    //   $("#showSecondaryNav__Design").show();
    // }
    // $("#hideSecondaryNav__Design").click(hideSecondaryNavDesign);
    //
    // function showSecondaryNavPhotography(){
    //   event.preventDefault();
    //   $("#secondary__nav--photography--container").slideDown();
    //   $("#showSecondaryNav__Photography").hide();
    //   $("#hideSecondaryNav__Photography").show();
    // }
    // $("#showSecondaryNav__Photography").click(showSecondaryNavPhotography);
    //
    // function hideSecondaryNavPhotography(){
    //   event.preventDefault();
    //   $("#secondary__nav--photography--container").slideUp();
    //   $("#hideSecondaryNav__Photography").hide();
    //   $("#showSecondaryNav__Photography").show();
    // }
    // $("#hideSecondaryNav__Photography").click(hideSecondaryNavPhotography);
});
