// === CONFIGURABLE CONSTANTS ===
export const DEFAULT_NODE_COUNT = 15;
export const NODE_RADIUS = 15;
export const NODE_COLOR_OPACITY = 0.5;
export const NODE_LABEL_FONT_SIZE = "14px";
export const NODE_LABEL_FONT_WEIGHT = "bold";
export const EDGE_LABEL_FONT_SIZE = "14px";
export const EDGE_PROBABILITY = 0.15; // Probability of additional edge
export const EDGE_WEIGHT_DIVIDER = 20; // The higher, the lower the weight for the same distance
export const EDGE_WEIGHT_MIN = 1;
export const GRAPH_MARGIN = 50; // Margin from SVG edge

// === COLOR VARIABLES ===
export let nodeColor = "#3498db";
export let edgeColor = "#1fad03";
export let nodeLabelColor = "#1d2d4d"; // Darker than node color
export let edgeLabelColor = "#0e5a01"; // Darker than edge color

export function setNodeColor(val) {
  nodeColor = val;
}
export function setEdgeColor(val) {
  edgeColor = val;
}
export function setNodeLabelColor(val) {
  nodeLabelColor = val;
}
export function setEdgeLabelColor(val) {
  edgeLabelColor = val;
}
export function getNodeColor() {
  return nodeColor;
}
export function getEdgeColor() {
  return edgeColor;
}
export function getNodeLabelColor() {
  return nodeLabelColor;
}
export function getEdgeLabelColor() {
  return edgeLabelColor;
}
