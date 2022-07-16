/**
 *
 * @param {html element} e
 * @param {string} color
 * @description funcion para cambiar el div de color al hacerle un click
 */

// function pintar(element, color = "green") {
//   element.style.backgroundColor = color;
// }

const pintar = (e, color = "green") => (e.style.backgroundColor = color);
let ele = document.getElementById("ele1");
pintar(ele);
ele.addEventListener("click", () => {
  if (ele.style.backgroundColor === "green") {
    pintar(ele, "yellow");
  } else {
    pintar(ele);
  }
});
