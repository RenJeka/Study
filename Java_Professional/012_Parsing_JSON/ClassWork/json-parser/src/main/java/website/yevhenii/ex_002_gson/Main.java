package website.yevhenii.ex_002_gson;

import website.yevhenii.ex_002_gson.parser.GsonParser;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        GsonParser.parseJson("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5");
    }
}
