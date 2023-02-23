package website.yevhenii.ex_001_json;

import website.yevhenii.ex_001_json.parser.JacksonDataBind;

public class Main {
    public static void main(String[] args) {
        JacksonDataBind.parseJson("src\\main\\resources\\person.json");
    }
}
