my_list = [2,3,7,9,5,1,6]
print(my_list[-1])
print(my_list[-7])
print(my_list[2])
print(my_list[-5])

# task2
my_fruits = ["apple", "banana", "cherry", "grape", "kiwi", "orange"]
print(my_fruits[2])
print(my_fruits[-4])
print(my_fruits[3])
print(my_fruits[-3])

# task3
my_numbers = [3,4,5,6,7,1,2,9,8,11]
index = int(input("enter your number 0 - 10: "))
if 0 < index < 10:
    print("dadebitia")
elif index < 0 or index > 10:
    print("you entered negative or more than 10  number ")
elif index == 10:
    print("index equals to ten")


# task4
My_list = ["dog" ," most" ,"is" ,"angry" ,"running", "forest", "fast", "in" , "cat" ,"human", "very"]
print(My_list[-11] + My_list[-9] + My_list[-7] + My_list[-4] + My_list[-6] + My_list[-1] + My_list[-5])
print(My_list[-3] + My_list[-9] + My_list[-1] + My_list[-8])

# task5
animals = ["dog", "cat", "horse", "cow", "sheep", "goat"]
index = int(input("enter your number 0 - 6: "))
if  animals[index] == "cat":
    print("შენ აირჩიე კატა")
elif animals[index] == "goat":
    print("შენ აირჩიე თხა")
else :
     print("სხვა ცხოველი აირჩიე")

# task6
cities = ["tbilisi", "erevan", "ganja", "paris", "los angeles", "new york", "madrid"]
v = print(input("enter your first number 0 - 7:  "))
c = print(input("enter your second number 0 - 7: "))
if v < c:
     print(cities[v] + cities[c])
elif v < c:
     print(cities[c] + cities[v])
elif v == c:
    print(cities[v])

# task7
b =(input("enter your word: "))
if b[0] == "A":
    print("სიტყვა იწყება a-თი")
elif b[-1] == "z":
    print("სიტყვა მთავრდება z-ით")
else:
    print("სიტყვა არც a-თი იწყება და არც z-ით მთავრდება")

# # task8
e = (input("enter your word: "))

if e[0] == e[-1]:
     print("პირველი და ბოლო ერთნაირია")
else:
     print("პირველი და ბოლო განსხვავებულია")

# task9
my_letters = ["a,g,i,v,o,r,s,b,g,i,t,r"]
print(my_letters[1] + my_letters[4] + my_letters[1] + my_letters[0])
print(my_letters[6] + my_letters[0] + my_letters[7] + my_letters[0])
print(my_letters[7] + my_letters[0] + my_letters[10] + my_letters[9] + my_letters[3] + my_letters[0] + my_letters[11])

# task10
name = "giorgi"
for i in range(1):
    print(i)

my_name = ""
index = 0
while my_name != name:
    my_name += name[index]
    print(my_name[index])
    index += 1
