# # task1
# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# new_nums = nums[0]
# second = 0
# for i in nums:
#     if i > new_nums:
#         second = new_nums
#         new_nums = i
# print(second)

# # task2
# word = input("Enter word: ")
# count = 0
# l = 0
# i = 0
# while i < len(word):
#     if word[i] != " ":
#         l += 1
#     elif word[i] ==  " "  and l > 4:
#         count += 1
#         l = 0
#         i += 1
# print(count)

# # task3
# name = input("enter name: ")
# name1 = ""
# for i in name:
#     name1 = i + name1
# print(name1==name)

# task4
numbers= [11, 4, 3, 8, 6, 7, 10]
new = []
new_new = []
for i in numbers:
    if i % 2 == 0 and numbers.index(i) % 2 == 1:
        new.append(i)
    elif i % 2 == 1 and numbers.index(i) % 2 == 0:
        new_new.append(i)
print("numbers that stays on Odd index and is Even:", new)
print("numbers that stays on Even index an is Odd", new_new)

# task5
numbers = [7 ,"goga" , True, "goga", "nugzara", 7, True,"anano", 7.5, 10, True, False, "goga"]
i = 0
while i < len(numbers):
    if numbers.count(numbers[i]) > 1:
        numbers.remove(numbers[i])
    else:
        i = i + 1
print(numbers)

# task6
some_words = input("Enter something: ")
word = ""
word2 = ""
i = 0
while i < len(some_words):
    if some_words[i] != " ":
        word2 += some_words[i]
    else:
        if len(word2) > len(word):
            word = word2
        word2 = ""
        i += 1
if len(word2) > len(word):
    word = word2
print("The longest word is:", word)

# the end