# # task1
word = input("enter what you want: ")
for i in word:
    print(i)
    if i == "e" or i == "E":
        break
    

# task2
u = input("enter what you want: ")
for i in range(1):
    if "bad" in u:
        print("აკრძალული სიტყვა")
    else:
        print("ყველაფერი რიგზეა")

# task3
p = input("enter what you want: ")
for i in p:
    if i == " ":
        continue
    print(i)

# task4
o = input("enter what you want: ")
for i in o:
    if i == "a" or i == "e" or i == "i" or i == "o" or i == "u":
        continue
    print(i)

# task5
start = int(input("enter number: "))
end = int(input("enter number: " ))
for i in range(start,end + 1):
    if i % 15 == 0:
        print(i)
        break

# task6
i = 0
while True:
    y = input("enter word: ")
    if y == "python is best":
        break
    print("you should learn python")

# \<.BOSS.>/
total = 0
w = int(input("enter number: "))
l = int(input("enter number: " ))
for i in range(w,l + 1):
    if i % 3 == 0:
        total = total + 1
        if total == 3:
            print(i)

# the end