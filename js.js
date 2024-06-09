
document.addEventListener("DOMContentLoaded", function() {

  document.querySelector(".btn-primary").addEventListener("click", function() {
    alert("You're being addressed to a new page");
    playSound();
  });


  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      alert("Enter Key Pressed!");
      playSound();
    }
  });

  function animateElement(element) {
    element.style.transform = "scale(1.1)";
    setTimeout(function() {
      element.style.transform = "scale(1)";
    }, 300);
  }

  function playSound() {
    var sound = document.getElementById("clickSound");
    sound.play();
  }
});
