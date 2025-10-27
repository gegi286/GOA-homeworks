# task1
for i in range(1,50):
    print(i)
if i % 2 == 0:
    print("ლუწია")
elif i % 2 == 1:
    print("კენტია")

# task2
for i in range(0,20):
    print(i)
if i / 3:
    print("იყოფა 3-ზე")
elif i / 5:
    print("იყოფა 5-ზე")
elif i / 3 and i / 5:
    print("იყოფა 3-ზე და 5-ზე")

# task3
w = 0
e = 0
num = int(input("enter your number: "))
for i in range(0,num):
    if i % 2 == 0:
        print("ლუწი",i)
        w = w + 1
    else:
        print("კენტი",i)
        e = e + 1
print("ამდენი კენტი რიცხვია",e)
print("ამდენი ლუწი რიცხვი",w)

# task4
listt = [10, 25, 33, 47, 80, 99]
for i in listt:
    if i > 50:
        print("მეტი 50-ზე")
    elif i < 50:
        print("ნაკლები 50-ზე")

# task5
for i in range(0,100):
    if i % 2 == 0:
        print(i)

# task6
my_list = ["anano", "anita",  "giorgi", "anzori", "luka"]
for i in range(0,5):
    if my_list[i][0] == "a":
        print(my_list[i])

# task7
for i in range(0,20):
    if i == 0:
        print("ნულია")
    elif i % 2 == 1:
        print("კენტია")
    elif i % 2 == 0:
        print("ლუწია")

# task8
my_list1 = [5, 10, 95, 33, 49, 55]
for i in range(0,6):
    if my_list1[i] % 5 == 0:
        print(my_list1[i])

# task9
word = input("enter your word: ")
for i in range(1):
    if  word[i][0] == i:
        print(word[i])

# task10
total = 0
for i in range(1,10):
    print(i)
    i = total + 1
    print("ჯამი არის: X")