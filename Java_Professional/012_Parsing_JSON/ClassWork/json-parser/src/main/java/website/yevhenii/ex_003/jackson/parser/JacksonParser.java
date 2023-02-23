package website.yevhenii.ex_003.jackson.parser;

import com.fasterxml.jackson.databind.ObjectMapper;
import website.yevhenii.ex_003.jackson.entity.CurrencyRate;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class JacksonParser {
    public static void parseJson(String url) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();

        CurrencyRate[] currencyRates = objectMapper.readValue(new URL(url), CurrencyRate[].class);

        // Console output
        for (CurrencyRate currencyRate : currencyRates) {
            System.out.println(currencyRate);
        }

        // string, that helps us to write JSON to file
        String jsonString = objectMapper.writerWithDefaultPrettyPrinter()
                                        .writeValueAsString(currencyRates);

        // Write JSON to file
        Files.write(Paths.get(
                "src\\main\\resources\\jacksonCurrency.json"),
                jsonString.getBytes(), StandardOpenOption.CREATE
        );
    }
}
