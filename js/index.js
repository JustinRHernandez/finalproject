
  // var h = $("header").height();
  // $(".main__nav").height(h);
  // $(".socialmedia").height(h);
$(document).ready(function() {
    function showSecondaryNav(){
      event.preventDefault();
  		$("#secondary__nav--design--container").slideDown();
      $("#showSecondaryNav__Design").hide();
      $("#hideSecondaryNav__Design").show();
    }
    $("#showSecondaryNav__Design").click(showSecondaryNav);

    function hideSecondaryNav(){
      event.preventDefault();
  		$("#secondary__nav--design--container").slideUp();
      $("#hideSecondaryNav__Design").hide();
      $("#showSecondaryNav__Design").show();
    }
    $("#hideSecondaryNav__Design").click(hideSecondaryNav);
});
