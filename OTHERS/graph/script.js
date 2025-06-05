const svg = document.getElementById("graph");
const logDiv = document.getElementById("log");
const nodeCountInput = document.getElementById("nodeCount");
const startNodeInput = document.getElementById("startNode");
const endNodeInput = document.getElementById("endNode");

// Background image upload elements
const graphContainer = document.getElementById("graphContainer");
const bgImageInput = document.getElementById("bgImageInput");
const uploadBgImageBtn = document.getElementById("uploadBgImage");

const DEFAULT_NODE_COUNT = 15;

// --- Drag & Drop for Nodes ---
let draggingNode = null;
let offsetX = 0;
let offsetY = 0;

let graph = { nodes: [], edges: [], adjacencyList: {} };

nodeCountInput.value = DEFAULT_NODE_COUNT;
startNodeInput.value = 1;
endNodeInput.value = DEFAULT_NODE_COUNT;

function log(text) {
  logDiv.innerText += text + "\n";
}

function clearLog() {
  logDiv.innerText = "";
}

function generateRandomGraph(nodeCount) {
  graph = { nodes: [], edges: [], adjacencyList: {} };
  svg.innerHTML = "";
  clearLog();

  const width = svg.clientWidth;
  const height = svg.clientHeight;

  // Генерація вершин (id від 1)
  for (let i = 1; i <= nodeCount; i++) {
    const angle = (2 * Math.PI * (i - 1)) / nodeCount;
    const radius = Math.min(width, height) / 2 - 50;
    const x = width / 2 + radius * Math.cos(angle);
    const y = height / 2 + radius * Math.sin(angle);
    graph.nodes.push({ id: i, x, y });
    graph.adjacencyList[i] = [];
  }

  // Генерація ребер з випадковими вагами (id від 1)
  for (let i = 1; i <= nodeCount; i++) {
    for (let j = i + 1; j <= nodeCount; j++) {
      if (Math.random() < 0.15) {
        const weight = Math.floor(Math.random() * 10) + 1;
        graph.edges.push({ from: i, to: j, weight });
        graph.adjacencyList[i].push({ to: j, weight });
        graph.adjacencyList[j].push({ to: i, weight }); // для неорієнтованого графа
      }
    }
  }

  drawGraph();
}

function drawGraph() {
  // Оновлюємо ваги ребер залежно від відстані між вузлами
  for (const edge of graph.edges) {
    const from = graph.nodes.find((n) => n.id === edge.from);
    const to = graph.nodes.find((n) => n.id === edge.to);
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    edge.weight = Math.max(1, Math.round(distance / 20));
  }

  // Малюємо ребра
  for (const edge of graph.edges) {
    const from = graph.nodes.find((n) => n.id === edge.from);
    const to = graph.nodes.find((n) => n.id === edge.to);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", "#1fad03");
    line.setAttribute("data-from", edge.from);
    line.setAttribute("data-to", edge.to);
    svg.appendChild(line);

    // Відображення ваги
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", midX);
    text.setAttribute("y", midY);
    text.setAttribute("fill", "#1fad03");
    text.setAttribute("font-size", "14px");
    text.setAttribute("text-anchor", "middle");
    text.textContent = edge.weight;
    svg.appendChild(text);
  }

  // Малюємо вершини
  for (const node of graph.nodes) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y + 4);
    text.setAttribute("fill", "white");
    text.setAttribute("font-size", "14px");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "#033fad");
    text.textContent = node.id;
    svg.appendChild(text);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill", "#3498db");
    circle.setAttribute("fill-opacity", "0.5");
    circle.setAttribute("data-id", node.id);
    circle.style.cursor = "pointer";
    svg.appendChild(circle);

    // Додаємо drag & drop для переміщення вузлів
    circle.addEventListener("mousedown", startDragNode);
  }
}

function startDragNode(e) {
  draggingNode = parseInt(e.target.getAttribute("data-id"));
  const node = graph.nodes.find((n) => n.id === draggingNode);
  offsetX = e.clientX - node.x;
  offsetY = e.clientY - node.y;
  svg.addEventListener("mousemove", dragNode);
  svg.addEventListener("mouseup", stopDragNode);

  // --- Move the circle and its label to the end of SVG (bring to front) ---
  const circles = svg.querySelectorAll("circle");
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

function highlightNode(id, color) {
  const circles = svg.querySelectorAll("circle");
  for (const c of circles) {
    if (parseInt(c.getAttribute("data-id")) === id) {
      c.setAttribute("fill", color);
    }
  }
}

async function dijkstra(start, end) {
  // Перевірка наявності вузлів
  const nodeIds = graph.nodes.map((n) => n.id);
  if (!nodeIds.includes(start) || !nodeIds.includes(end)) {
    log("Некоректні значення початкового або кінцевого вузла.");
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
    log(`Відвідано вершину ${u}`);
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
    log(`Шлях: ${path.join(" → ")}`);
  } else {
    log("Шлях не знайдено");
  }
}

function updateAdjacencyWeights() {
  for (const edge of graph.edges) {
    const fromNode = graph.nodes.find((n) => n.id === edge.from);
    const toNode = graph.nodes.find((n) => n.id === edge.to);
    const dx = fromNode.x - toNode.x;
    const dy = fromNode.y - toNode.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const newWeight = Math.max(1, Math.round(distance / 20));
    for (const neighbor of graph.adjacencyList[edge.from]) {
      if (neighbor.to === edge.to) neighbor.weight = newWeight;
    }
    for (const neighbor of graph.adjacencyList[edge.to]) {
      if (neighbor.to === edge.from) neighbor.weight = newWeight;
    }
  }
}

// Background image upload logic
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

// Обробники подій

document.getElementById("generateGraph").addEventListener("click", () => {
  const count = parseInt(nodeCountInput.value);
  if (count >= 5 && count <= 50) generateRandomGraph(count);
});

document.getElementById("startPathSearch").addEventListener("click", () => {
  const start = parseInt(startNodeInput.value);
  const end = parseInt(endNodeInput.value);
  clearLog();
  updateAdjacencyWeights();
  dijkstra(start, end);
});

// Ініціалізація за замовчуванням
window.onload = () => {
  generateRandomGraph(parseInt(nodeCountInput.value));
};
