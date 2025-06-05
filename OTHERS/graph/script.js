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
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill", "#3498db");
    circle.setAttribute("data-id", node.id);
    svg.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y + 4);
    text.setAttribute("fill", "white");
    text.setAttribute("font-size", "12px");
    text.setAttribute("text-anchor", "middle");
    text.textContent = node.id;
    svg.appendChild(text);
  }
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
    dijkstra(start, end);
  }
});

// Ініціалізація за замовчуванням
window.onload = () => {
  generateRandomGraph(parseInt(nodeCountInput.value));
};
