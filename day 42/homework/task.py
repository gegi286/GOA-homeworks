# task1
fruits = ["apple", "banana", "orange", "grapes"]

fruits1 = ["strawberry", "mandarin"]

fruits.extend(fruits1)

print(fruits)

# task2
num = [7, 9, 11, 33, 4, 5, 10]

nums = [40, 50] 

num.extend(nums)

print(num)

# task3
names = ["giorgi", "luka", "goga", "gegi", "nika", "andria"]

names.reverse()

print(names)

# task4
numbers = [6, 5 ,4, 7, 99, 9, 11, 2, 5, 10, 5, 55]

k = numbers.count(5)

print(k)

# task5
letters = ["a", "b", "a", "c"]

a = letters.count("a")

print(a)

# task6
names1 = ["giorgi", "luka", "goga", "gegi", "saba", "nika", "andria"]

ind = names1.index("saba")

print(ind)

# task7
list = ["red", "green", "blue"]

bl = list.index("blue")

print(bl)

# task8
num1 = [11, 33, 4, 5, 10]

nums2 = [7, 8, 9]

num1.extend(nums2)

print(num1)

# task9
food = ["khinkali", "mwvadi", "mchadi", "kubdari", "burgeri"]

food.reverse()

print(food)

# task10
cities = ["Paris", "Tbilisi", "Rome", "London", "Manchester"]

c = cities.index("Tbilisi")

print(c)

# task11
animals = ["cat" ,"dog","cat", "cow"] 

co = animals.count("cat")

print(co)

# task12
fruits2 = ["apple", "banana"]

fruits2.append("grapes")

print(fruits2)

# task13
numbers1 = [1, 2, 3]

numbers2 =  [4, 5]

numbers1.extend(numbers2)

print(numbers1)

# task14
names2 = ["goga", "saba"]

names2.insert(1, "luka")

print(names2)

# task15
items = ["pen", "pencil", "eraser"]

items.pop()

print(items)

# tak16
colors = ["red", "green", "blue"]

colors.remove("green")

print(colors)

# task17
foods = ["bread", "milk"]
if len(foods) == 2:
    foods.append("cheese")
    print(foods)
else:
    foods.append("meat")
    print(foods)

# task18
nums4 = [10, 20, 30]
nam = input("Enter your number: ")
if nam in nums4:
    print("Already in list")
else:
    nums4.append(40)
    print(nums4)

# task19
letters1 = ["a", "b", "c"]
let = input("Enter your letter: ")

letters1.insert(1, let)

print(letters1)

# task20
values = [1, 2, 3, 4]
ind1 = int(input("Enter index: "))
if ind1 in values:
    values.pop(ind1)
    print(values)

# task21
pets = ["cat", "dog", "hamster"]
pet = input("Enter your pet: ")
if pet in pets:
    pets.remove(pet)
    print(pets, "Removed")

# task22
a1 = [5, 5, 7]
naam = int(input("Enter your number: "))
if naam in a1:
    a1.count(naam)
    print(a1)
else:
    a1.append(naam)
    print(a1)

# task23
queue = ["first", "second"]
queue1 = input("Enter your word: ")
queue.insert(0, queue1)
print(queue)
if len(queue) > 5:
    queue.pop()
    print(queue)
if queue < 5:
    queue.reverse()
    print(queue)

# task24
nums5 = [2, 4, 6]
naaam = int(input("Enter yourr number: "))
if naaam > 0:
    nums5.append(naaam)
    print(nums5)
elif naaam <= 0:
    print("Only positive allowed")

# task25
mix = ["x", "y", "z"]
mix1 = [1, 2, 3]
mix.extend(mix1)
print()
lett = input("Enter your letter: ")
if lett in mix:
    mix.remove(lett)
    print(mix, "Removed")

# the end