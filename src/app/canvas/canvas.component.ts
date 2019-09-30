import {Component, AfterViewInit, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  styles: ['canvas {border: solid 1px gray}']
})

/** Wrapper for the Canvas element. */
export class CanvasComponent implements AfterViewInit, ICanvas {
  /** Default number of rows on the grid. */
  @Input() inRows: number;
  /** Default number of columns on the grid. */
  @Input() inCols: number;
  /** Default size of a cell, measured in pixels. */
  @Input() inCellSize: number;
  /** Current content scale. */
  scale = 1;
  originX: number;
  originY: number;
  rows: number;
  cols: number;
  cellSize: number;
  /** Reference to canvas on the page. */
  @ViewChild('canvas', {static: false}) canvas;
  /** Rendering context for canvas. */
  context: CanvasRenderingContext2D;

  resize(rows: number, cols: number, cellSize: number) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.canvas.nativeElement.width = this.cols * this.cellSize - 1;
    this.canvas.nativeElement.height = this.rows * this.cellSize - 1;
    this.fillGrid('black');
  }
  /** Initialize rendering context after loading the Component on the page. */
  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.rows = this.inRows;
    this.cols = this.inCols;
    this.cellSize = this.inCellSize;
    this.originX = 0;
    this.originY = 0;
  }

  /**
   * Fills the grid with a given color.
   * @param color - Filling color.
   */
  fillGrid(color: string = 'grey') {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.cols * this.cellSize - 1, this.rows * this.cellSize - 1);
  }

  /** Draw a square cell at a given position.
   * @param x - x-coordinate of the cell (zero-indexed).
   * @param y - y-coordinate of the cell (zero-indexed).
   * @param color - Name or hex value of the color.
   * @param border - Whether or not to draw a border around the cell.
   * @param borderColor - color of the border.
   */
  renderCell(x: number, y: number, color: string, border: boolean = false, borderColor: string = 'gray'): void {
    this.context.fillStyle = color;
    if (border) {
      this.context.fillRect(
        Math.floor(this.originX + x * this.cellSize * this.scale),
        Math.floor(this.originY + y * this.cellSize * this.scale),
        Math.floor((this.cellSize - 1) * this.scale),
        Math.floor((this.cellSize - 1) * this.scale)
      );
    } else {
      this.context.fillRect(
        Math.floor(this.originX + x * this.cellSize * this.scale),
        Math.floor(this.originY + y * this.cellSize * this.scale),
        Math.ceil(this.cellSize * this.scale),
        Math.ceil(this.cellSize * this.scale)
      );
    }
  }

  /** Test function: Fill grid with random colors. */
  randomFill(): void {
    console.log('random fill');
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        // tslint:disable-next-line:no-bitwise
        const c = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        this.renderCell(x, y, c);
      }
    }
  }

  assignOrigin(originX: number, originY: number): void {
    this.originX = Math.max(Math.min(originX, 0), this.cols * this.cellSize * (1 - this.scale));
    this.originY = Math.max(Math.min(originY, 0), this.rows * this.cellSize * (1 - this.scale));
  }

  zoom(zoom: number, x: number, y: number) {
    this.fillGrid('black');
    x = (x - this.originX) / this.scale;
    y = (y - this.originY) / this.scale;
    this.originX += x * this.scale * (1 - zoom);
    this.originY += y * this.scale * (1 - zoom);
    this.scale *= zoom;
    this.scale = Math.max(this.scale, 1);
    this.assignOrigin(this.originX, this.originY);
  }
}
