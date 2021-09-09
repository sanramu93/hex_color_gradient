"use strict";

const button = document.querySelector("button");
const colorInfo1 = document.querySelector(".c1");
const colorInfo2 = document.querySelector(".c2");

const rdmHEX = () =>
  (Math.trunc(Math.random() * 255) + 1).toString(16).toUpperCase();

const rdmColor = function () {
  const [hex1, hex2, hex3] = [rdmHEX(), rdmHEX(), rdmHEX()];
  return `#${hex1}${hex2}${hex3}`;
};

button.addEventListener("click", () => {
  const [c1, c2] = [rdmColor(), rdmColor()];
  console.log(c1, c2);
  document.body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
  colorInfo1.textContent = c1;
  colorInfo2.textContent = c2;
});
