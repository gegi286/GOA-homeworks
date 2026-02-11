# task1
def name(name):
    return "My name is " + name

print(name("gegi"))



# task2
def nums(num1, num2):
    return num1 + num2

print(nums(2, 4))

print(nums(6, 10))

print(nums(5, 7))


# task3
def my_num(num):

    return num * num

print(my_num(7))

print(my_num(3))

print(my_num(9))


# task4
def age(age):
    if age >= 18:
        return "სრულწლოვანი ხარ"
    else:
        return "არ ხარ სრულწლოვანი"
print(age(2))

print(age(20))

print(age(18))



# task5
def string(text):
    return len(text)

print(string("wassap"))

print(string("gegi"))



# task6
def nums(num1, num2):
    return num1 * num2

print(nums(7 , 6))

print(nums(9 , 20))

print(nums(8 , 11))

# task7
def count(score):
    if score >= 90:
        return "შესანიშნავი ქულა"
    elif score >= 70 and score <= 89:
        return "კარგი ქულა"
    elif score >= 50 and score <= 69:
        return "დამაკმაყოფილებელი ქულა"
    else:
        return "ჩაჭრილი"
print(count(100))

print(count(80))

print(count(2))

# task8
def nums(number):
    if number % 2 == 0:
        return "ლუწი"
    elif number % 2 == 1:
        return "კენტი"
print(nums(10))

print(nums(5))


# task9
def names(name1):
    return name1[0]

print(names("gegi"))
print(names("nugzari"))



# task10
def nums(num1,num2,num3):
    return (num1 + num2 + num3) / 3

print(nums(8,4,7))

print(nums(13,12,61))

# task11
def pas(password):
    if password == "python123":
        return "correct"
    else:
        return "worng password"

print(pas("CLSAMG123"))

print(pas("python123"))


# task12
def string(text):
    return text.upper()

print(string("goga"))

print(string("gegi"))

# the end