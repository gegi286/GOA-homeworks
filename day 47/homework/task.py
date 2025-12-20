# # task1
# word = ["Giorgi", "Goga", "nika", "mate", "Nugzari"]
# Upper_name = []
# for i in word:
#     if i == i.capitalize():
#         Upper_name.append(i)
# print(Upper_name)

# # task2
# names = ["giorgi", "nika", "ana", "luka", "mari", "daviti"]
# surname = ["Chalauri", "Malaymadze", "Kvaratskhelia"]
# for i in names:
#     if i == i.lower():
#         print(i.upper())

# for i in surname:
#     if i == i.capitalize():
#         print(i.lower())

# for i in range(1):
#     if 10 == 10:
#         surname.append(names)
#         print(surname)

# task3
words = ["manqana", "dzagli", "avtofarexi", "MERCEDES"]
for i in words:
    if len(i) <= 6 or i == i.upper():
        words.remove(i)
print(words)

# task4
num = [12.33, 11.11, 100.1, 33.66, 7.2, 63.99, 2.12, 88.88, 99.99, 400.33]
clear = []
for i in num:
    if i >= 10 and i <= 100:
        clear.append(i)
print(clear)

# task5
cities = ["TBILISI", "PARIS", "ROME", "QUTAISI", "BATUMI"]
countries = ["GEORGIA", "FRANCE", "ITALY", "PORTUGAL", "GERMANY", "UKRAINE", "BELGIUM", "RUSSIA", "JAPAN", "TURKEY"]
for i in range(0,5):
    countries.append(cities[i])
print(countries)

# the end