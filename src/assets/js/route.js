const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    console.log(event);
    console.log(event.target.href);
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
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

