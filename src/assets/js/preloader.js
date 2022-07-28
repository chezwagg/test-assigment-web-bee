function initMap() {
  const khabarovsk = { lat: 48.48, lng: 135.071 };
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

window.onload = function () {
  console.log(1);
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
};

$(document).ready(function () {
  $(".preloader").addClass("hidden");
});
