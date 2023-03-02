package com.itvdn.json.ex_003_jackson.parser;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itvdn.json.ex_003_jackson.entity.CurrencyRate;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

/**
 * Created by Yevhenii Tykhonov.
 */
public class JacksonParser {
    public static void parseJson(String url) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();

        CurrencyRate[] currencyRates = objectMapper.readValue(new URL(url), CurrencyRate[].class);

        for (CurrencyRate currencyRate : currencyRates) {
            System.out.printf(
                    "Currency change from %s to %s is %s (to buy) and %s (to sale ) \n",
                    currencyRate.getFrom(),
                    currencyRate.getTo(),
                    currencyRate.getBuy(),
                    currencyRate.getSale()
                    );
        }
        System.out.println(" ------------------------------------------------- ");
        System.out.println(currencyRates.toString());

        String jsonString = objectMapper.writerWithDefaultPrettyPrinter()
                                        .writeValueAsString(currencyRates);

        Files.write(Paths.get("D:\\GIT\\My_Sites_Repository\\Study\\Java_Professional\\012_Parsing_JSON\\12_Samples\\src\\main\\resources\\jacksonCurrency.json"),
                jsonString.getBytes(), StandardOpenOption.CREATE);
    }
}
