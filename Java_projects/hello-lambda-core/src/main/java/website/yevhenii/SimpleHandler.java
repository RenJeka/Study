package website.yevhenii;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.apache.http.client.methods.HttpPost;
import org.telegram.telegrambots.meta.api.objects.Update;
//import org.apache.http.message.BasicHttpRequest;
//import org.telegram.telegrambots.meta.api.objects.Update;

//import java.io.InputStream;

public class SimpleHandler implements RequestHandler<Update, String> {

//    private static final ObjectMapper MAPPER = new ObjectMapper();

    @Override
    public String handleRequest(Update input, Context context)
    {
//        Update update;
        LambdaLogger logger = context.getLogger();
        try {
//            update = MAPPER.readValue(input, Update.class);
            logger.log(input.getClass().toString());
            logger.log("---------- START -----------");
//            logger.log(update.toString());

            logger.log(input.toString());
            logger.log("---------- END -----------");
        } catch (Exception e) {
            System.err.println("Failed to parse update: " + e);
            throw new RuntimeException("Failed to parse update!", e);
        }

        return "OK!";
    }
}
