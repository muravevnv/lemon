// $("#fullpage").fullpage({
//   scrollOverflow: true,
//   scrollOverflowReset: true,
//   onScrollOverflow: function (section, slide, position, direction) {
//     var params = {
//       section: section,
//       slide: slide,
//       position: position,
//       direction: direction,
//     };

//     console.log("--- onScrollOverflow ---");
//     console.log(params);
//   },
//   beforeLeave: function (section) {
//     console.log(section)
//   },
// });

var myFullpage = new fullpage('#fullpage', {
  // scrollOverflow: true,
  // scrollOverflowReset: true,
  // onScrollOverflow: function (section, slide, position, direction) {
  //   var params = {
  //     section: section,
  //     slide: slide,
  //     position: position,
  //     direction: direction,
  //   };

  //   console.log("--- onScrollOverflow ---");
  //   console.log(params);
  // },
  beforeLeave: function (section) {
    console.log(section)
  },
});

// phone mask

$(".js-phone").inputmask({ mask: "+7(999) 999-9999" });

// modal

$(".js-open-modal").on("click", () => {
  $(".modal").show();
});

$(document).on("click", ".modal__close", () => {
  $(".modal").hide();
});

$(document).on("click", ".modal-overlay", () => {
  $(".modal").hide();
});

if (window.matchMedia("(min-width: 1024px)").matches) {
  $(window).on("mousemove", function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax-layer").each(function (i, el) {
      var offset = parseInt($(el).data("speed"));
      var translate =
        "translate3d(" +
        Math.round(offsetX * offset) +
        "px," +
        Math.round(offsetY * offset) +
        "px, 0px)";

      $(el).css({
        "-webkit-transform": translate,
        transform: translate,
        "moz-transform": translate,
      });
    });
  });
}

console.log($(".parallax-layer"));
