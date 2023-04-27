function Color(span, color) {
  document.getElementById(span).style.backgroundColor = color;
}

function Check(id, span, ans) {
  w = (document.getElementById(id).value.length + 1) * 12 + "px";
  document.getElementById(id).style.width = w;
  document.getElementById(id).value == ans
    ? Color(span, "#05C76A")
    : Color(span, "#ff5c50");
}
