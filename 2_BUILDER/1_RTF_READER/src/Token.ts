import { TokenType } from "./TokenType";

export class Token {
  private type: TokenType;
  private char: string;
  private font: string;

  constructor(type: TokenType, char: string, font: string) {
    this.type = type;
    this.char = char;
    this.font = font;
  }

  getType(): TokenType {
    return this.type;
  }

  getChar(): string {
    return this.char;
  }

  getFont(): string {
    return this.font;
  }
}
