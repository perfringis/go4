import { RTFReader } from "./src/RTFReader";
import { TeXConverter } from "./src/TeXConverter";
import { Token } from "./src/Token";
import { TokenType } from "./src/TokenType";

const tokens: Token[] = new Array();
tokens.push(new Token(TokenType.CHAR, "C", "Times New Roman"));
tokens.push(new Token(TokenType.FONT, "F", "Times New Roman"));
tokens.push(new Token(TokenType.PARA, "P", "Times New Roman"));

const teXConverter: TeXConverter = new TeXConverter();

const reader: RTFReader = new RTFReader(tokens);
reader.setConverter(teXConverter);

reader.parseRTF();
