# Stupid calculator. v1

from colorama import init
from colorama import Fore, Back, Style

# use Colorama to make Termcolor work on Windows too
init()

print(Fore.BLACK)
print(Back.GREEN)
what = input("What functional are you need? (+ , -)")

print(Back.CYAN)
a = float(input("Please, insert first number: "))
b = float(input("Please, insert second number: "))

print(Back.YELLOW)
# Conditions
if what == "+":
	c = a + b
	print("Result: " + str(c)) 
elif what == "-":
	c = a - b
	print("Result: " + str(c)) 
else: 
	print("Wrong operation!")

input()

