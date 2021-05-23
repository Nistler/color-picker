$(function () {
  let bgColor = { red: 255, green: 255, blue: 200 };
  let textColor = { red: 110, green: 110, blue: 110 };
  $("#container").css({
    "background-color": "#" + hexFromRGB(255, 255, 200),
    color: "#" + hexFromRGB(10, 10, 10),
  });

  function hexFromRGB(r, g, b) {
    const hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }

  function refreshColor() {
    const red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    if ($("#change-color").hasClass("ui-state-active")) {
      textColor = { red, green, blue };
      $("#container").css("color", "#" + hex);
      return;
    }
    bgColor = { red, green, blue };
    $("#container").css("background-color", "#" + hex);
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    slide: refreshColor,
    change: refreshColor,
  });

  function refreshSlider(r, g, b) {
    $("#red").slider("value", r);
    $("#green").slider("value", g);
    $("#blue").slider("value", b);
  }

  refreshSlider(textColor.red, textColor.green, textColor.blue);
  $("#change-color").click(function () {
    $("#change-color").addClass("ui-state-active");
    $("#change-bg-color").removeClass("ui-state-active");
    refreshSlider(textColor.red, textColor.green, textColor.blue);
  });

  $("#change-bg-color").click(function () {
    $("#change-bg-color").addClass("ui-state-active");
    $("#change-color").removeClass("ui-state-active");
    refreshSlider(bgColor.red, bgColor.green, bgColor.blue);
  });
});
