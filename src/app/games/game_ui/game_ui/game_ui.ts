import {Component, OnInit} from '@angular/core';
import {IGame} from '../../classes/i_game';
import {LifeConfig} from '../../config/life';
import {Life} from '../../classes/life';
import {SettingsController} from '../../../controllers/settings_controller';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-game-ui',
  templateUrl: './game_ui.html',
  styleUrls: ['./game_ui.css']
})
export class GameUIComponent implements OnInit {
  // @ts-ignore
  game: IGame = new Life(LifeConfig[5]);
  controller: SettingsController;
  voteStates: Array<boolean> = Array(10).fill(false);
  sepCodes = [COMMA, ENTER];
  constructor() {
  }

  ngOnInit() {
  }

  assignController(controller: SettingsController) {
    this.controller = controller;
  }

  changeGame(game: IGame): void {
    this.game = game;
    this.voteStates = game.aliveStates;
  }

  changeVote(index: number) {
    this.voteStates[index] = !this.voteStates[index];
    if (index < 9) {
      this.game.birthCounts[index] = this.voteStates[index];
    }
    if (index > 0) {
      this.game.survivalCounts[index - 1] = this.voteStates[index];
    }
  }

  changeStates(states: number) {
    this.controller.changeStatesCount(states);
  }
  range(max: number) {
    return [...Array(max).keys()];
  }
  tableMapping(i: number, j: number) {
    if (i === 1 && j === 1) {
      return 8;
    }
    return j * 3 + i - (3 * j + i > 4 ? 1 : 0);
  }

  addSurvival($event: MatChipInputEvent) {
    const value = $event.input.valueAsNumber;
    if (value >= 0 && value <= 1000) {
      this.game.survivalCounts[value] = true;
    }
    $event.input.value = '';
  }

  addBirth($event: MatChipInputEvent) {
    const value = $event.input.valueAsNumber;
    if (value >= 0 && value <= 1000) {
      this.game.birthCounts[value] = true;
    }
    $event.input.value = '';
  }
}
