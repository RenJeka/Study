package website.yevhenii;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.methods.updates.SetWebhook;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

public class SimpleHandler implements RequestHandler<APIGatewayV2HTTPEvent, String> {

    ObjectMapper objectMapper = new ObjectMapper();
    MyWebhookBot myWebhookBot = new MyWebhookBot();


    @Override
    public String handleRequest(APIGatewayV2HTTPEvent inputMessage, Context context)
    {
        LambdaLogger logger = context.getLogger();
        try {
            TelegramBotsApi api = new TelegramBotsApi(DefaultBotSession.class);
            this.setWebhook(logger);




            api.registerBot(myWebhookBot, new SetWebhook());
            Update update = objectMapper.readValue(inputMessage.getBody(), Update.class);
            myWebhookBot.onWebhookUpdateReceived(update, logger);
            return "OK";
        } catch (Exception e) {
            System.err.println("Failed to parse update: " + e);
            throw new RuntimeException("Failed to parse update!", e);
        }
    }

    private void setWebhook(LambdaLogger logger) {
        SetWebhook setWebhook = SetWebhook.builder()
                .url(System.getenv("uri"))
                .build();

        try {
            myWebhookBot.setWebhook(setWebhook);
        } catch (TelegramApiException e) {
            logger.log("Error, while setWebhook: " + e.getStackTrace().toString());
        }
    }
}
