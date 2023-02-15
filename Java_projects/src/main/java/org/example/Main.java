package org.example;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Message;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

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

    @Override
    public void onUpdateReceived(Update updateEvent) {
        String userName = updateEvent.getMessage().getFrom().getFirstName();
        Long chatId = getChatId(updateEvent);
        SendMessage message = createMessage("Hello, " + userName + "! =)");
        message.setChatId(chatId);
        sendApiMethodAsync(message);
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
        message.setText(text);
        message.setParseMode("markdown");
        return message;
    }
}
