import { ASCIIText } from "./ASCIIText";
import { TextConverter } from "./TextConverter";

export class ASCIIConverter implements TextConverter {
  convertCharacter(char: string): void {
    throw new Error("Method not implemented.");
  }

  convertFontChange(font: string): void {
    throw new Error("Method not implemented.");
  }

  convertParagraph(): void {
    throw new Error("Method not implemented.");
  }

  getASCIIText(): ASCIIText {
    return new ASCIIText();
  }
}
