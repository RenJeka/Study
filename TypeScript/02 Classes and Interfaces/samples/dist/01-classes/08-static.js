class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Grid {
    constructor() {
        this.points = [];
    }
    add(point) {
        this.points.push(point);
    }
    buildGrid() {
        for (let i = 0; i < this.points.length; i++) {
            console.log(this.points[i]);
        }
    }
}
Grid.origin = { x: 0, y: 0 }; // Статическое свойство. Общее для всех экземпляров
let grid1 = new Grid();
grid1.add(Grid.origin);
grid1.add(new Point(1, 2));
grid1.add(new Point(10, 20));
grid1.add(new Point(12, 24));
grid1.buildGrid();
let grid2 = new Grid();
grid2.add(Grid.origin);
grid2.add(new Point(6, 2));
grid2.add(new Point(7, 2));
grid2.add(new Point(1, 24));
grid2.buildGrid();
//# sourceMappingURL=08-static.js.map