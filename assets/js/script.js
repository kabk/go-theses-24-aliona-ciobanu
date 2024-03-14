// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function () {
  // $(".poem").on("mouseenter", (event) => {
  //   $(".poem").addClass("colurd");
  // });
  // $(".poem").on("mouseleave", (event) => {
  //   $(".poem").removeClass("colurd");
  // });

  $(".flowers").on("mouseenter", (event) => {
    $(".poem").addClass("colurd");
  });
  $(".flowers").on("mouseleave", (event) => {
    $(".poem").removeClass("colurd");
  });
  // functions go here
  $(".intro").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "2.5fr 1fr 1fr 1fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".intro").toggleClass("active");
  });

  $(".part1").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1.5fr 1fr 1fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part1").toggleClass("active");
  });

  $(".part2").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1.5fr 1fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part2").toggleClass("active");
  });

  $(".part3").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1.5fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part3").toggleClass("active");
  });

  $(".part4").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1.5fr 1fr 1fr 1fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
      // $(".intro .block-title").css("background", "rgba(0,0,0, 0.1)");
      // $(".title-grid2").css("display", "none");
      // $(".title-grid").css("grid-template-columns", "1fr");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part4").toggleClass("active");
  });

  $(".part5").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1.5fr 1fr 1fr");
      // $(".block-title").css("background", "#fff");
      // $(".part1 .block-title").css("background", "rgba(0,0,0, 0.1)");
      // $(".title-grid2").css("display", "block");
      $(".title-grid").css("grid-template-columns", "1fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part5").toggleClass("active");
  });

  $(".part6").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1.5fr 1fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
      // $(".part2 .block-title").css("background", "rgba(0,0,0, 0.1)");
      // $(".title-grid2").css("display", "block");
      $(".title-grid").css("grid-template-columns", "1fr 1fr");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part6").toggleClass("active");
  });

  $(".conclusion").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1.5fr");
      $("nav div").removeClass("active");
      // $(".block-title").css("background", "#fff");
      // $(".part3 .block-title").css("background", "rgba(0,0,0, 0.1)");
      // $(".title-grid2").css("display", "block");
      $(".title-grid").css("grid-template-columns", "1fr 1fr");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".conclusion").toggleClass("active");
  });
  $(".active").on("click", () => {
    $(".active").toggleClass("active");
    // $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
  });

  // $(".poem").on("click", (event) => {
  //   $(".poem").removeClass("clicked");
  //   $(this).addClass("clicked");
  // });
});
