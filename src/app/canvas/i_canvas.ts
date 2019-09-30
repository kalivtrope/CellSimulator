interface ICanvas {
  cols: number;
  rows: number;
  cellSize: number;
  scale: number;
  originX: number;
  originY: number;
  assignOrigin(originX: number, originY: number): void;
  renderCell(x: number, y: number, color: string, border: boolean, borderColor?: string): void;
  randomFill(): void;
  canvas: any;
  fillGrid(color?: string): void;
  resize(rows: number, cols: number, cellSize: number);
  zoom(zoom: number, x: number, y: number);
}
