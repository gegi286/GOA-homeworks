# task1
num1 = int(input("enter your first number: "))
num2 = int(input("enter your second number: "))
if num1 > num2:
    print("first is more than second" )
elif num1 < num2 :
    print("first is less than second")
else:
    print("first number equal to second number")

# task2

i = input("enter your name: ")
name = "goga"
if i == name :
    print("სეხნიები ვართ")
else:
    print("სხვადასხვა სახელები გავქვს")

# task3

num1 = 66
num2 = 77
if num1 > 0 and num2 > 0:
    print("ორივე რიცხვი დადებითია")
elif num1 < 0 and num2 < 0:
    print("ორივე რიცხვი უარყოფითია")
else:
    print("ეს რა ჯანდაბაა")

# task4

for i in range(50,100,2):
    print(i)

# task5

i = 20
while i < 40:
    print(i)
    i = i + 1