import { TextConverter } from "./TextConverter";
import { TextWidget } from "./TextWidget";

export class TextWidgetConverter implements TextConverter {
  convertCharacter(char: string): void {
    throw new Error("Method not implemented.");
  }

  convertFontChange(font: string): void {
    throw new Error("Method not implemented.");
  }

  convertParagraph(): void {
    throw new Error("Method not implemented.");
  }

  getTextWidget(): TextWidget {
    return new TextWidget();
  }
}
