package website.yevhenii;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.methods.BotApiMethod;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

public class SimpleHandler implements RequestHandler<APIGatewayV2HTTPEvent, BotApiMethod<?>> {

    ObjectMapper objectMapper = new ObjectMapper();
    MyBot myBot = new MyBot();


    @Override
    public BotApiMethod<?> handleRequest(APIGatewayV2HTTPEvent inputMessage, Context context)
    {
//        Update update;
        LambdaLogger logger = context.getLogger();
        try {
            TelegramBotsApi api = new TelegramBotsApi(DefaultBotSession.class);
            Update update = objectMapper.readValue(inputMessage.getBody(), Update.class);
            BotApiMethod<?> response = myBot.onWebhookUpdateReceived(update);
            logger.log("---------- START -----------");

            logger.log("---------- getUpdateId -----------");
            logger.log(update.getUpdateId().toString());
            logger.log("---------- USER -----------");
            logger.log(update.getMessage().getFrom().getFirstName() +  " " + update.getMessage().getFrom().getLastName());
            logger.log("---------- MESSAGE -----------");
            logger.log(update.getMessage().getText());

            logger.log("---------- BotApiMethod RESPONSE -----------");
            logger.log(response.toString());
            logger.log("---------- END -----------");
            return response;
        } catch (Exception e) {
            System.err.println("Failed to parse update: " + e);
            throw new RuntimeException("Failed to parse update!", e);
        }
    }
}
