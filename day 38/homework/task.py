# # task1
# name = input("enter your name: ")

# uppered_name = name.upper()

# print(uppered_name)

# # task2
# name1 = input("enter your name: ")

# lowwered_name1 = name1.lower()

# print(lowwered_name1)

# # task3
# name2 = input("enter your name: ")

# capitalized_name2 = name2.capitalize()

# print(capitalized_name2)

# # task4
# names = ["nika", "gio", "goga", "saba", "gegi"]
# for i in range(5):
#     uppered_names = names[i].upper()
#     print(uppered_names)

# # task5
# names1 = ["NIKA", "GIO", "GOGA", "SABA", "GEGI"]
# for i in range(5):
#     lowwered_names1 = names1[i].lower()
#     print(lowwered_names1)

# # task6
# my_list = ["nika", "gio", "goga", "saba", "gegi"]
# for i in range(5):
#     capitialzed_my_list = my_list[i].capitalize()
#     print(capitialzed_my_list)

# # task7
# mine = ["7", "GOGA teacher", "car", "macivari", "nugzari"]
# for i in range(5):
#     print(len(mine[i]))

# task8
word = "ალექსანდრე"
for i in range(1):
    print(len(word))

# task9
total = 0
nums = [10, 20, 33, 7, 11, 66, 88, 77]
for i in nums:
    if i % 2 == 0:
        total = total + 1
print(total)

# task10
count = 0
nums = [10, 20, 33, 7, 11, 66, 88, 77, 55]
for i in nums:
    if i % 2 == 1:
        count = count + 1
print(count)

# task11
start = int(input("enter your number: "))
end = int(input("enter second number: "))
step = 1
for i in range(start,end,step):
    if i % 2 == 0:
        print(i)

# the end