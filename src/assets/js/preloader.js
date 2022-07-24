<<<<<<< Updated upstream

// Initialize and add the map
=======
>>>>>>> Stashed changes
function initMap() {
    const khabarovsk = { lat: 48.480, lng: 135.071 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: khabarovsk,
    });
    const marker = new google.maps.Marker({
      position: khabarovsk,
      map: map,
    });
  }
  
window.initMap = initMap;
<<<<<<< Updated upstream
  
window.onload = function() {
  document.getElementById("preloader-js").style.display = "none";
}
=======

window.onload = function () {
  console.log(1);
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
};

$(document).ready(function () {
  $(".preloader").addClass("hidden");
});
>>>>>>> Stashed changes
