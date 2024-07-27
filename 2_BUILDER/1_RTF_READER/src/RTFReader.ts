import { TextConverter } from "./TextConverter";
import { Token } from "./Token";
import { TokenType } from "./TokenType";

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
    for (let t of this.tokens) {
      switch (t.getType()) {
        case TokenType.CHAR: {
          this.converter.convertCharacter(t.getChar());
        }
        case TokenType.FONT: {
          this.converter.convertFontChange(t.getFont());
        }
        case TokenType.PARA: {
          this.converter.convertParagraph();
        }
      }
    }
  }
}
