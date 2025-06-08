import { dijkstra } from "./src/dijkstra.js";
import { clearLog, getDarkerColor } from "./src/utils.js";
import {
  generateRandomGraph,
  updateAdjacencyWeights,
  drawGraph,
} from "./src/graph.js";

import {
  DEFAULT_NODE_COUNT,
  setNodeColor,
  setNodeLabelColor,
  setEdgeColor,
  setEdgeLabelColor,
  getNodeColor,
} from "./src/config.js";

import { setupBgImageUpload } from "./src/bgImage.js";

// === DOM ELEMENTS ===
const nodeColorPicker = document.getElementById("nodeColorPicker");
const edgeColorPicker = document.getElementById("edgeColorPicker");
const svg = document.getElementById("graph");
const nodeCountInput = document.getElementById("nodeCount");
const startNodeInput = document.getElementById("startNode");
const endNodeInput = document.getElementById("endNode");
const startPathSearchBtn = document.getElementById("startPathSearch");
const nodeCountOutput = document.getElementById("nodeCountOutput");
const startNodeOutput = document.getElementById("startNodeOutput");
const endNodeOutput = document.getElementById("endNodeOutput");

// === INITIAL FORM VALUES ===
nodeCountInput.value = DEFAULT_NODE_COUNT;
startNodeInput.value = "";
endNodeInput.value = "";

let endNodeTouched = false;

// === EDGE WEIGHT UPDATE ===

endNodeInput.addEventListener("input", function () {
  endNodeOutput.value = this.value;
  endNodeTouched = true;
});

// Syncronize node count output with input
nodeCountInput.addEventListener("input", function () {
  nodeCountOutput.value = this.value;

  // Refresh max values for startNode and endNode
  startNodeInput.max = this.value;
  endNodeInput.max = this.value;

  // If startNode or endNode exceeds new max, reset them to max
  if (+startNodeInput.value > +this.value) startNodeInput.value = this.value;
  if (+endNodeInput.value > +this.value) endNodeInput.value = this.value;
  startNodeOutput.value = startNodeInput.value;

  // If endNode was not touched, set it to the new max value
  if (!endNodeTouched) {
    endNodeInput.value = this.value;
    endNodeOutput.value = this.value;
  } else {
    endNodeOutput.value = endNodeInput.value;
  }
});

// Initialize graph on page load
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
  setupBgImageUpload();
};
