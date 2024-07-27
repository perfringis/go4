import { Maze } from "./Maze";
import { MazeBuilder } from "./MazeBuilder";

export class MazeGame {
  createMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();

    builder.buildRoom(1);
    builder.buildRoom(2);
    
    builder.buildDoor(1, 2);

    return builder.getMaze();
  }

  createComplexMaze(builder: MazeBuilder): Maze {
    builder.buildRoom(1);

    // ...

    builder.buildRoom(1001);

    return builder.getMaze();
  }
}
