import { log } from "./utils.js";
import { graph } from "./graph.js";

const svg = document.getElementById("graph");
const startPathSearchBtn = document.getElementById("startPathSearch");

// Highlight a node (used in Dijkstra)
function highlightNode(id, color) {
  const circles = svg.querySelectorAll("circle");
  for (const c of circles) {
    if (parseInt(c.getAttribute("data-id")) === id) {
      c.setAttribute("fill", color);
    }
  }
}

// Dijkstra's shortest path algorithm with step-by-step visualization
export async function dijkstra(start, end) {
  // Check if nodes exist
  const nodeIds = graph.nodes.map((n) => n.id);
  if (!nodeIds.includes(start) || !nodeIds.includes(end)) {
    log("Invalid value for start or end node.");
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
  log(`Finding the shortest path from ${start} to ${end || "the last"} node`);

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
    log("No shortest path found.");
  }
  startPathSearchBtn.disabled = false;
}
