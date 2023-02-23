package website.yevhenii.ex_003.jackson;

import website.yevhenii.ex_003.jackson.parser.JacksonParser;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        JacksonParser jacksonParser = new JacksonParser();
        jacksonParser.parseJson("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5");
    }
}
