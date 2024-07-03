//checkbox-------------------------------------------------------------------
document.querySelectorAll("#checkbox").forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});
