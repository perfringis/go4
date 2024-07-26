import { MapSite } from "./MapSite";

export class Wall extends MapSite {
  constructor() {
    super();
  }

  enter(): void {
    throw new Error("Method not implemented.");
  }
}
