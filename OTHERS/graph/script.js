// script.js

const svg = document.getElementById("graph");
const logDiv = document.getElementById("log");
const nodeCountInput = document.getElementById("nodeCount");
const startNodeInput = document.getElementById("startNode");
const endNodeInput = document.getElementById("endNode");

let graph = { nodes: [], edges: [], adjacencyList: {} };

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

  // Генерація вершин
  for (let i = 0; i < nodeCount; i++) {
    const angle = (2 * Math.PI * i) / nodeCount;
    const radius = Math.min(width, height) / 2 - 50;
    const x = width / 2 + radius * Math.cos(angle);
    const y = height / 2 + radius * Math.sin(angle);
    graph.nodes.push({ id: i, x, y });
    graph.adjacencyList[i] = [];
  }

  // Генерація ребер з випадковими вагами
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
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
    const from = graph.nodes[edge.from];
    const to = graph.nodes[edge.to];
    // Євклідова відстань
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    // Наприклад, вага = відстань / 20, округлена до цілого числа, мінімум 1
    edge.weight = Math.max(1, Math.round(distance / 20));
  }

  // Малюємо ребра
  for (const edge of graph.edges) {
    const from = graph.nodes[edge.from];
    const to = graph.nodes[edge.to];

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("stroke", "#999");
    line.setAttribute("data-from", edge.from);
    line.setAttribute("data-to", edge.to);
    svg.appendChild(line);

    // Відображення ваги
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", midX);
    text.setAttribute("y", midY);
    text.setAttribute("fill", "black");
    text.setAttribute("font-size", "12px");
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
    text.setAttribute("font-size", "12px");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "#000");
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

// --- Drag & Drop Logic for Nodes ---
let draggingNode = null;
let offsetX = 0;
let offsetY = 0;

function startDragNode(e) {
  draggingNode = parseInt(e.target.getAttribute("data-id"));
  const node = graph.nodes[draggingNode];
  offsetX = e.clientX - node.x;
  offsetY = e.clientY - node.y;
  svg.addEventListener("mousemove", dragNode);
  svg.addEventListener("mouseup", stopDragNode);

  // --- Move the circle and its label to the end of SVG (bring to front) ---
  // Find the circle and its label (text) by data-id
  const circles = svg.querySelectorAll("circle");
  const texts = svg.querySelectorAll("text");
  let label = null;
  for (const t of texts) {
    if (t.textContent === String(draggingNode)) {
      label = t;
      break;
    }
  }
  // Move circle and label to end of SVG
  svg.appendChild(e.target);
  if (label) svg.appendChild(label);
}

function dragNode(e) {
  if (draggingNode === null) return;
  const node = graph.nodes[draggingNode];
  node.x = e.clientX - offsetX;
  node.y = e.clientY - offsetY;
  // Перемальовуємо граф
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
  const dist = Array(graph.nodes.length).fill(Infinity);
  const prev = Array(graph.nodes.length).fill(null);
  const visited = new Set();
  dist[start] = 0;

  while (visited.size < graph.nodes.length) {
    let u = null;
    let minDist = Infinity;
    for (let i = 0; i < dist.length; i++) {
      if (!visited.has(i) && dist[i] < minDist) {
        u = i;
        minDist = dist[i];
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
  // Оновлюємо ваги в adjacencyList згідно з поточними вагами ребер
  for (const edge of graph.edges) {
    const from = edge.from;
    const to = edge.to;
    // Знаходимо нову вагу
    const dx = graph.nodes[from].x - graph.nodes[to].x;
    const dy = graph.nodes[from].y - graph.nodes[to].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const newWeight = Math.max(1, Math.round(distance / 20));
    // Оновлюємо у списку суміжності для обох напрямків (неорієнтований граф)
    for (const neighbor of graph.adjacencyList[from]) {
      if (neighbor.to === to) neighbor.weight = newWeight;
    }
    for (const neighbor of graph.adjacencyList[to]) {
      if (neighbor.to === from) neighbor.weight = newWeight;
    }
  }
}

// Обробники подій

document.getElementById("generateGraph").addEventListener("click", () => {
  const count = parseInt(nodeCountInput.value);
  if (count >= 5 && count <= 50) generateRandomGraph(count);
});

document.getElementById("startPathSearch").addEventListener("click", () => {
  const start = parseInt(startNodeInput.value);
  const end = parseInt(endNodeInput.value);
  if (!isNaN(start) && !isNaN(end)) {
    clearLog();
    updateAdjacencyWeights(); // <--- Add this line
    dijkstra(start, end);
  }
});

// Ініціалізація за замовчуванням
window.onload = () => {
  generateRandomGraph(parseInt(nodeCountInput.value));
};
