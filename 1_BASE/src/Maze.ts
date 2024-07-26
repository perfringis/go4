import { Room } from "./Room";

export class Maze {
  private rooms: Room[] = new Array();

  constructor() {}

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  roomNo(roomNo: number): Room {
    return this.rooms[roomNo];
  }
}
