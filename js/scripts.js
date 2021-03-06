$(function () {
    $(".carousel").carousel({
      interval: 4000
    });
    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
      } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
      }
    });
  });

  $("#openContBtn").click(function () {
    $("#contactModal").modal('show')
  });

  $("#closeContactButton").click(function () {
    $("#contactModal").modal('hide')
  });