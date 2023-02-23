package com.itvdn.json.ex_003_jackson;

import com.itvdn.json.ex_003_jackson.parser.JacksonParser;

import java.io.IOException;

/**
 * Created by Yevhenii Tykhonov.
 */
public class Main {
    public static void main(String[] args) throws IOException {
        JacksonParser.parseJson("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
    }
}
