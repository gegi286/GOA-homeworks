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
if 1 == 10:
    print("1 equals to ten")
else:
    print( "you entered negative or more than 10  number ")

# task4
My_list = ["dog" ," most" ,"is" ,"angry" ,"running", "forest", "fast", "in" , "cat" ,"human", "very"]
print(My_list[-11] + My_list[-9] + My_list[-7] + My_list[-4] + My_list[-6] + My_list[-1] + My_list[-5])
print(My_list[-3] + My_list[-9] + My_list[-1] + My_list[-8])

# task5
animals = ["dog", "cat", "horse", "cow", "sheep", "goat"]

if animals == "cat":
    print("შენ აირჩიე კატა")
elif animals == "goat":
    print("შენ აირჩიე თხა")
else :
     print("სხვა ცხოველი აირჩიე")

# task6
cities = ["tbilisi", "erevan", "ganja", "paris", "los angeles", "new york", "madrid"]
v = print(input("enter your first number 0 - 6:  "))
c = print(input("enter your second number 0 - 6: "))
if c < v:
     print("შეცვალე ინდექსები ადგილებით")
elif v == c:
     print("ორივე ერთია")

# task7
print(input("enter your word: "))
if "first letter" == "A":
    print("სიტყვა იწყება a-თი")
elif "last letter" == "z":
    print("სიტყვა მთავრდება z-ით")
#else:
    print("სიტყვა არც a-თი იწყება და არც z-ით მთავრდება")

# # task8
print(input("enter your word: "))

if "first letter" == "last letter":
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
for i in name:
    print(i)

my_name = ""
index = 0
while my_name != name:
    my_name += name[index]
    print(my_name[index])
    index += 1
