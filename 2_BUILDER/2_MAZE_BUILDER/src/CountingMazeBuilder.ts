import { Direction } from "./Direction";
import { Maze } from "./Maze";
import { MazeBuilder } from "./MazeBuilder";

export class CountingMazeBuilder implements MazeBuilder {
  private _doors: number;
  private _rooms: number;

  constructor() {
    this._doors = 0;
    this._rooms = 0;
  }

  buildMaze(): void {}

  buildRoom(room: number): void {
    this._rooms = this._rooms + 1;
  }

  buildDoor(roomFrom: number, roomTo: number): void {
    this._doors = this._doors + 1;
  }

  getMaze(): Maze {
    return new Maze();
  }

  addWall(roomNo: number, direction: Direction): void {}

  getCounts(): { rooms: number; doors: number } {
    return {
      rooms: this._rooms,
      doors: this._doors,
    };
  }
}
