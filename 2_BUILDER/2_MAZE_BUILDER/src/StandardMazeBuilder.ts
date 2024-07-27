import { Direction } from "./Direction";
import { Door } from "./Door";
import { Maze } from "./Maze";
import { MazeBuilder } from "./MazeBuilder";
import { Room } from "./Room";
import { Wall } from "./Wall";

export class StandardMazeBuilder implements MazeBuilder {
  private maze!: Maze;

  constructor() {}

  buildMaze(): void {
    this.maze = new Maze();
  }

  buildRoom(roomNumber: number): void {
    if (!this.maze.getRoom(roomNumber)) {
      const room: Room = new Room(roomNumber);

      room.setSide(Direction.NORTH, new Wall());
      room.setSide(Direction.SOUTH, new Wall());
      room.setSide(Direction.EAST, new Wall());
      room.setSide(Direction.WEST, new Wall());

      this.maze.addRoom(room);
    }
  }

  buildDoor(roomFrom: number, roomTo: number): void {
    const roomOne: Room | undefined = this.maze.getRoom(roomFrom);
    const roomTwo: Room | undefined = this.maze.getRoom(roomTo);

    const d: Door = new Door(roomOne, roomTwo);

    roomOne?.setSide(this.commonWall(roomOne, roomTwo), d);
    roomTwo?.setSide(this.commonWall(roomOne, roomTwo), d);
  }

  getMaze(): Maze {
    return this.maze;
  }

  private commonWall(
    roomFrom: Room | undefined,
    roomTo: Room | undefined
  ): Direction {
    return Direction.EAST;
  }
}
