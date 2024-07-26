import { Direction } from "./Direction";
import { Door } from "./Door";
import { Maze } from "./Maze";
import { Room } from "./Room";
import { Wall } from "./Wall";

export class MazeGame {
  constructor() {}

  createMaze(): Maze {
    const aMaze: Maze = new Maze();

    const r1: Room = new Room(1);
    const r2: Room = new Room(2);
    const theDoor: Door = new Door(r1, r2);

    r1.setSide(Direction.NORTH, new Wall());
    r1.setSide(Direction.EAST, theDoor);
    r1.setSide(Direction.SOUTH, new Wall());
    r1.setSide(Direction.WEST, new Wall());

    r2.setSide(Direction.NORTH, new Wall());
    r2.setSide(Direction.EAST, new Wall());
    r2.setSide(Direction.SOUTH, new Wall());
    r2.setSide(Direction.WEST, theDoor);

    aMaze.addRoom(r1);
    aMaze.addRoom(r2);

    return aMaze;
  }
}
