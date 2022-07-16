let color = "green";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "green";
  } else if (event.key === "s") {
    color = "yellow";
  } else if (event.key === "d") {
    color = "orange";
  }
});

/**
 *
 * @param {string} elementId
 * @description asigna el color de la varible global al elemto que tenga el id que se le pasa por parametro
 */

function clickBox(elementId) {
  document.querySelector(elementId).style.backgroundColor = color;
}

document.querySelector("#green").addEventListener("click", () => {
  clickBox("#green");
});
document.querySelector("#yellow").addEventListener("click", () => {
  clickBox("#yellow");
});
document.querySelector("#orange").addEventListener("click", () => {
  clickBox("#orange");
});
document.querySelector("#magenta").addEventListener("click", () => {
  clickBox("#magenta");
});
