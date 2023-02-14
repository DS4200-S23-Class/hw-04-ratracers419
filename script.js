const dots = document.querySelectorAll(".dot");

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    this.classList.toggle("selected");

    let cx = this.getAttributeNS(null, "cx");

    let cy = this.getAttributeNS(null, "cy");

    let newText =
      "Last point clicked: (" +
      Math.round((cx - 10) / 50) +
      ", " +
      Math.round(Math.abs(cy - 510) / 50) +
      ")";

    document.getElementById("right_col_text").innerHTML = newText;
  });
}

const submitButton = document.querySelector("#submit");
const xInput = document.querySelector("#x");
const yInput = document.querySelector("#y");
const svgContainer = document.querySelector("#container");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const x = xInput.value;
  const y = yInput.value;

  const svg = document.getElementById("container");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", 50 * x + 10);
  circle.setAttribute("cy", 510 - y * 50);
  circle.setAttribute("r", 10);
  circle.setAttribute("class", "dot");

  let cx = circle.getAttributeNS(null, "cx");

  let cy = circle.getAttributeNS(null, "cy");

  circle.addEventListener("click", function () {
    this.classList.toggle("selected");

    let newText =
      "Last point clicked: (" +
      Math.round((cx - 10) / 50) +
      ", " +
      Math.round(Math.abs(cy - 510) / 50) +
      ")";

    document.getElementById("right_col_text").innerHTML = newText;
  });

  svg.appendChild(circle);
});
