(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44699912-27', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
  $(".color li").click(function() {
    $(".color li").removeClass("active");
    $(this).addClass("active");
    var id=$(this).index(".color li");
    $(".product").css("background-image", "url(product/"+id+".jpg)");
    $(".form").removeClass("active");
    $(".form-" + id).addClass("active");
    $(".purchase>h2").text($(".form-" + id).attr("pname"));
  });

  $(".buy").click(function() {
    $('html, body').animate({
      scrollTop: $(".product").offset().top - 200
    }, 1000);
  });

  $(".tab>div").click(function() {
    $(".tab>div").removeClass("active");

    $(".tab-content>div").removeClass("active");
    $(".tab-content ." + $(this).attr("class")).addClass("active");

    $(this).addClass("active");
  });

  $("form").submit(function() {
    fbq('track', 'InitiateCheckout');
    ga('send', 'pageview', 'InitiateCheckout');
    console.log("Track Init Check Out");
  });
});
