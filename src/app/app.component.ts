import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SettingsController} from './controllers/settings_controller';
import {NeighboursSelectDelegate} from './delegates/neighbours_select_delegate';
import {NeighboursSelect} from './mapping_functions/neighbours_select';
import {GenerationDelays} from './values/generation_delays';
import {Config} from './games/config/config';
import {CyclicConfig} from './games/config/cyclic';
import {CyclicGHConfig} from './games/config/cyclic_gh';
import {VoteForLifeConfig} from './games/config/vote_for_life';
import {LifeConfig} from './games/config/life';
import {GenerationsConfig} from './games/config/generations';
import {WeightedLifeConfig} from './games/config/weighted_life';
import {LargerThanLifeConfig} from './games/config/larger_than_life';
import {WeightedGenerationsConfig} from './games/config/weighted_generations';
import {Life} from './games/classes/life';
import {Generations} from './games/classes/generations';
import {VoteForLife} from './games/classes/vote_for_life';
import {Cyclic} from './games/classes/cyclic';
import {CyclicGH} from './games/classes/cyclic_gh';
import {WeightedLife} from './games/classes/weighted_life';
import {LargerThanLife} from './games/classes/larger_than_life';
import {WeightedGenerations} from './games/classes/weighted_generations';
import {IGame} from './games/classes/i_game';
import {Colors} from './values/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  tempo = GenerationDelays.names[5];
  tempoMSDelay = GenerationDelays.delays[5];
  density = 0.5;
  @ViewChild('canvas', {static: false}) canvas;
  @ViewChild('ruleConfig', {static: false}) ruleConfig;
  controller: SettingsController;
  neighbourhoodID = 'm';
  neighbourhoodRadius = 1;
  stateSelection = 1;
  draw = true;
  leftClick = 1;
  middleClick = 0;
  rightClick = 0;
  radiusMaxDefault = 5;
  radiusMax = this.radiusMaxDefault;
  backgroundColors = ['black', 'white', 'grey'];
  foregroundValues: number[] = [0, 100, 50, 0, 100, 50];
  selectedBackground = this.backgroundColors[0];
  colorScheme: string[];
  defaultColorScheme: string[];
  states = 0;
  preserveNeighbourhood = false;
  preservePattern = false;
  preserveColors = false;
  inCellSize = 5;
  inRows = 128;
  inCols = 128;

  cellSize = this.inCellSize;
  rows = this.inRows;
  cols = this.inCols;

  collection = [
    {
      name: 'Life',
      type: Life,
      config: LifeConfig
    },
    {
      name: 'Generations',
      type: Generations,
      config: GenerationsConfig
    },
    {
      name: 'Vote for Life',
      type: VoteForLife,
      config: VoteForLifeConfig
    },
    {
      name: 'Cyclic',
      type: Cyclic,
      config: CyclicConfig
    },
    {
      name: 'Cyclic GH',
      type: CyclicGH,
      config: CyclicGHConfig
    },
    {
      name: 'Larger than Life',
      type: LargerThanLife,
      config: LargerThanLifeConfig
    },
    {
      name: 'Weighted Life',
      type: WeightedLife,
      config: WeightedLifeConfig
    },
    {
      name: 'Weighted Generations',
      type: WeightedGenerations,
      config: WeightedGenerationsConfig
    }
  ];

  onContextMenu() {
    return false;
  }

  ngAfterViewInit() {
    this.controller = new SettingsController(this.canvas);
    this.ruleConfig.assignController(this.controller);
    // @ts-ignore
    this.assignGame(this.collection[0].config[5], Life);
  }

  startDrawing(eventData) {
    this.controller.startDrawing(eventData, this.leftClick, this.middleClick, this.rightClick, this.canvas.scale, this.canvas.originX, this.canvas.originY, this.draw);
  }

  moveDrawing(eventData) {
    this.controller.moveDrawing(eventData, this.canvas.scale, this.canvas.originX, this.canvas.originY);
  }

  move($event: MouseEvent) {
    const [offsetX, offsetY] = this.controller.move($event);
    if (!this.draw && offsetX && offsetY) {
      this.canvas.assignOrigin(this.canvas.originX + offsetX, this.canvas.originY + offsetY);
      this.render();
    }
  }

  stopDrawing() {
    this.controller.stopDrawing();
  }


  step(): void {
    this.controller.step();
  }

  start(): void {
    this.controller.start();
  }

  pause(): void {
    this.controller.pause();
  }

  changeNeighbourhood() {
    let selection: NeighboursSelectDelegate;
    switch (this.neighbourhoodID) {
      case 'vn':
        selection = NeighboursSelect.vonNeumannNeighbourhood(this.neighbourhoodRadius);
        break;
      case 'm':
      default:
        selection = NeighboursSelect.mooreNeighbourhood(this.neighbourhoodRadius);
        break;
    }

    this.controller.changeNeighbourhood(selection);
  }

  changeNeighbourhoodRadius(r: number) {
    this.neighbourhoodRadius = r;
    this.changeNeighbourhood();
  }

  changeNeighbourhoodID(buttonID: string) {
    this.neighbourhoodID = buttonID;
    this.changeNeighbourhood();
  }

  isToroidalChecked() {
    this.controller.changeIsToroidal();
  }

  changeTempo(e: number) {
    this.tempo = GenerationDelays.names[e];
    this.tempoMSDelay = GenerationDelays.delays[e];
    this.controller.delayBetweenGenerations = GenerationDelays.delays[e];
  }

  toggleHasBorder() {
    this.controller.toggleHasBorder();
  }

  assignGrid(type: string, params?: any) {
    this.controller.assignGrid(type, params);
  }

  changeDensity(density: number) {
    this.density = density;
  }

  changeStateSelection(value: number) {
    this.stateSelection = value;
  }

  toggleDraw() {
    this.draw = !this.draw;
  }

  assignGame(config: Config, type: IGame) {
    this.defaultColorScheme = [];
    for (const color of config.colorScheme) {
      this.defaultColorScheme.push(color);
    }
    if (!this.preserveNeighbourhood) {
      this.neighbourhoodRadius = config.neighbourhood.radius;
      this.radiusMax = this.neighbourhoodRadius > this.radiusMaxDefault ? this.neighbourhoodRadius : this.radiusMaxDefault;
      this.neighbourhoodID = config.neighbourhood.id;
    }
    const states = config.states || 2;
    this.states = states;
    if (this.preserveColors) {
      this.colorScheme[0] = this.selectedBackground;
      this.computeForeground();
      config.colorScheme = this.colorScheme;
    }
    this.colorScheme = config.colorScheme;
    this.selectedBackground = this.colorScheme[0];
    this.leftClick = states <= this.leftClick ? states - 1 : this.leftClick;
    this.middleClick = states <= this.middleClick ? states - 1 : this.middleClick;
    this.rightClick = states <= this.rightClick ? states - 1 : this.rightClick;
    this.changeNeighbourhood();
    this.ruleConfig.changeGame(this.controller.assignGame(config, type, !this.preservePattern));
  }

  refreshScheme(selectedBackground: string) {
    this.colorScheme[0] = selectedBackground;
    this.controller.changeColorScheme(this.colorScheme);
  }

  foregroundChanged(value: number, position: number) {
    this.foregroundValues[position] = value;
    this.computeForeground();
    this.controller.changeColorScheme(this.colorScheme);
  }

  computeForeground() {
    if (this.states === 2) {
      this.colorScheme[1] = Colors.hsl(this.foregroundValues[0], this.foregroundValues[1], this.foregroundValues[2]);
    } else {
      const states = this.states - 1;
      const hueDif = (this.foregroundValues[3] - this.foregroundValues[0]) / (states - 1);
      const satDif = (this.foregroundValues[4] - this.foregroundValues[1]) / (states - 1);
      const lumDif = (this.foregroundValues[5] - this.foregroundValues[2]) / (states - 1);
      for (let i = 0; i < states; i++) {
        this.colorScheme[i + 1] = Colors.hsl(this.foregroundValues[0] + ((i * hueDif) >> 0), this.foregroundValues[1] +
          ((i * satDif) >> 0), this.foregroundValues[2] + ((i * lumDif) >> 0));
      }
    }
  }

  render() {
    this.controller.render();
  }


  resize() {
    this.controller.resize(this.rows, this.cols);
    this.canvas.resize(this.rows, this.cols, this.cellSize);
    this.render();
  }

  defaultScheme() {
    this.controller.changeColorScheme(this.defaultColorScheme);
  }

  /** Resets the dimensions of the canvas back to default. */
  reset() {
    this.rows = this.inRows;
    this.cols = this.inCols;
    this.cellSize = this.inCellSize;
    this.resize();
  }


  zoom($event: WheelEvent) {
    $event.preventDefault();
    const mouseX = $event.offsetX;
    const mouseY = $event.offsetY;
    const zoom = $event.deltaY < 0 ? 1.05 : 0.95;
    this.canvas.zoom(zoom, mouseX, mouseY);
    this.render();
  }
}
