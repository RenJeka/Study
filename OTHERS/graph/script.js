import { dijkstra } from "./src/dijkstra.js";
import { clearLog, getDarkerColor } from "./src/utils.js";
import { graph, generateRandomGraph, drawGraph } from "./src/graph.js";

import {
  DEFAULT_NODE_COUNT,
  EDGE_WEIGHT_DIVIDER,
  setNodeColor,
  setNodeLabelColor,
  setEdgeColor,
  setEdgeLabelColor,
  getNodeColor,
} from "./src/config.js";

// === DOM ELEMENTS ===
const nodeColorPicker = document.getElementById("nodeColorPicker");
const edgeColorPicker = document.getElementById("edgeColorPicker");
const svg = document.getElementById("graph");
const nodeCountInput = document.getElementById("nodeCount");
const startNodeInput = document.getElementById("startNode");
const endNodeInput = document.getElementById("endNode");
const startPathSearchBtn = document.getElementById("startPathSearch");
const graphContainer = document.getElementById("graphContainer");
const bgImageInput = document.getElementById("bgImageInput");
const uploadBgImageBtn = document.getElementById("uploadBgImage");
const nodeCountOutput = document.getElementById("nodeCountOutput");
const startNodeOutput = document.getElementById("startNodeOutput");
const endNodeOutput = document.getElementById("endNodeOutput");

// === INITIAL FORM VALUES ===
nodeCountInput.value = DEFAULT_NODE_COUNT;
startNodeInput.value = "";
endNodeInput.value = "";

// Додаємо прапорець, чи користувач змінював endNode вручну
let endNodeTouched = false;

// === EDGE WEIGHT UPDATE ===

// Update adjacency list weights based on current node positions
function updateAdjacencyWeights() {
  for (const edge of graph.edges) {
    const fromNode = graph.nodes.find((n) => n.id === edge.from);
    const toNode = graph.nodes.find((n) => n.id === edge.to);
    const dx = fromNode.x - toNode.x;
    const dy = fromNode.y - toNode.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const newWeight = Math.max(1, Math.round(distance / EDGE_WEIGHT_DIVIDER));
    for (const neighbor of graph.adjacencyList[edge.from]) {
      if (neighbor.to === edge.to) neighbor.weight = newWeight;
    }
    for (const neighbor of graph.adjacencyList[edge.to]) {
      if (neighbor.to === edge.from) neighbor.weight = newWeight;
    }
  }
}

endNodeInput.addEventListener("input", function () {
  endNodeOutput.value = this.value;
  endNodeTouched = true;
});

// Синхронізація output з range
nodeCountInput.addEventListener("input", function () {
  nodeCountOutput.value = this.value;
  // Оновлюємо межі для startNode та endNode
  startNodeInput.max = this.value;
  endNodeInput.max = this.value;
  // Якщо поточне значення виходить за межі — підлаштовуємо
  if (+startNodeInput.value > +this.value) startNodeInput.value = this.value;
  if (+endNodeInput.value > +this.value) endNodeInput.value = this.value;
  startNodeOutput.value = startNodeInput.value;
  // Якщо користувач не змінював endNode вручну — оновлюємо його значення автоматично
  if (!endNodeTouched) {
    endNodeInput.value = this.value;
    endNodeOutput.value = this.value;
  } else {
    endNodeOutput.value = endNodeInput.value;
  }
});

// Ініціалізація max для startNode та endNode при завантаженні сторінки
window.onload = () => {
  startNodeInput.max = nodeCountInput.value;
  endNodeInput.max = nodeCountInput.value;
  generateRandomGraph(parseInt(nodeCountInput.value));
  startNodeInput.value = "1";
  endNodeInput.value = nodeCountInput.value;
  startNodeOutput.value = startNodeInput.value;
  endNodeOutput.value = endNodeInput.value;
  endNodeTouched = false;
};

startNodeInput.addEventListener("input", function () {
  startNodeOutput.value = this.value;
});

endNodeInput.addEventListener("input", function () {
  endNodeOutput.value = this.value;
  endNodeTouched = true;
});

// === BACKGROUND IMAGE UPLOAD ===

// Handle background image upload
uploadBgImageBtn.addEventListener("click", () => {
  bgImageInput.click();
});

bgImageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (evt) {
    graphContainer.style.backgroundImage = `url('${evt.target.result}')`;
  };
  reader.readAsDataURL(file);
});

// === EVENT HANDLERS ===

// Generate new graph button
document.getElementById("generateGraph").addEventListener("click", () => {
  const count = parseInt(nodeCountInput.value);
  if (count >= 5 && count <= 50) generateRandomGraph(count);
});

// Start Dijkstra search button
startPathSearchBtn.addEventListener("click", () => {
  // Reset .visited and .current styles for all circles
  const circles = svg.querySelectorAll("circle");
  circles.forEach((c) => {
    c.classList.remove("visited");
    c.classList.remove("current");
    c.setAttribute("fill", getNodeColor());
  });

  // Use default values if fields are empty
  let start = parseInt(startNodeInput.value);
  let end = parseInt(endNodeInput.value);
  if (isNaN(start)) start = 1;
  if (isNaN(end)) end = parseInt(nodeCountInput.value);
  clearLog();
  updateAdjacencyWeights();
  dijkstra(start, end);
});

// Node color picker
nodeColorPicker.addEventListener("input", (e) => {
  setNodeColor(e.target.value);
  setNodeLabelColor(getDarkerColor(e.target.value, 0.5));
  drawGraph();
});

edgeColorPicker.addEventListener("input", (e) => {
  setEdgeColor(e.target.value);
  setEdgeLabelColor(getDarkerColor(e.target.value, 0.5));
  drawGraph();
});

// === INITIALIZATION ===
window.onload = () => {
  startNodeInput.max = nodeCountInput.value;
  endNodeInput.max = nodeCountInput.value;
  generateRandomGraph(parseInt(nodeCountInput.value));
  startNodeInput.value = "1";
  endNodeInput.value = nodeCountInput.value;
  startNodeOutput.value = startNodeInput.value;
  endNodeOutput.value = endNodeInput.value;
  endNodeTouched = false;
};
