# task1
mylist = [1, 2, 3, 4, 5, 6]

mylist[2:4] = [10, 20, 30]

print(mylist)

# task2
my_list = ["apple", "banana", "cherry", "kiwi", "mango"]

my_list[0:2] = ["pear", "plum"]

print(my_list)

# task3
list = ["a", "b", "c", "d", "e", "f"]

list[3:] = ["x", "y", "z"]

print(list)

#  task4
List = ["red", "green", "blue", "yellow", "black", "white"]

List[2:5] = ["purple", "orange"]

print(List)

# task5
names = ["გიორგი" , "ირმა" , "საბა" ]

names[0:] = ["red", "green", "blue", "yellow", "black", "white"]

print(names)

# task6
num = int(input("enter your number: "))
if num % 2 == 1:
    print("ODD")
elif num % 2 == 0:
    print("EVEN")
else:
    print("bye")

# task7
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
if numbers[3] % 2 == 0:
    print("Even number")
elif numbers[3] % 2 == 1:
    print("Odd number")
else:
    print("get out!")

# task8
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
if num[9] % 2 == 0 and num[9] > 50:
    print("ეს რიცხვი არის ლუწი და მეტი 50 ზე")
elif nums[9] % 2 == 1 and nums[9] < 50:
    print("ეს რიცხვი არის კენტი და ნაკლები 50 ზე")
else:
    print("ეს რიცხვი არც კენტი და არც მეტი 50 ზე")

# task9
number = [66, 48, 92, 95, 99, 101, 799, 120, 50, 77]
if number[5] % 2 == 0 or number[5] > 100:
    print("even or more than 100")
elif number[3] % 2 == 1 or number[3] < 100:
    print("even or more than 100")
else:
    print("ნახვამდის.")

# task10
number = [66, 48, 92, 95, 99, 101, 799, 120, 50, 77]
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums == number)

print(nums != number)

# the end
