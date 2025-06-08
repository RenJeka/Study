// === NODE DRAG & DROP ===

import { graph, drawGraph } from "./graph.js";

const svg = document.getElementById("graph");
svg.addEventListener("mousemove", dragNode);
svg.innerHTML = "";

let draggingNode = null;
let offsetX = 0;
let offsetY = 0;

function dragNode(e) {
  if (draggingNode === null) return;
  const node = graph.nodes.find((n) => n.id === draggingNode);
  node.x = e.clientX - offsetX;
  node.y = e.clientY - offsetY;
  svg.innerHTML = "";
  drawGraph();
}

function stopDragNode() {
  draggingNode = null;
  svg.removeEventListener("mousemove", dragNode);
  svg.removeEventListener("mouseup", stopDragNode);
}

export function startDragNode(e) {
  draggingNode = parseInt(e.target.getAttribute("data-id"));
  const node = graph.nodes.find((n) => n.id === draggingNode);
  offsetX = e.clientX - node.x;
  offsetY = e.clientY - node.y;
  svg.addEventListener("mousemove", dragNode);
  svg.addEventListener("mouseup", stopDragNode);

  // Move the circle and its label to the end of SVG (bring to front)
  const texts = svg.querySelectorAll("text");
  let label = null;
  for (const t of texts) {
    if (t.textContent === String(draggingNode)) {
      label = t;
      break;
    }
  }
  svg.appendChild(e.target);
  if (label) svg.appendChild(label);
}
