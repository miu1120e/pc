$(function () {
  // // 로딩
  var customElement = $("<div>", {
    class: "loading",
    text: "Loading...",
  });
  $.LoadingOverlay("show", {
    image: "",
    background: "rgba(0,0,0,0.2)",
    custom: customElement,
  });
  setTimeout(function () {
    $.LoadingOverlay("hide");
  }, 2000);

  // menu 창 없애기
  $("#gnb").each(function () {
    let $gnb = $("#gnb"),
      $gnbLink = $gnb.find("a"),
      $burger = $(".burger-input");

    $gnbLink.click(function () {
      if ($burger.is(":checked")) {
        $burger.prop("checked", false);
      } else {
        $burger.prop("checked", true);
      }
    });
  });

  $(".container-movie").each(function () {
    // movie
    let $this = $(".container-movie"),
      $closeMovie = $this.find(".link-close"),
      $openMovie = $("#gnb .link-movie"),
      embed = $(".player");

    $(".wrapper-movie").empty();

    $openMovie.on("click", function () {
      $this.addClass("active");
      $(".wrapper-movie").append(embed);
    });
    $closeMovie.on("click", function () {
      $this.removeClass("active");
      $(".wrapper-movie").empty();
    });
  });

  // circle mouse
  const text = document.querySelector(".curser-text");
  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

  const element = document.querySelectorAll(".curser-text span");
  for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "rotate(" + i * 18 + "deg)";
  }

  document.addEventListener("mousemove", function (e) {
    text.style.left = e.pageX + "px";
    text.style.top = e.pageY + "px";
  });
});
