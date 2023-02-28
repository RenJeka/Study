# SIMPLE JAVA BOT

This project represents my experience in Java and related technologies

The bot can output text, images and give information by pressing the buttons.

Also, this bot can make a request to the NBU at the exchange rate to the hryvnia and respond to the user with a message with the current exchange rate. (This just demonstrates the capabilities of the bot)

#####Try it from Telegram: https://t.me/YevheniiJavaBot

### Technology stack:
    ✔ Java POJO;
    ✔ Java Corretto 11 SDK;
    ✔ Software project management — 'Maven';
    ✔ 'telegrambots' Java library;
    ✔ Telegram webhooks (to get info prom telegram);
    ✔ AWS Lambda

### Deploy:
1.  should be installed all maven dependencies
2.  `mvn clean`
3.  `mvn package`
4.  go to `target` folder and get the `hello-lambda-core-1.0-SNAPSHOT.jar`
5.  create AWS lambda
6.  put file `hello-lambda-core-1.0-SNAPSHOT.jar` to AWS lambda
7.  Set-up the environment variables for your lambda (be guided by the project's `SystemVariables` class)
8.  create POST API Gateway link for your lambda (or get the link while setting-up the lambda)
9.  Take the link from the previous point and use it to set-up webhook for telegram.
10. Check the work of the bot, if it does not work - see the logs in the lambda function (see CloudWatch)

### Setting-up webhook for telegram:
###### Set-up webhook
`https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}`

###### See webhook info
`https://api.telegram.org/bot{my_bot_token}/getWebhookInfo`
