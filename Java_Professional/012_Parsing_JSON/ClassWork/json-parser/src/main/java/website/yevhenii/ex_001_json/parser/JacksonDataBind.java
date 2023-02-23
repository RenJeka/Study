package website.yevhenii.ex_001_json.parser;

import com.fasterxml.jackson.databind.ObjectMapper;
import website.yevhenii.ex_001_json.entity.Person;

import java.io.File;
import java.io.IOException;

public class JacksonDataBind {
    public static void parseJson(String path) {
        ObjectMapper mapper = new ObjectMapper();
        Person person = null;
        try {
            person = mapper.readValue(new File(path), Person.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println(person);
        System.out.println(person.getFirstName());
        System.out.println(person.getCourse());
    }

}
