# task1
words = "me ar var 18 wliss"
total = 0
for i in words:
    if i in "aeiou":
        total += 1
print(total)


# task2
nums = [7, 9, 22, 11, 77, 99, 3, 19]
sum = 0
for i in nums:
    if i % 2 == 0:
        sum += i
print(sum)

# task3
numbers = [3, 2, 1, 7, 9, 11, 22, 19]
max_nums = numbers[0]
for i in numbers:
    if i > max_nums:
        max_nums = i
print(max_nums)

# task4
v = input("Enter your password: ")
while len(v) < 6:
    v = input("Enter your password: ")
print("Your password is correct!")

# task5
new_nums = [3, 5, 3, 8, 5, 10, 8]
l = []
for i in new_nums:
    if i not in l:
        l.append(i)
print(l)

# task6

# task7
number = 7
attempts = 0
new_number = int(input("Enter your number: "))
while new_number != number:
    new_number = int(input("Enter your number: "))
    attempts += 1
print("correct! attempt: ", attempts +1)
