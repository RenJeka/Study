// === CONFIGURABLE CONSTANTS ===
const DEFAULT_NODE_COUNT = 15;
const NODE_RADIUS = 15;
const NODE_COLOR_OPACITY = 0.5;
const NODE_LABEL_FONT_SIZE = "14px";
const NODE_LABEL_FONT_WEIGHT = "bold";
const EDGE_LABEL_FONT_SIZE = "14px";
const EDGE_PROBABILITY = 0.15; // Probability of additional edge
const EDGE_WEIGHT_DIVIDER = 20; // The higher, the lower the weight for the same distance
const EDGE_WEIGHT_MIN = 1;
const GRAPH_MARGIN = 50; // Margin from SVG edge

// === COLOR VARIABLES ===
let nodeColor = "#3498db";
let edgeColor = "#1fad03";
let nodeLabelColor = "#1d2d4d"; // Darker than node color
let edgeLabelColor = "#0e5a01"; // Darker than edge color

// === DOM ELEMENTS ===
const nodeColorPicker = document.getElementById("nodeColorPicker");
const edgeColorPicker = document.getElementById("edgeColorPicker");
const svg = document.getElementById("graph");
const logDiv = document.getElementById("log");
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

// === DRAG & DROP STATE ===
let draggingNode = null;
let offsetX = 0;
let offsetY = 0;

// === GRAPH DATA STRUCTURE ===
let graph = { nodes: [], edges: [], adjacencyList: {} };

// === INITIAL FORM VALUES ===
nodeCountInput.value = DEFAULT_NODE_COUNT;
startNodeInput.value = "";
endNodeInput.value = "";

// Додаємо прапорець, чи користувач змінював endNode вручну
let endNodeTouched = false;

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

// === UTILITY FUNCTIONS ===

// Logging function
function log(text) {
  logDiv.innerText += text + "\n";
}

// Clear log
function clearLog() {
  logDiv.innerText = "";
}

// Utility: get a darker color for text based on a hex color
function getDarkerColor(hex, factor = 0.5) {
  let r = parseInt(hex.substr(1, 2), 16);
  let g = parseInt(hex.substr(3, 2), 16);
  let b = parseInt(hex.substr(5, 2), 16);
  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);
  return `rgb(${r},${g},${b})`;
}

// === GRAPH GENERATION ===

// Generate a random connected graph
function generateRandomGraph(nodeCount) {
  graph = { nodes: [], edges: [], adjacencyList: {} };
  svg.innerHTML = "";
  clearLog();

  const width = svg.clientWidth;
  const height = svg.clientHeight;

  // Generate nodes (id from 1)
  for (let i = 1; i <= nodeCount; i++) {
    const angle = (2 * Math.PI * (i - 1)) / nodeCount;
    const radius = Math.min(width, height) / 2 - GRAPH_MARGIN;
    const x = width / 2 + radius * Math.cos(angle);
    const y = height / 2 + radius * Math.sin(angle);
    graph.nodes.push({ id: i, x, y });
    graph.adjacencyList[i] = [];
  }

  // Ensure connectivity (build a spanning tree)
  for (let i = 2; i <= nodeCount; i++) {
    // Connect each new node to a random previous node (from 1 to i-1)
    const j = Math.floor(1 + Math.random() * (i - 1));
    const from = i;
    const to = j;
    const dx = graph.nodes[from - 1].x - graph.nodes[to - 1].x;
    const dy = graph.nodes[from - 1].y - graph.nodes[to - 1].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const weight = Math.max(
      EDGE_WEIGHT_MIN,
      Math.round(distance / EDGE_WEIGHT_DIVIDER)
    );
    graph.edges.push({ from, to, weight });
    graph.adjacencyList[from].push({ to, weight });
    graph.adjacencyList[to].push({ to: from, weight }); // For undirected graph
  }

  // Add additional random edges
  for (let i = 1; i <= nodeCount; i++) {
    for (let j = i + 1; j <= nodeCount; j++) {
      // Check if edge already exists
      const exists = graph.edges.some(
        (e) => (e.from === i && e.to === j) || (e.from === j && e.to === i)
      );
      if (!exists && Math.random() < EDGE_PROBABILITY) {
        const dx = graph.nodes[i - 1].x - graph.nodes[j - 1].x;
        const dy = graph.nodes[i - 1].y - graph.nodes[j - 1].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const weight = Math.max(
          EDGE_WEIGHT_MIN,
          Math.round(distance / EDGE_WEIGHT_DIVIDER)
        );
        graph.edges.push({ from: i, to: j, weight });
        graph.adjacencyList[i].push({ to: j, weight });
        graph.adjacencyList[j].push({ to: i, weight }); // For undirected graph
      }
    }
  }

  drawGraph();
}

// === GRAPH DRAWING ===

