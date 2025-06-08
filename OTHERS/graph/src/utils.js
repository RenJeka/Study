export function log(text) {
  const logDiv = document.getElementById("log");
  logDiv.innerText += text + "\n";
}

export function clearLog() {
  const logDiv = document.getElementById("log");
  logDiv.innerText = "";
}

// Utility: get a darker color for text based on a hex color
export function getDarkerColor(hex, factor = 0.5) {
  let r = parseInt(hex.substr(1, 2), 16);
  let g = parseInt(hex.substr(3, 2), 16);
  let b = parseInt(hex.substr(5, 2), 16);
  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);
  return `rgb(${r},${g},${b})`;
}
