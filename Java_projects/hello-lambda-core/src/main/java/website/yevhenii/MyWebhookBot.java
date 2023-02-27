package website.yevhenii;

import com.amazonaws.services.lambda.runtime.LambdaLogger;
import org.telegram.telegrambots.bots.TelegramWebhookBot;
import org.telegram.telegrambots.meta.api.methods.BotApiMethod;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.nio.charset.StandardCharsets;

public class MyWebhookBot extends TelegramWebhookBot {

    @Override
    public BotApiMethod<?> onWebhookUpdateReceived(Update update) {
        return null;
    }
    public BotApiMethod<?> onWebhookUpdateReceived(Update update, LambdaLogger logger) {
        greetUser(update, logger);
        return null;
    }

    public MyWebhookBot() {
        super(System.getenv("botToken"));
    }

    @Override
    public String getBotPath() {
        return "/";
    }

    @Override
    public String getBotUsername() {
        return System.getenv("botUsername");
    }

    public Long getChatId(Update update) {
        if (update.hasMessage()) {
            return update.getMessage().getFrom().getId();
        }

        if (update.hasCallbackQuery()) {
            return update.getCallbackQuery().getFrom().getId();
        }

        return null;
    }

    public void sendMessage(String text, Long chatId, LambdaLogger logger) {

        SendMessage sendMessage = new SendMessage();
        sendMessage.setChatId(chatId);
        sendMessage.setText(new String(text.getBytes(), StandardCharsets.UTF_8));
        sendMessage.setParseMode("markdown");
        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            logger.log("Error, while sending message: " + e.getStackTrace().toString());
            throw new RuntimeException(e);
        }
    }

    public void greetUser(Update update, LambdaLogger logger) {
        String userName = update.getMessage().getFrom().getFirstName() + " " + update.getMessage().getFrom().getLastName();
        String messageText = String.format("Hello, %s! This is my simple Telegram bot on Java! Please, use menu below to know more about it. ", userName);

        sendMessage(messageText, getChatId(update), logger);
    }

}
