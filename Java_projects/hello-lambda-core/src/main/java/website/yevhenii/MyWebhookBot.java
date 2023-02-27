package website.yevhenii;

import com.amazonaws.services.lambda.runtime.LambdaLogger;
import org.telegram.telegrambots.bots.TelegramWebhookBot;
import org.telegram.telegrambots.meta.api.methods.BotApiMethod;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class MyWebhookBot extends TelegramWebhookBot {

    private static final Map<String, String> keyboardButtons = Map.of(
            "General Info about this", "general_info",
            "Technology stack", "technology_stack"
    );

    @Override
    public BotApiMethod<?> onWebhookUpdateReceived(Update update) {
        return null;
    }
    public BotApiMethod<?> onWebhookUpdateReceived(Update update, LambdaLogger logger) {
        String updateMessage = update.getMessage().getText();

        if (update.hasMessage() && updateMessage.equals("/start")) {
            SendMessage message = createMessage(getGreetingMessage(update), getChatId(update));

            attachButtons(message);
            try {
                execute(message);
            } catch (TelegramApiException e) {
                logger.log("Error, while sending message: " + e.getStackTrace().toString());
                throw new RuntimeException(e);
            }
        } else if (update.hasMessage()) {
            String updateText = update.getMessage().getText();
            SendMessage message = createMessage(
                    "You said: '" + updateText + "', but this bot very simple and do only actions below",
                    getChatId(update));
            attachButtons(message);
            try {
                execute(message);
            } catch (TelegramApiException e) {
                logger.log("Error, while sending message: " + e.getStackTrace().toString());
                throw new RuntimeException(e);
            }
        }
        return null;
    }

    public MyWebhookBot() {
        super(SystemVariables.botToken);
    }

    @Override
    public String getBotPath() {
        return "/";
    }

    @Override
    public String getBotUsername() {
        return SystemVariables.botUsername;
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

    private SendMessage createMessage(String text, Long chatId) {

        SendMessage sendMessage = new SendMessage();
        sendMessage.setChatId(chatId);
        sendMessage.setText(new String(text.getBytes(), StandardCharsets.UTF_8));
        sendMessage.setParseMode("markdown");
        return sendMessage;
    }

    private String getGreetingMessage(Update update) {
        String userName = update.getMessage().getFrom().getFirstName() + " " + update.getMessage().getFrom().getLastName();
        return String.format("Hello, %s! This is my simple Telegram bot on Java! Please, use menu below to know more about it. ", userName);
    }

    private void attachButtons(SendMessage message) {
        InlineKeyboardMarkup markup = new InlineKeyboardMarkup();

        List<List<InlineKeyboardButton>> keyboard = new ArrayList<>();

        for (String buttonName : keyboardButtons.keySet()) {
            String buttonValue = keyboardButtons.get(buttonName);

            InlineKeyboardButton button = new InlineKeyboardButton();
            button.setText(getCorrectText(buttonName));
            button.setCallbackData(buttonValue);

            keyboard.add(Arrays.asList(button));
        }

        markup.setKeyboard(keyboard);
        message.setReplyMarkup(markup);

    }

    /**
     * Helper method to get text in correct encoding
     * @param text
     * @return
     */
    private String getCorrectText(String text) {
        return new String(text.getBytes(), StandardCharsets.UTF_8);
    }

}
