package website.yevhenii;

import org.telegram.telegrambots.bots.TelegramWebhookBot;
import org.telegram.telegrambots.meta.api.methods.BotApiMethod;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

// BotName: YevheniiJavaBot
// Bot 5960805812:AAGnFLn1XAgQLowDAGWUoVZDGrJw8SpVvrg

public class MyBot extends TelegramWebhookBot {

    @Override
    public BotApiMethod<?> onWebhookUpdateReceived(Update update) {
        Long chatId = getChatId(update);

        SendMessage message = new SendMessage();
        message.setChatId(chatId);
        String userName = update.getMessage().getFrom().getFirstName() + " " + update.getMessage().getFrom().getLastName();
        message.setText("Hello, " + userName + " !");
        try {
            execute(message);
        } catch (TelegramApiException e) {
            throw new RuntimeException(e);
        }
        return message;
    }

    @Override
    public String getBotPath() {
        return "https://b43ql3aerbzexql27d3koe3fuu0kzctp.lambda-url.us-east-1.on.aws/";
    }

    @Override
    public String getBotUsername() {
        return "YevheniiJavaBot";
    }

    @Override
    public String getBotToken() {
        return "5960805812:AAGnFLn1XAgQLowDAGWUoVZDGrJw8SpVvrg";
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

}
