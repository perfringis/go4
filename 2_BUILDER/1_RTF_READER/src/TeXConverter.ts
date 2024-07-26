import { TextConverter } from "./TextConverter";
import { TeXText } from "./TeXText";

export class TeXConverter implements TextConverter {
  convertCharacter(char: string): void {
    throw new Error("Method not implemented.");
  }

  convertFontChange(font: string): void {
    throw new Error("Method not implemented.");
  }

  convertParagraph(): void {
    throw new Error("Method not implemented.");
  }

  getTeXText(): TeXText {
    return new TeXText();
  }
}
