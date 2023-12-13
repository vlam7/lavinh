document.addEventListener("DOMContentLoaded", function () {
  // Extend the duration before hiding the loading spinner
  setTimeout(function () {
    // Hide the loading spinner
    document.getElementById("loadingSpinner").classList.add("hidden");
  }, 11000); // 3000 milliseconds (3 seconds) delay
});
