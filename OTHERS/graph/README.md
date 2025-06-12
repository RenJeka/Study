# Interactive Graph Visualization & Dijkstra Pathfinding Demo

This project is an interactive educational tool for visualizing graphs and demonstrating Dijkstra's shortest path algorithm. It is designed for students (grades 7–11) and teachers to explore graph theory concepts in a visual and intuitive way.

## Features

- **Random Graph Generation**

  - Generate a random, always-connected undirected graph with a configurable number of nodes (from 5 to 50).
  - Each node is guaranteed to be connected to at least one other node (no isolated nodes).

- **Node and Edge Manipulation**

  - **Drag & Drop:** Move any node by dragging it with the mouse. The graph updates in real time.
  - **Dynamic Edge Weights:** Edge weights are automatically recalculated based on the distance between connected nodes.

- **Color Customization**

  - **Node Color Picker:** Choose any color for the nodes. Node labels automatically become a darker shade for readability.
  - **Edge Color Picker:** Choose any color for the edges. Edge labels also become a darker shade for readability.

- **Background Image**

  - Upload any image to use as the background of the graph area for context or decoration.

- **Dijkstra's Algorithm Visualization**

  - Specify start and end nodes (or leave blank to use defaults: 1 and the last node).
  - Step-by-step visualization of the algorithm:
    - Visited nodes are highlighted.
    - The shortest path is displayed in the log area.
  - All node and edge weights are recalculated before each run to reflect the current graph state.

- **User Interface**
  - Responsive controls for node count, color pickers, and file upload.
  - Clear and informative log area showing the progress and result of the pathfinding.

## How to Use

1. **Set the number of nodes** using the input field.
2. **(Optional) Set start and end nodes** for Dijkstra's algorithm. Leave blank to use defaults.
3. **Customize colors** for nodes and edges using the color pickers.
4. **Upload a background image** if desired.
5. **Generate a new graph** or move nodes as needed.
6. **Click "Find Shortest Path"** to visualize Dijkstra's algorithm step by step.
7. **View the log** for detailed progress and the resulting path.

## Technologies Used

- HTML5, CSS3
- JavaScript (Vanilla, no frameworks)
- SVG for graph rendering

## Installation & Running

> **Note:** You must use a local server to run this project (opening `index.html` directly will not work due to browser security restrictions).

### 1. Install dependencies

Open a terminal in the project folder and run:

```sh
npm install
```

### 2. Build the bundle

```sh
npm run bundle
```

### 3. Start a local server

You can use any static server. Here are some options:

#### Using VS Code Live Server extension

- Install the "Live Server" extension in VS Code.
- Right-click `index.html` and select **Open with Live Server**.

#### Using Node.js http-server

```sh
npx http-server .
```

#### Using Python (if installed)

```sh
python -m http.server
```

### 4. Open in your browser

Go to [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

---

## Notes

- The graph is always connected; there are no isolated nodes.
- Edge weights are not static—they depend on the current positions of the nodes.
- The tool is suitable for classroom demonstrations, self-study, and experimentation with graph algorithms.

---

**Developed for educational purposes.**
