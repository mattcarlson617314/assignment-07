
/* Make sure DOM has been loaded. */
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded');
});

/* Function to toggle mobile nav expanded and hidden */
function toggleMenu() {
    var x = document.getElementById("menu-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }