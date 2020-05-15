$(document).ready(function () {
  // $("#btn_menu_clear").click(function () {
  //   $("#pause-modal").removeClass("show");
  //   $("#crossword").removeClass("disabled");
  // });
  $("#btn_menu_check_trigger").click(function () {
    $(".action-hover--setting").removeClass("show");
    $("#btn_menu_setting > img").attr("src", "./images/cog.png");
    $(".action-hover--check").toggleClass("show");
    if ($(".action-hover--check").hasClass("show")) {
      $("#btn_menu_check_trigger > img").attr("src", "./images/close.png");
    } else {
      $("#btn_menu_check_trigger > img").attr("src", "./images/check.png");
    }
  });

  $("#btn_menu_setting").click(function () {
    $(".action-hover--setting").toggleClass("show");
    $(".action-hover--check").removeClass("show");
    $("#btn_menu_check_trigger > img").attr("src", "./images/check.png");
    if ($(".action-hover--setting").hasClass("show")) {
      $("#btn_menu_setting > img").attr("src", "./images/close.png");
    } else {
      $("#btn_menu_setting > img").attr("src", "./images/cog.png");
    }
  });

  $(".question-list-item").click(function () {
    $(this).toggleClass("active");
    $(".question-list-item").not(this).removeClass("active");
  });

  $("#continue-button").click(function () {
    start();
    reset();
  });

  $("#timer-button").click(function () {
    pause();
    $("#timer-button").attr("disabled", true);
    $(".timer-count").addClass("paused");
    $(".timer-icon").addClass("paused");
    $(".timer-icon").attr("src", "./images/play.png");
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
