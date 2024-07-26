import { TokenType } from "./TokenType";

export class Token {
  private type: TokenType;
  private value: string;

  constructor(type: TokenType, value: string) {
    this.type = type;
    this.value = value;
  }
}
