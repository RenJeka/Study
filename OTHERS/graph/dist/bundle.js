(() => {
  // src/utils.js
  function log(text) {
    const logDiv = document.getElementById("log");
    logDiv.innerText += text + "\n";
  }
  function clearLog() {
    const logDiv = document.getElementById("log");
    logDiv.innerText = "";
  }
  function getDarkerColor(hex, factor = 0.5) {
    let r = parseInt(hex.substr(1, 2), 16);
    let g = parseInt(hex.substr(3, 2), 16);
    let b = parseInt(hex.substr(5, 2), 16);
    r = Math.floor(r * factor);
    g = Math.floor(g * factor);
    b = Math.floor(b * factor);
    return `rgb(${r},${g},${b})`;
  }

  // src/config.js
  var DEFAULT_NODE_COUNT = 15;
  var NODE_RADIUS = 15;
  var NODE_COLOR_OPACITY = 0.5;
  var NODE_LABEL_FONT_SIZE = "14px";
  var NODE_LABEL_FONT_WEIGHT = "bold";
  var EDGE_LABEL_FONT_SIZE = "14px";
  var EDGE_PROBABILITY = 0.15;
  var EDGE_WEIGHT_DIVIDER = 20;
  var EDGE_WEIGHT_MIN = 1;
  var GRAPH_MARGIN = 50;
  var nodeColor = "#3498db";
  var edgeColor = "#1fad03";
  var nodeLabelColor = "#1d2d4d";
  var edgeLabelColor = "#0e5a01";
  function setNodeColor(val) {
    nodeColor = val;
  }
  function setEdgeColor(val) {
    edgeColor = val;
  }
  function setNodeLabelColor(val) {
    nodeLabelColor = val;
  }
  function setEdgeLabelColor(val) {
    edgeLabelColor = val;
  }
  function getNodeColor() {
    return nodeColor;
  }
  function getEdgeColor() {
    return edgeColor;
  }
  function getNodeLabelColor() {
    return nodeLabelColor;
  }
  function getEdgeLabelColor() {
    return edgeLabelColor;
  }

  // src/drag.js
  var svg = document.getElementById("graph");
  svg.addEventListener("mousemove", dragNode);
  svg.innerHTML = "";
  var draggingNode = null;
  var offsetX = 0;
  var offsetY = 0;
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
  function startDragNode(e) {
    draggingNode = parseInt(e.target.getAttribute("data-id"));
    const node = graph.nodes.find((n) => n.id === draggingNode);
    offsetX = e.clientX - node.x;
    offsetY = e.clientY - node.y;
    svg.addEventListener("mousemove", dragNode);
    svg.addEventListener("mouseup", stopDragNode);
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

  // src/graph.js
  var svg2 = document.getElementById("graph");
  var graph = { nodes: [], edges: [], adjacencyList: {} };
  function drawGraph() {
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
      svg2.appendChild(line);
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2;
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", midX);
      text.setAttribute("y", midY);
      text.setAttribute("fill", getEdgeLabelColor());
      text.setAttribute("font-size", EDGE_LABEL_FONT_SIZE);
      text.setAttribute("text-anchor", "middle");
      text.textContent = edge.weight;
      svg2.appendChild(text);
    }
    for (const node of graph.nodes) {
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", node.x);
      text.setAttribute("y", node.y + 4);
      text.setAttribute("fill", getNodeLabelColor());
      text.setAttribute("font-size", NODE_LABEL_FONT_SIZE);
      text.setAttribute("font-weight", NODE_LABEL_FONT_WEIGHT);
      text.setAttribute("text-anchor", "middle");
      text.textContent = node.id;
      svg2.appendChild(text);
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
      svg2.appendChild(circle);
      circle.addEventListener("mousedown", startDragNode);
    }
  }
  function generateRandomGraph(nodeCount) {
    graph = { nodes: [], edges: [], adjacencyList: {} };
    svg2.innerHTML = "";
    clearLog();
    const width = svg2.clientWidth;
    const height = svg2.clientHeight;
    for (let i = 1; i <= nodeCount; i++) {
      const angle = 2 * Math.PI * (i - 1) / nodeCount;
      const radius = Math.min(width, height) / 2 - GRAPH_MARGIN;
      const x = width / 2 + radius * Math.cos(angle);
      const y = height / 2 + radius * Math.sin(angle);
      graph.nodes.push({ id: i, x, y });
      graph.adjacencyList[i] = [];
    }
    for (let i = 2; i <= nodeCount; i++) {
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
      graph.adjacencyList[to].push({ to: from, weight });
    }
    for (let i = 1; i <= nodeCount; i++) {
      for (let j = i + 1; j <= nodeCount; j++) {
        const exists = graph.edges.some(
          (e) => e.from === i && e.to === j || e.from === j && e.to === i
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
          graph.adjacencyList[j].push({ to: i, weight });
        }
      }
    }
    drawGraph();
  }
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
  function setupColorPickers(nodeColorPicker2, edgeColorPicker2, getDarkerColor2) {
    nodeColorPicker2.addEventListener("input", (e) => {
      setNodeColor(e.target.value);
      setNodeLabelColor(getDarkerColor2(e.target.value, 0.5));
      drawGraph();
    });
    edgeColorPicker2.addEventListener("input", (e) => {
      setEdgeColor(e.target.value);
      setEdgeLabelColor(getDarkerColor2(e.target.value, 0.5));
      drawGraph();
    });
  }

  // src/dijkstra.js
  var svg3 = document.getElementById("graph");
  var startPathSearchBtn = document.getElementById("startPathSearch");
  function highlightNode(id, color) {
    const circles = svg3.querySelectorAll("circle");
    for (const c of circles) {
      if (parseInt(c.getAttribute("data-id")) === id) {
        c.setAttribute("fill", color);
      }
    }
  }
  async function dijkstra(start, end) {
    const nodeIds = graph.nodes.map((n) => n.id);
    if (!nodeIds.includes(start) || !nodeIds.includes(end)) {
      log("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0430\u0431\u043E \u043A\u0456\u043D\u0446\u0435\u0432\u043E\u0457 \u0432\u0435\u0440\u0448\u0438\u043D\u0438.");
      return;
    }
    const dist = {};
    const prev = {};
    const visited = /* @__PURE__ */ new Set();
    for (const node of graph.nodes) {
      dist[node.id] = Infinity;
      prev[node.id] = null;
    }
    dist[start] = 0;
    startPathSearchBtn.disabled = true;
    log(
      `\u0417\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043D\u0430\u0439\u043A\u043E\u0440\u043E\u0442\u0448\u043E\u0433\u043E \u0448\u043B\u044F\u0445\u0443 \u0437  ${start} \u043F\u043E ${end || "\u043E\u0441\u0442\u0430\u043D\u043D\u044E"} \u0432\u0435\u0440\u0448\u0438\u043D\u0443`
    );
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
      log(`\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0432\u0435\u0440\u0448\u0438\u043D\u0443 ${u}`);
      await new Promise((r) => setTimeout(r, 500));
      for (const neighbor of graph.adjacencyList[u]) {
        const alt = dist[u] + neighbor.weight;
        if (alt < dist[neighbor.to]) {
          dist[neighbor.to] = alt;
          prev[neighbor.to] = u;
        }
      }
    }
    if (end !== null && end !== void 0 && dist[end] < Infinity) {
      const path = [];
      let u = end;
      while (u !== null) {
        path.unshift(u);
        u = prev[u];
      }
      log(`\u0428\u043B\u044F\u0445: ${path.join(" \u2192 ")}`);
    } else {
      log("\u041D\u0430\u0439\u043A\u043E\u0440\u043E\u0442\u0448\u0438\u0439 \u0448\u043B\u044F\u0445 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E.");
    }
    startPathSearchBtn.disabled = false;
  }

  // src/bgImage.js
  var uploadBgImageBtn = document.getElementById("uploadBgImage");
  var bgImageInput = document.getElementById("bgImageInput");
  var graphContainer = document.getElementById("graphContainer");
  function setupBgImageUpload() {
    uploadBgImageBtn.addEventListener("click", () => {
      bgImageInput.click();
    });
    bgImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        graphContainer.style.backgroundImage = `url('${evt.target.result}')`;
      };
      reader.readAsDataURL(file);
    });
  }

  // script.js
  var nodeColorPicker = document.getElementById("nodeColorPicker");
  var edgeColorPicker = document.getElementById("edgeColorPicker");
  var svg4 = document.getElementById("graph");
  var nodeCountInput = document.getElementById("nodeCount");
  var startNodeInput = document.getElementById("startNode");
  var endNodeInput = document.getElementById("endNode");
  var startPathSearchBtn2 = document.getElementById("startPathSearch");
  var nodeCountOutput = document.getElementById("nodeCountOutput");
  var startNodeOutput = document.getElementById("startNodeOutput");
  var endNodeOutput = document.getElementById("endNodeOutput");
  nodeCountInput.value = DEFAULT_NODE_COUNT;
  startNodeInput.value = "";
  endNodeInput.value = "";
  var endNodeTouched = false;
  endNodeInput.addEventListener("input", function() {
    endNodeOutput.value = this.value;
    endNodeTouched = true;
  });
  nodeCountInput.addEventListener("input", function() {
    nodeCountOutput.value = this.value;
    startNodeInput.max = this.value;
    endNodeInput.max = this.value;
    if (+startNodeInput.value > +this.value) startNodeInput.value = this.value;
    if (+endNodeInput.value > +this.value) endNodeInput.value = this.value;
    startNodeOutput.value = startNodeInput.value;
    if (!endNodeTouched) {
      endNodeInput.value = this.value;
      endNodeOutput.value = this.value;
    } else {
      endNodeOutput.value = endNodeInput.value;
    }
  });
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
  startNodeInput.addEventListener("input", function() {
    startNodeOutput.value = this.value;
  });
  endNodeInput.addEventListener("input", function() {
    endNodeOutput.value = this.value;
    endNodeTouched = true;
  });
  document.getElementById("generateGraph").addEventListener("click", () => {
    const count = parseInt(nodeCountInput.value);
    if (count >= 5 && count <= 50) generateRandomGraph(count);
  });
  startPathSearchBtn2.addEventListener("click", () => {
    const circles = svg4.querySelectorAll("circle");
    circles.forEach((c) => {
      c.classList.remove("visited");
      c.classList.remove("current");
      c.setAttribute("fill", getNodeColor());
    });
    let start = parseInt(startNodeInput.value);
    let end = parseInt(endNodeInput.value);
    if (isNaN(start)) start = 1;
    if (isNaN(end)) end = parseInt(nodeCountInput.value);
    clearLog();
    updateAdjacencyWeights();
    dijkstra(start, end);
  });
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
    setupColorPickers(nodeColorPicker, edgeColorPicker, getDarkerColor);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const infoBtn = document.getElementById("infoBtn");
    const infoModal = document.getElementById("infoModal");
    const closeModal = document.getElementById("closeModal");
    infoBtn.addEventListener("click", () => {
      infoModal.style.display = "flex";
    });
    closeModal.addEventListener("click", () => {
      infoModal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
      if (e.target === infoModal) {
        infoModal.style.display = "none";
      }
    });
  });
})();
