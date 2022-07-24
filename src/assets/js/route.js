const route = (event) => {
  console.log(event);
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/assets/pages/404.html",
  "/": "/assets/pages/profile.html",
  "/profile": "/assets/pages/profile.html",
  "/map": "/assets/pages/map.html",
  "/timer": "/assets/pages/timer.html",
};

const handleLocation = async () => {
  let path = window.location.pathname;
  let route = routes[path] || routes[404];
  let html = await fetch(route).then((data) => data.text());
  $("#main-page").load(route);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
