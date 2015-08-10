
  // var h = $("header").height();
  // $(".main__nav").height(h);
  // $(".socialmedia").height(h);
$(document).ready(function() {
    function showSecondaryNavDesign(){
      event.preventDefault();
  		$("#secondary__nav--design--container").slideDown();
      $("#showSecondaryNav__Design").hide();
      $("#hideSecondaryNav__Design").show();
    }
    $("#showSecondaryNav__Design").click(showSecondaryNavDesign);

    function hideSecondaryNavDesign(){
      event.preventDefault();
  		$("#secondary__nav--design--container").slideUp();
      $("#hideSecondaryNav__Design").hide();
      $("#showSecondaryNav__Design").show();
    }
    $("#hideSecondaryNav__Design").click(hideSecondaryNavDesign);

    function showSecondaryNavPhotography(){
      event.preventDefault();
      $("#secondary__nav--photography--container").slideDown();
      $("#showSecondaryNav__Photography").hide();
      $("#hideSecondaryNav__Photography").show();
    }
    $("#showSecondaryNav__Photography").click(showSecondaryNavPhotography);

    function hideSecondaryNavPhotography(){
      event.preventDefault();
      $("#secondary__nav--photography--container").slideUp();
      $("#hideSecondaryNav__Photography").hide();
      $("#showSecondaryNav__Photography").show();
    }
    $("#hideSecondaryNav__Photography").click(hideSecondaryNavPhotography);
});
