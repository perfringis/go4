export interface TextConverter {
  convertCharacter(char: string): void;
  convertFontChange(font: string): void;
  convertParagraph(): void;
}
