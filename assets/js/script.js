// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function () {
  // functions go here
  $(".intro").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "2fr 1fr 1fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".intro").toggleClass("active");
  });

  $(".part1").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 2fr 1fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part1").toggleClass("active");
  });

  $(".part2").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 2fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part2").toggleClass("active");
  });

  $(".part3").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 2fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part3").toggleClass("active");
  });

  $(".part4").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "2fr 1fr 1fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part4").toggleClass("active");
  });

  $(".part5").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 2fr 1fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part5").toggleClass("active");
  });

  $(".part6").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 2fr 1fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".part6").toggleClass("active");
  });

  $(".conclusion").on("click", (event) => {
    if (!event.currentTarget.classList.contains("active")) {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 3fr");
      $("nav div").removeClass("active");
    } else {
      $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
    }
    $(".conclusion").toggleClass("active");
  });
  $(".active").on("click", () => {
    $(".active").toggleClass("active");
    // $("nav").css("gridTemplateColumns", "1fr 1fr 1fr 1fr");
  });
});
