import { CountingMazeBuilder } from "./src/CountingMazeBuilder";
import { Maze } from "./src/Maze";
import { MazeGame } from "./src/MazeGame";
import { StandardMazeBuilder } from "./src/StandardMazeBuilder";

let game: MazeGame = new MazeGame();
let standardBuilder: StandardMazeBuilder = new StandardMazeBuilder();
let countingBuilder: CountingMazeBuilder = new CountingMazeBuilder();
let maze: Maze;

maze = game.createMaze(standardBuilder);
maze = standardBuilder.getMaze();