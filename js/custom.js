$(document).ready(function () {
  $("#btn_menu_check_trigger").click(function () {
    $(".action-hover-setting").removeClass("show");
    $("#btn_menu_setting > img").attr("src", "./images/button_setting.png");
    $(".action-hover").toggleClass("show");
    if ($(".action-hover").hasClass("show")) {
      $("#btn_menu_check_trigger > img").attr("src", "./images/close.png");
    } else {
      $("#btn_menu_check_trigger > img").attr("src", "./images/check.png");
    }
  });

  $("#btn_menu_setting").click(function () {
    $(".action-hover-setting").toggleClass("show");
    $(".action-hover").removeClass("show");
    $("#btn_menu_check_trigger > img").attr("src", "./images/check.png");
    if ($(".action-hover-setting").hasClass("show")) {
      $("#btn_menu_setting > img").attr("src", "./images/close-red.png");
    } else {
      $("#btn_menu_setting > img").attr("src", "./images/button_setting.png");
    }
  });

  $(".question-list-item").click(function () {
    $(this).toggleClass("active");
    $(".question-list-item").not(this).removeClass("active");
  });

  $("#continue-button").click(function () {
    start();
    $(".timer-icon").attr("src", "./images/icon/pause.png");
    $(".timer-icon").removeClass("paused");
    $(".timer-count").removeClass("paused");
    $("#pause-modal").removeClass("show");
    $(".content").removeClass("disabled");
    $("#timer-button").attr("disabled", false);
    $("#crossword").removeClass("disabled");
  });

  $("#timer-button").click(function () {
    pause();
    $("#timer-button").attr("disabled", true);
    $(".timer-count").addClass("paused");
    $(".timer-icon").addClass("paused");
    $(".timer-icon").attr("src", "./images/icon/play.png");
    $(".timer-icon").addClass("play");
    $("#pause-modal").addClass("show");
    $(".content").addClass("disabled");
    $("#crossword").addClass("disabled");
  });

  $("#surrender-button").click(function () {
    if (confirm("Are you sure?")) {
      pause();
      $("#crossword").hide();
      $("#pause-modal").removeClass("show");
      $("#result").show();
      console.log($(".timeresult"));
    }
  });
});
