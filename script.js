$('h4').typeIt({
  speed: 80
});

$( ".fa-user" ).click(function() {
  $("#about").addClass("on");
  $("#about p").addClass("onInfo");
  $(".fa-user").addClass("onIcon");
  $("h1").addClass("lighterGrey");
  $("#projects").addClass("off");
  $("#resume").addClass("off");
  $("#contact").addClass("off");
  $(".arrow1").show();
}
);

$(".arrow1").click(function() {
  $("#about").removeClass("on");
  $("#about p").removeClass("onInfo");
  $(".fa-user").removeClass("onIcon");
  $("h1").removeClass("lighterGrey");
  $("#projects").removeClass("off");
  $("#resume").removeClass("off");
  $("#contact").removeClass("off");
  $(".arrow1").hide();
})

$( ".fa-cogs" ).click(function() {
  $("#projects").addClass("on");
  $("#projects p").addClass("onInfo");
  $(".fa-cogs").addClass("onIcon");
  $("h1").addClass("darkerGrey");
  $("#about").addClass("off");
  $("#resume").addClass("off");
  $("#contact").addClass("off");
  $(".arrow2").show();
}
);

$( ".arrow2" ).click(function() {
  $("#projects").removeClass("on");
  $("#projects p").removeClass("onInfo");
  $(".fa-cogs").removeClass("onIcon");
  $("h1").removeClass("darkerGrey");
  $("#about").removeClass("off");
  $("#resume").removeClass("off");
  $("#contact").removeClass("off");
  $(".arrow2").hide();
}
);

var clickedProjects = false;

$( ".fa-wrench" ).click(function() {
  $("#resume").addClass("on");
  $("#resume p").addClass("onInfo");
  $("#resume div").addClass("onInfo");
  $(".fa-wrench").addClass("onIcon");
  $("#about").addClass("off");
  $("#projects").addClass("off");
  $("#contact").addClass("off");
  if (!clickedProjects) {
    clickedProjects = true;
    $(".cPlusPlus").animate({width: '90%'}, 2000);
    $(".css").animate({width: '85%'}, 2000);
    $(".js").animate({width: '65%'}, 2000);
    $(".java").animate({width: '50%'}, 2000);
  }
  $(".arrow3").show();
}
);

$( ".arrow3" ).click(function() {
  clickedProjects = false;
  $(".cPlusPlus").width('0%');
  $(".css").width('0%');
  $(".js").width('0%');
  $(".java").width('0%');
  $("#resume").removeClass("on");
  $("#resume p").removeClass("onInfo");
  $("#resume div").removeClass("onInfo");
  $(".fa-wrench").removeClass("onIcon");
  $("#about").removeClass("off");
  $("#projects").removeClass("off");
  $("#contact").removeClass("off");
  $(".arrow3").hide();
});

$( ".fa-phone" ).click(function() {
  $("#contact").addClass("on");
  $("#contact p").addClass("onInfo");
  $("#contact a").addClass("onInfo");
  $(".fa-phone").addClass("onIcon");
  $("#about").addClass("off");
  $("#projects").addClass("off");
  $("#resume").addClass("off");
  $("h1").addClass("lighterGrey");
  $(".arrow4").show();
}
);

$( ".arrow4" ).click(function() {
  $("#contact").removeClass("on");
  $("#contact p").removeClass("onInfo");
  $("#contact a").removeClass("onInfo");
  $(".fa-phone").removeClass("onIcon");
  $("#about").removeClass("off");
  $("#projects").removeClass("off");
  $("#resume").removeClass("off");
  $("h1").removeClass("lighterGrey");
  $(".arrow4").hide();
}
);
