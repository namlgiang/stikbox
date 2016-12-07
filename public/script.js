(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44699912-28', 'auto');
ga('send', 'pageview');

$(document).ready(function() {

  $(".color").val(0);
  $(".size").val(0);

  $(".color").change(function() {
    var color = $(".color").val();
    var size = $(".size").val();
    $(".product-image").attr("src", "color/"+ color +".jpg");
    $(".forms>div").removeClass("active");
    $(".form" + color + size).addClass("active");
  });

  $(".size").change(function() {
    var color = $(".color").val();
    var size = $(".size").val();
    $(".forms>div").removeClass("active");
    $(".form" + color + size).addClass("active");
  });

  $(".buy").click(function() {
    $('html, body').animate({
      scrollTop: $(".product").offset().top - 100
    }, 1000);
  });

  var color = 0;
  setInterval(function() {
    color = (color+1)%4;
    $(".color-1").css("background-image", "url(color/"+color+".jpg)");
    $(".color-1").animate({opacity: 1}, 500, function() {
      $(".color-0").css("background-image", "url(color/"+color+".jpg)");
      $(".color-1").css("opacity", 0);
    });
  }, 1500);

  $("form").submit(function() {
    fbq('track', 'InitiateCheckout');
    ga('send', 'pageview', 'InitiateCheckout');
    console.log("Track Init Check Out");
  });
});
