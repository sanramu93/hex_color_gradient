"use strict";

const btnChange = document.querySelector(".btn-change");
const btnCopy = document.querySelector(".btn-copy");
const colorInfoEl = document.querySelector(".color-info");
const colorInfo1 = document.querySelector(".c1");
const colorInfo2 = document.querySelector(".c2");

const rdmHEX = () =>
  (Math.trunc(Math.random() * 255) + 1)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

const rdmColor = function () {
  const [hex1, hex2, hex3] = [rdmHEX(), rdmHEX(), rdmHEX()];
  return `#${hex1}${hex2}${hex3}`;
};

const changeBg = function () {
  const [c1, c2] = [rdmColor(), rdmColor()];
  document.body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
  colorInfo1.textContent = c1;
  colorInfo2.textContent = c2;
  btnCopy.textContent = "Copy";
  btnCopy.style.backgroundColor = "rgb(250, 250, 250)";
};

const copyText = function () {
  navigator.clipboard.writeText(colorInfoEl.textContent);
  btnCopy.textContent = "Copied!";
  btnCopy.style.backgroundColor = "rgb(230, 230, 168)";
  // alert("Gradient Copied: " + colorInfoEl.textContent);
};

btnChange.addEventListener("click", changeBg);

btnCopy.addEventListener("click", copyText);
