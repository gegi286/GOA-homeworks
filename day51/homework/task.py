# task1
nums = [5, 7, 8, 9, 11, 33, 22, 56, 9]
new_nums = []
for i in nums:
    new_nums.append(i * 2)
print(new_nums)

# task2
names = ["irakli", "giorgi", "goga", "nugzari", "lela", "gela"]
your_num = int(input("Enter number: "))
for i in names:
    names.insert(your_num,"nika")
print(names)

# task3
word = "me miyvrars manqanebii"
for i in word:
    if i in "aeiou":
        print(i)

# task4
nothing = ["irakli", "manqana", "deda", "hidroeleqtrosadguri"]
for i in nothing:
    if len(i) > 4 or nothing.index(i) % 2 == 1:
        nothing.remove(i)
print(nothing)

# task5
numbers = [7, 11, 9, 10, 22, 88, 3]
sum = 0
for i in numbers:
    sum += i 
print(sum / len(numbers))

# the end