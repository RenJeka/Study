package website.yevhenii;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.telegram.telegrambots.meta.api.objects.Update;

public class SimpleHandler implements RequestHandler<APIGatewayV2HTTPEvent, String> {

    ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String handleRequest(APIGatewayV2HTTPEvent inputMessage, Context context)
    {
//        Update update;
        LambdaLogger logger = context.getLogger();
        try {
            logger.log("---------- START -----------");

            Update updateMessage = objectMapper.readValue(inputMessage.getBody(), Update.class);
            logger.log("---------- getUpdateId -----------");
            logger.log(updateMessage.getUpdateId().toString());
            logger.log("---------- USER -----------");
            logger.log(updateMessage.getMessage().getFrom().getFirstName() +  " " + updateMessage.getMessage().getFrom().getLastName());
            logger.log("---------- MESSAGE -----------");
            logger.log(updateMessage.getMessage().getText());
            logger.log("---------- END -----------");
        } catch (Exception e) {
            System.err.println("Failed to parse update: " + e);
            throw new RuntimeException("Failed to parse update!", e);
        }

        return "OK!";
    }
}
