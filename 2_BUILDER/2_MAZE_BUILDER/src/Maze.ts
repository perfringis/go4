import { Room } from "./Room";

export class Maze {
  private rooms: Room[] = new Array();

  constructor() {}

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  getRoom(roomNumber: number): Room | undefined {
    return this.rooms.find((room: Room) => {
      return room.getRoomNumber() === roomNumber;
    });
  }
}
