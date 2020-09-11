"use strict";
const colorPicker = document.querySelector("#colorvalue");
colorPicker.addEventListener("input", selectColor);

function selectColor() {
  let hex = this.value;
  setBaseColor(hex);
}
function setBaseColor(hex) {
  let rgb = hexToRgb(hex);
  let hsl = rgbToHsl(rgb);

  showColorBox(hex);
  showHexColor(hex);
  showRgbColor(rgb);
  showHslColor(hsl);
  //   calculateHarmony();
}

function calculateHarmony(hsl) {
  let color1 = calcAnalogous(hsl);
}

function convertInput() {}

// Showing the color as a colored box in CSS
function showColorBox(hex) {
  document.querySelector("#base-color").style.backgroundColor = hex;
}
// Showing the color as HEX
function showHexColor(hex) {
  document.querySelector("#color3>p#HEX").textContent = `HEX: ${hex}`;
}
// Showing the color as RGB
function showRgbColor(rgb) {
  document.querySelector(
    "#color3>p#RGB"
  ).textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}
// Showing the color as HSL
function showHslColor(hsl) {
  document.querySelector(
    "#color3>p#HSL"
  ).textContent = `HSL: ${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
}
function hexToRgb(hex) {
  let r = Number.parseInt(hex.substring(1, 3), 16);
  let g = Number.parseInt(hex.substring(3, 5), 16);
  let b = Number.parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}
function rgbToHsl(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  h = h.toFixed();
  s = s.toFixed(0);
  l = l.toFixed(0);

  return { h, s, l };
}
function rgbToHex(rgb) {
  const hexR = rgb.r.toString(16).padStart(2, "0");
  const hexG = rgb.g.toString(16).padStart(2, "0");
  const hexB = rgb.b.toString(16).padStart(2, "0");
  const hex = "#" + hexR + hexG + hexB;
  return hex;
}
function cssToRgb(css) {
  const numbers = css.slice(4, -1).split(",");
  const r = Number(numbers[0]);
  const g = Number(numbers[1]);
  const b = Number(numbers[2]);
  return { r, g, b };
}
function hslToRgb(hsl) {
  h = h;
  s = s / 100;
  l = l / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
}

// H is shifted some degrees for each color -
// you decide how many degrees, it isn't adjustable by the user.
// S and L are kept constant
function calcAnalogous() {}

// H is kept constant, each color has either more S,
// less S, more L or less L (only one change on each color).
function calcMono() {}

// Two colors are shifted 60 or 120 degrees from the base.
// You decide what to do with the two remaining colors.
// Usually also shifting them, and adjusting the L is prefered.
function calcTriad() {}

// One color is at 180 degrees from the base.
// You decide how to handle the other three!
function calcCompl() {}

// A combination of complementary and analogous -
// you decide how many colors are complementary, and how many are analogous
function calcCompound() {}

// H is kept constant, a so is S, but L varies for each color.
function calcShades() {}

function changeHarmony() {}
