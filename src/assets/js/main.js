import * as bootstrap from "bootstrap";

let start = Date.now();
let minuetsCount = 0;
let hoursCount = 0;
setInterval(() => {
  let millis = Date.now() - start;
  let secondCount = Math.floor(millis / 1000);
  if (secondCount >= 60) {
    start = Date.now();
    minuetsCount += 1;
  }
  if (minuetsCount >= 60) {
    hoursCount += 1;
  }
  document.querySelector(".counter").innerHTML = `${
    hoursCount >= 10 ? "" : "0"
  }${hoursCount} : ${minuetsCount >= 10 ? "" : "0"}${minuetsCount} : ${
    secondCount >= 10 ? "" : "0"
  }${secondCount}`;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
}, 1000);
