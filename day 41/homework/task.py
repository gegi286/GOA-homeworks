# task1
# ჩვენ ვისწავლეთ ოთხი ფუნქცია ესენია: append,insert,pop და remove.
# append ფუნქცია გვეხმარება იმაში რომ სიაში დავამატოთ სიტყვა ოღონდ ეს სიტყვა დაემატება ყოველთვის სიის ბოლოში და მას გადაეცებმა სიტყვა მოცემულ ფრჩხილებში.
# insert ფუნქცია გვეხმარება რომ დავამატოტ სიტყვა სიაში რა ადგილასაც გვინდა და მას გადაეცემა პირველი ინდექსი შემდეგ სიტყვა.
# pop ფუნქცია გვეხმარება იმაში რომ ამოვიღოთ სიიდან ერთ-ერთი სიტყვა ან რიცხვი და მას გადაეცემა მოცემულ ფრჩხილებშიის ინდექსი რომელიც ჩვენ გვინდა რომ ამოვშალოთ სიიდან.~
# remove ფუნქციას ასევე ამოაქვს სიიდან სიტყვა ან რიცხვი და მას გადაეცემა ფრჩხილებში ის სიტყვა ან რიცხვი რომელიც ჩვენ გვინდა რომ ამოვშალოთ სიიდან.

# task2
num = [7, 9, 11, 20, 4, 48, 15]

num.append(10)

print(num)

# task3
my_list = ["nika", "gio", "goga", "saba"]

my_list.append("gegi")

print(my_list)

# task4
name = input("Enter your name: ")
names1 = ["nika", "gio", "goga", "saba", "gegi"]

names1.append(name)

print(names1)

# task5
name1 = ["nugzari", "gela", "lela", "gegi" "giurza", "mate"]

name1.insert(3, "gegi")

print(name1)

# task6
NAme = input("Enter your name: ")
NUM = int(input("Enter your number: "))
everything = [44, "maugli", 7, "manqana", 9, "saxli"]

everything.insert(NUM, NAme)

print(everything)

# task7
fruits = ["apple", "banana"]

fruits.insert(1, "orange")

print(fruits)

# task8
names = ["goga", "saba", "luka"]

names.insert(2, "irakli")

print(names)

# task9
foods = ["bread", "milk", "cheese"]

foods.insert(0, "water")

print(foods)

# task10
numbers = [5, 10, 15]

numbers.pop(2)

print(numbers)

# task11
fruits1 = ["apple", "banana", "orange"]

fruits1.pop(1)

print(fruits1)

# task12
names2 = ["goga", "saba", "luka"]

names2.pop(1)

print(names2)

# task13
colors = ["red", "green", "blue" , "yellow" , "black" , "purple"]

colors.pop(0)

print(colors)

colors.pop(3)

print(colors)

# task14
user = int(input("Enter your number 0-4: "))
tems = ["pen", "pencil", "book", "eraser"]

tems.pop(user)

print(tems)

# task15
fruits1 = ["apple", "banana", "orange"]

fruits1.remove("banana")

print(fruits1)

# task16
nums1 = [3, 5, 3, 7]

nums1.remove(3)

print(nums1)

# task17
colors1 = ["red", "blue", "green"]

colors1.remove("blue")

print(colors1)

# task18
your_name = input("Enter your name: ")
names3 = ["goga", "saba", "luka"]

names3.remove(your_name)

print(names3)

# task19
items = ["pen", "pencil", "book", "pencil"]

items.remove("pencil")

print(items)

# the end