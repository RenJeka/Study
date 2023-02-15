package org.example;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
//import org.telegram.telegrambots.meta.api.objects.Message;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class Main extends TelegramLongPollingBot {

    // BotName: YevheniiJavaBot
    // Bot 5960805812:AAGnFLn1XAgQLowDAGWUoVZDGrJw8SpVvrg
    public static void main(String[] args) throws TelegramApiException {
        TelegramBotsApi api = new TelegramBotsApi(DefaultBotSession.class);

        api.registerBot(new Main());
    }

    @Override
    public String getBotUsername() {
        return "YevheniiJavaBot";
    }

    @Override
    public String getBotToken() {
        return "5960805812:AAGnFLn1XAgQLowDAGWUoVZDGrJw8SpVvrg";
    }

//    @Override
//    public void onUpdateReceived(Update updateEvent) {
//        String userName;
//        Long chatId = getChatId(updateEvent);
//        if (updateEvent.hasMessage()) {
//            userName = updateEvent.getMessage().getFrom().getFirstName();
//        } else {
//            userName = "incognito person";
//        }
//        SendMessage message = createMessage("Hello, " + userName + "! =)");
//        attachButtons(message, Map.of(
//                "Слава Україні", "hello_btn_1"
//        ));
//        message.setChatId(chatId);
//        sendApiMethodAsync(message);
//    }

    @Override
    public void onUpdateReceived(Update updateEvent) {
        Long chatId = getChatId(updateEvent);

        if (updateEvent.hasMessage() && updateEvent.getMessage().getText().equals("/start")) {
            SendMessage message = createMessage("Привіт!");
            message.setChatId(chatId);
            attachButtons(message, Map.of(
                    "Слава Україні!", "glory_for_ukraine"
            ));
            sendApiMethodAsync(message);
        }

        if (updateEvent.hasCallbackQuery()) {
            if (updateEvent.getCallbackQuery().getData().equals("glory_for_ukraine")) {
                SendMessage message = createMessage("Героям Слава!");
                message.setChatId(chatId);
                attachButtons(message, Map.of(
                        "Слава Нації!", "glory_for_nation"
                ));
                sendApiMethodAsync(message);
            }

            if (updateEvent.getCallbackQuery().getData().equals("glory_for_nation")) {
                SendMessage message = createMessage("Смерть ворогам!");
                message.setChatId(chatId);
                sendApiMethodAsync(message);
            }
        }
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

    public SendMessage createMessage(String text) {
        SendMessage message = new SendMessage();
        message.setText(new String(text.getBytes(), StandardCharsets.UTF_8));
        message.setParseMode("markdown");
        return message;
    }

    public void attachButtons(SendMessage message, Map<String, String> buttons) {
        InlineKeyboardMarkup markup = new InlineKeyboardMarkup();

        List<List<InlineKeyboardButton>> keyboard = new ArrayList<>();

        for (String buttonName : buttons.keySet()) {
            String buttonValue = buttons.get(buttonName);

            InlineKeyboardButton button = new InlineKeyboardButton();
            button.setText(new String(buttonName.getBytes(), StandardCharsets.UTF_8));
            button.setCallbackData(buttonValue);

            keyboard.add(Arrays.asList(button));
        }

        markup.setKeyboard(keyboard);
        message.setReplyMarkup(markup);
    }
}
