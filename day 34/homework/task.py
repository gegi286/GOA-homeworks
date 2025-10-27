# task1
cities = ["Tbilisi", "Qutaisi", "Batumi", "Mcxeta", "Mestia", "Zugdidi"]
for i in range(len(cities)):
    if len(cities[i]) > 6:
        print(cities[i])

# task2
arr = ["hidroeleqtrosadguri", "hghrowertyuuiop", "7", "True", "6.7", "GOA"]
for i in range(len(arr)):
    if len(arr[i]) % 15 == 0 :
        print(arr[i])

# task3
number = [7, 11, 10, 77, 99, 3, 8, 22]
for i in range(number[i]):
    print(i)

# task4
arrr = ["hidroeleqtrosadguri", "hghrowertyuuiop", "7", "True", "6.7", "GOA"]
for i in range(len(arrr)):
    if len(arrr[i]) % 5 == 0:
        print(arrr[i])

# task5
total = 0
count = 0
word = input("enter word: ")
for i in range(len(word)):
    total = total + 1
    if word[i] == "a" or word[i] == "A":
        count = count + 1
print(total,count)

# task6
py = ["gegii", "goga", "nika", "GOA"]
max = len(py[0])
for i in range(len(py)):
    if len(py[i]) > max:
        max = len(py[i])
print(max)

# the end