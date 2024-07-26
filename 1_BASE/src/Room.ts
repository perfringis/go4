import { Direction } from "./Direction";
import { MapSite } from "./MapSite";

export class Room extends MapSite {
  private _roomNumber: number;
  private _sides: MapSite[] = new Array(4);

  constructor(roomNo: number) {
    super();

    this._roomNumber = roomNo;
  }

  getSide(direction: Direction): MapSite {
    return this._sides[direction];
  }

  setSide(direction: Direction, mapSite: MapSite): void {
    this._sides[direction] = mapSite;
  }

  enter(): void {
    throw new Error("Method not implemented.");
  }
}
