import { clearLog } from "./utils.js";
import {
  GRAPH_MARGIN,
  EDGE_WEIGHT_MIN,
  EDGE_WEIGHT_DIVIDER,
  EDGE_PROBABILITY,
  getNodeColor,
  getEdgeColor,
  getNodeLabelColor,
  getEdgeLabelColor,
  EDGE_LABEL_FONT_SIZE,
  NODE_LABEL_FONT_SIZE,
  NODE_LABEL_FONT_WEIGHT,
  NODE_RADIUS,
  NODE_COLOR_OPACITY,
} from "./config.js";

import { startDragNode } from "./drag.js";

const svg = document.getElementById("graph");

let graph = { nodes: [], edges: [], adjacencyList: {} };

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
    line.setAttribute("stroke", getEdgeColor());
    line.setAttribute("data-from", edge.from);
    line.setAttribute("data-to", edge.to);
    svg.appendChild(line);

    // Draw edge weight label
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", midX);
    text.setAttribute("y", midY);
    text.setAttribute("fill", getEdgeLabelColor());
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
    text.setAttribute("fill", getNodeLabelColor());
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
    circle.setAttribute("fill", getNodeColor());
    circle.setAttribute("fill-opacity", NODE_COLOR_OPACITY);
    circle.setAttribute("data-id", node.id);
    circle.style.cursor = "pointer";
    svg.appendChild(circle);

    // Add drag & drop for moving nodes
    circle.addEventListener("mousedown", startDragNode);
  }
}

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

export { graph, generateRandomGraph, drawGraph, updateAdjacencyWeights };
