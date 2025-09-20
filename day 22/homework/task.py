# task1

# index არის ელემენტის მდებარეობა ნომრებში
# რომელიც იწყება 0-დან.  




# task2

# გვაქვს სია
numbers = [4, 6, 1, 5, 9, 8, 4]

a = numbers[0] + numbers[1]# 4 + 6 = 10
b = numbers[2] + numbers[3]# 1 + 1 = 2
c = numbers[1] + numbers[4]# 6 + 8 = 14
d = numbers[3] + numbers[4]# 5 + 15 = 20
e = numbers[2] + numbers[4]# 9 - 5 = 4
f = numbers[0] + numbers[2]# 4 + 3 = 7
g = numbers[4] + numbers[5] + numbers[6] + numbers[1]# 27

print(a, b, c, d, e, f, g)


# task3


names = ["gio", "anuki", "levani", "gurami", "mari", 
         "gegi", "goga", "dato", "luka", "zaza"]

print("mexute indexia:", names[5])   
print("mecxre indeqsia:", names[9]) 
print("mesame indeqsia:", names[3])  
print("meshvide indeqsia:", names[7])   
print("pirveli indeqsia:", names[1]) 


# task4


cars = ["toyota", "bmw", "mercedes", "audi", "ford"]

for i in cars:
    print(i)

i = 0
while i != 5:
    print(cars[i])
    i += 1



# task5
fruits = ["banani", 7, True, "vashli", 11, "yurdzeni", "atami"]

fruits[3] = "vashli"   
fruits[6] = "msxali"   
fruits[4] = "vashlatama"    
print(fruits)




# task6

# True and False or False and True or False and False or True
#True and False pasuxi: False


# False or False and True or False and False or True
# False and True pasuxi: False


# False or False or False and False or True
# False and False pasuxi: False


# False or False or False or True pasuxi: true

# False or False pasuxi: False

# False or False or True
# False or False pasuxi: False


# task7

animals = ["lion", "tiger", "zebra", "hipo", "dog", "cat", "wolf", "monkey", "dino", "horse"]
if [3] == "lion":
    print("there is no lion on index 3")

# task8
basket = ["ვაშლი", "ბანანი", "საზამთრო", "ატამი", "ყურძენი"]
print(basket[0])
print(basket[2])
basket[2] = "ვაშლატამა"
print(basket[0])
print(basket[1])
print(basket[2])
print(basket[3])
print(basket[4])

# task9
letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]
print(letters[2])
print(letters[4])
print(letters[5])
print(letters[9])
print(letters[6])

print(letters[6]) + print(letters[0]) + print(letters[6]) + print(letters[0])

print(letters[2]) + print(letters[3]) + print(letters[4]) + print(letters[0])

print(letters[2]) + print(letters[3]) + print(letters[2]) + print(letters[0])


# task10
letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]

l = "ლ"
if l == "ლ":
    print("სწორია! ასო ლ ა")
else:
    print("არასწორია, სცადე თავიდან")


e = "ე"
if e == "ე":
    print("საიდუმლო სიტყვა იწყება სწორად")
else:
    print("საიდუმლო სიტყვა არასწორია")

letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]
word = letters[2] + letters[5] + letters[2] + letters[5]
if word == "გელა":
    print("გაარტყი სახელი!")
else:
    print("შტერი ხარ!დ")

# task11
word = ["pen", "book", "programming", "bag", "table"]
i = int(input("enter index (0-4: "))
print(word[i])

