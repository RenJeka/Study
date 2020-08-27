import pyowm 
from pyowm.utils.config import get_default_config


config_dict = get_default_config()
config_dict['language'] = 'ru'  # your language here
owm = pyowm.OWM('c8a63a2ee8470c321acbfe9f79493f41', config_dict)
place = input("Your country: ")

# Search for current weather in London (Great Britain)
mgr = owm.weather_manager()
observation = mgr.weather_at_place(place)
w = observation.weather
temp = w.temperature('celsius')["temp"]
print("In city "+ place +" rigth now is " + w.detailed_status)
print("Temperature now is: " + str(temp) + " degree")

if temp < 10:
	print("Now is too cold. Advise to dress warmer")
elif temp < 20:
	print("Now is chilly. Advise to dress warmer")
else:
	print("Temperature now is normal. You can dress up what you want")