// Draw the graph (edges, weights, nodes)
function drawGraph() {
  // Update edge weights based on current node positions
  for (const edge of graph.edges) {
    const from = graph.nodes.find((n) => n.id === edge.from);
    const to = graph.nodes.find((n) => n.id === edge.to);
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    edge.weight = Math.max(
      EDGE_WEIGHT_MIN,
      Math.round(distance / EDGE_WEIGHT_DIVIDER)
    );
  }

  // Draw edges
  for (const edge of graph.edges) {
    const from = graph.nodes.find((n) => n.id === edge.from);
    const to = graph.nodes.find((n) => n.id === edge.to);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", edgeColor);
    line.setAttribute("data-from", edge.from);
    line.setAttribute("data-to", edge.to);
    svg.appendChild(line);

    // Draw edge weight label
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", midX);
    text.setAttribute("y", midY);
    text.setAttribute("fill", edgeLabelColor);
    text.setAttribute("font-size", EDGE_LABEL_FONT_SIZE);
    text.setAttribute("text-anchor", "middle");
    text.textContent = edge.weight;
    svg.appendChild(text);
  }

  // Draw nodes
  for (const node of graph.nodes) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y + 4);
    text.setAttribute("fill", nodeLabelColor);
    text.setAttribute("font-size", NODE_LABEL_FONT_SIZE);
    text.setAttribute("font-weight", NODE_LABEL_FONT_WEIGHT);
    text.setAttribute("text-anchor", "middle");
    text.textContent = node.id;
    svg.appendChild(text);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", NODE_RADIUS);
    circle.setAttribute("fill", nodeColor);
    circle.setAttribute("fill-opacity", NODE_COLOR_OPACITY);
    circle.setAttribute("data-id", node.id);
    circle.style.cursor = "pointer";
    svg.appendChild(circle);

    // Add drag & drop for moving nodes
    circle.addEventListener("mousedown", startDragNode);
  }
}

// === NODE DRAG & DROP ===

// Start dragging a node
function startDragNode(e) {
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

// Drag node handler
function dragNode(e) {
  if (draggingNode === null) return;
  const node = graph.nodes.find((n) => n.id === draggingNode);
  node.x = e.clientX - offsetX;
  node.y = e.clientY - offsetY;
  svg.innerHTML = "";
  drawGraph();
}

// Stop dragging node
function stopDragNode() {
  draggingNode = null;
  svg.removeEventListener("mousemove", dragNode);
  svg.removeEventListener("mouseup", stopDragNode);
}

// Highlight a node (used in Dijkstra)
function highlightNode(id, color) {
  const circles = svg.querySelectorAll("circle");
  for (const c of circles) {
    if (parseInt(c.getAttribute("data-id")) === id) {
      c.setAttribute("fill", color);
    }
  }
}

// === DIJKSTRA'S ALGORITHM ===

// Dijkstra's shortest path algorithm with step-by-step visualization
async function dijkstra(start, end) {
  // Check if nodes exist
  const nodeIds = graph.nodes.map((n) => n.id);
  if (!nodeIds.includes(start) || !nodeIds.includes(end)) {
    log("Invalid start or end node value.");
    return;
  }

  const dist = {};
  const prev = {};
  const visited = new Set();
  for (const node of graph.nodes) {
    dist[node.id] = Infinity;
    prev[node.id] = null;
  }
  dist[start] = 0;

  startPathSearchBtn.disabled = true;
  log(`Starting shortest path search from ${start} to ${end || "all nodes"}`);

  while (visited.size < graph.nodes.length) {
    let u = null;
    let minDist = Infinity;
    for (const node of graph.nodes) {
      if (!visited.has(node.id) && dist[node.id] < minDist) {
        u = node.id;
        minDist = dist[node.id];
      }
    }

    if (u === null) break;

    visited.add(u);
    highlightNode(u, "#f39c12");
    log(`Visited node ${u}`);
    await new Promise((r) => setTimeout(r, 500));

    for (const neighbor of graph.adjacencyList[u]) {
      const alt = dist[u] + neighbor.weight;
      if (alt < dist[neighbor.to]) {
        dist[neighbor.to] = alt;
        prev[neighbor.to] = u;
      }
    }
  }

  if (end !== null && end !== undefined && dist[end] < Infinity) {
    const path = [];
    let u = end;
    while (u !== null) {
      path.unshift(u);
      u = prev[u];
    }
    log(`Path: ${path.join(" → ")}`);
  } else {
    log("Path not found");
  }
  startPathSearchBtn.disabled = false;
}

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
    c.setAttribute("fill", nodeColor);
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
  nodeColor = e.target.value;
  nodeLabelColor = getDarkerColor(nodeColor, 0.5);
  drawGraph();
});

// Edge color picker
edgeColorPicker.addEventListener("input", (e) => {
  edgeColor = e.target.value;
  edgeLabelColor = getDarkerColor(edgeColor, 0.5);
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
