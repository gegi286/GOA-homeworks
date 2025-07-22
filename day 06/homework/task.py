# task1
num1 = int(input("enter first number: "))
num2 = int(input("enter second number: "))


print(num1 > num2)
print(num1 < num2)
print(num1 == num2)

# task2
str1 = "90"
str2 = "80"
str3 = "70"
int1 = 60
int2 = 50
print((int(str1) * int(str2) * int(str3) * int1 * int2)/5)
print(type("10" * 5))
# task3
word1 = input("enter first word: ")
word2 = input("enter second word: ")
word3 = input("enter third word: ")
int1 = int(input("enter your number: "))
word_sum = word1 + word2 + word3 
print(word_sum * int1)

# task4
# ჩვენ ვისწავლეთ  or  და  and 
# and - ოპერატორის გამოყენების დროს თუ ერთი პირობა მაინც არის false  მაშინ პასუხი იქნება false
# or - ოპერატორის  გამოყენების დროს თუ ერთი პირობა მაინც არის true მაშინ პასუხი იქნება true
# task5
'''
(and)                             (or)
True and True -- True  es aris true radgan orive piroba aris true    |   True or True -- True   es aris true radgan orive piroba aris true       
True and False -- False es aris false radgan ert-ertipiroba aris false    |   True or False -- True es aris true radgan ert-erti piroba aris true
False and True -- False es aris false radgan ert-ertipiroba aris false    |   False or True -- True es aris true radgan ert-erti piroba aris true
False and False -- False es aris false radgan orive piroba aris false   |   False or False -- False es aris false radgan orive piroba aris false
'''
# task6
print(True and True)
print(True and False)
print(False and True)
print(False and False)
print(True or True)
print(True or False)
print(False or True)
print(False or False)

# task7
str1 = "fanjara"
int1 = 50
float1 = 44.44
boolean = True
print(type(str1))
print(type(int1))
print(type(float1))
print(type(boolean))
# task8
float1 = float(input("enter your number: "))
int1 = int(input("enter your number: "))
str1 = input("enter your name: ")
print(float1)
print(int1)
print(str1)
