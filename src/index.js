const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const bg = document.body;
const btn = document.querySelector("button");

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function onClickBg() {
  const bgColors = getRandomColor();
  const bgColors2 = getRandomColor();
  if (bgColors === bgColors2) {
    return getRandomColor();
  }
  bg.style.background = `linear-gradient(90deg, ${bgColors}, ${bgColors2})`;
}

onClickBg();
btn.addEventListener("click", onClickBg);
