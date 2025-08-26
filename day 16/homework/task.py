# task1
i = float(input("enter your number: "))
if i > 0:
    print("ეს რიცხვი დადებითი რიცხვია")
elif i < 0:
    print("ეს რიცხვი უარყოფითი რიცხვია")
else:
    print("ეს რიცხვი ნულია")

# task2
i = int(input("enter your age: "))
if 0 <= i <= 12:
    print("ბავშვი ხარ")
elif 13 <= i <= 19:
    print("მოზარდი/თინეიჯერი ხარ")
elif 20 <= i <= 69:
    print("ზრდასრული ხართ")
elif 65 <= i <= 120:
    print("ხანში შესული ხართ")
else:
    print("გურუ ან ჯადოქარი")

# task3
correct_password = "333"
tries = 0
while True:
    guess = input("type the password (or type nah strong password): ")
    tries += 1

    if guess == correct_password:
        print(f"Congratulations! pasword is correct. number of tries: {tries}")
    elif guess == "nah strong password":
            print(f"you failed. number of tries {tries}")
            break
    else: 
        print("wrong password try again")

# task4
num1 = float(input("enter any number"))
num2 = float(input("enter any number"))
num3 = float(input("enter any number"))

print("the biggest number is: ",max(num1,num2,num3))


# task5
day = int(input("type a number between 1 and 7: "))

if day == 1:
    print("ორშაბათი")
elif day == 2:
    print("სამშაბათი")
elif day == 3:
    print("ოთხშაბათი")
elif day == 4:
    print("ხუთშაბათი")
elif day == 5:
    print("პარასკევი")
elif day == 6:
    print("შაბათი")
elif day == 7:
    print("კვირა")
else:
    print("არ ვიცი ეგ რა დღეა")


