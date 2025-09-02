# task 1
number = int(input("enter first number: "))
number2 = int(input("enter second number: "))
number3 = int(input("enter third number: "))
if number == number2:
    print(" 1 და 2 ტოლია")
elif number == number3 :
    print("1 და 3 ტოლია")
elif number == number2 == number3:
    print("სამივე ტოლია")
else:
    print("არაფერი არაფრის ტოლია")

# task2
თვე = int(input("put number 1-12: "))

if თვე == 12 or თვე == 1 or თვე == 2: 
    print("ზამთარი")
elif თვე == 3 or თვე == 4 or თვე == 5:
    print("გაზაფხული")
elif თვე == 6 or თვე == 7 or თვე == 8:
    print("ზაფხული")
elif თვე == 9 or თვე == 10 or თვე == 11:
    print("შემოდგომა")
else:
    print("გთხოვთ შეიყვანეთ რიცხვი 1-12 მდე")

# task3
name = "admin"
password = "adminpassword123"
name = input("enter your name: ")
if name == "admin":
    print(input("enter your password: "))
elif password == "adminpassword123" :
    print("hello admin")
else:
    print("incorrect password")


