import { ASCIIConverter } from "./src/ASCIConverter";
import { RTFReader } from "./src/RTFReader";
import { TeXConverter } from "./src/TeXConverter";
import { TextConverter } from "./src/TextConverter";
import { TextWidgetConverter } from "./src/TextWidgetConverter";
import { Token } from "./src/Token";
import { TokenType } from "./src/TokenType";

const tokens: Token[] = new Array();
tokens.push(new Token(TokenType.CHAR, "A"));
tokens.push(new Token(TokenType.FONT, "F"));
tokens.push(new Token(TokenType.PARA, "P"));

const teXConverter: TextConverter = new TeXConverter();
const textWidget: TextConverter = new TextWidgetConverter();
const asciiConverter: TextConverter = new ASCIIConverter();

const reader: RTFReader = new RTFReader(tokens);
reader.setConverter(teXConverter);

reader.parseRTF();