$('h4').typeIt({
  speed: 80
});

$( ".fa-user" ).click(function() {
  $("#about").toggleClass("on");
  $("#about p").toggleClass("onInfo");
  $(".fa-user").toggleClass("onIcon");
  $("h1").toggleClass("lighterGrey");
  $("#projects").toggleClass("off");
  $("#resume").toggleClass("off");
  $("#contact").toggleClass("off");
}
);

$( ".fa-cogs" ).click(function() {
  $("#projects").toggleClass("on");
  $("#projects p").toggleClass("onInfo");
  $(".fa-cogs").toggleClass("onIcon");
  $("h1").toggleClass("darkerGrey");
  $("#about").toggleClass("off");
  $("#resume").toggleClass("off");
  $("#contact").toggleClass("off");
}
);

$( ".ion-settings" ).click(function() {
  $("#resume").toggleClass("on");
  $("#resume p").toggleClass("onInfo");
  $("#resume div").toggleClass("onInfo");
  $(".ion-settings").toggleClass("onIcon");
  $("#about").toggleClass("off");
  $("#projects").toggleClass("off");
  $("#contact").toggleClass("off");
  $(".cPlusPlus").animate({width: '90%'}, 2000);
  $(".css").animate({width: '85%'}, 2000);
  $(".js").animate({width: '65%'}, 2000);
  $(".java").animate({width: '50%'}, 2000);
}
);

$( ".fa-phone" ).click(function() {
  $("#contact").toggleClass("on");
  $("#contact p").toggleClass("onInfo");
  $("#contact a").toggleClass("onInfo");
  $(".fa-phone").toggleClass("onIcon");
  $("#about").toggleClass("off");
  $("#projects").toggleClass("off");
  $("#resume").toggleClass("off");
  $("h1").toggleClass("lighterGrey");
}
);
