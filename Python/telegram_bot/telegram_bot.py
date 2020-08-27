import pyowm 
import telebot
from pyowm.utils.config import get_default_config

config_dict = get_default_config()
config_dict['language'] = 'ru'  # your language here
owm = pyowm.OWM('c8a63a2ee8470c321acbfe9f79493f41', config_dict)
bot = telebot.TeleBot("1352067373:AAGRN1UH37dbVJGDMFHuBQjyAJvbIyRAomU")

@bot.message_handler(content_types=['text'])
# @bot.message_handler(commands=['start', 'help'])
def send_echo(message):
	#bot.reply_to(message, message.text)
	mgr = owm.weather_manager()
	observation = mgr.weather_at_place(message.text)
	w = observation.weather
	temp = w.temperature('celsius')["temp"]

	answer = "В городе "+ message.text +" сейчас " + w.detailed_status + "\n"
	answer += "Температура сейчас: " + str(temp) + "℃" +"\n"
	answer += "Скорость вертра: " + str(w.wind()['speed']) + " метров за секунду" +"\n"
	answer += "Влажность: " + str(w.humidity) + " %" +"\n\n"
	if temp < 10:
		answer += "Сейчас слишком холодно — одевайся очень тепло!"
	elif temp < 20:
		answer += "Сейчас прохладно — надень что-нибудь теплое."
	else:
		answer += "Температура комфортная. Можешь одевать что-угодно."
	
	bot.send_message(message.chat.id, answer)

bot.polling( none_stop = True )