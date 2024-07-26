import { TextConverter } from "./TextConverter";
import { Token } from "./Token";

export class RTFReader {
  private tokens: Token[];
  private converter!: TextConverter;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  setConverter(converter: TextConverter) {
    this.converter = converter;
  }

  parseRTF() {
    
  }
}
