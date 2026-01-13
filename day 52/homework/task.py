# task1
words = ["manqana", "Avtosadgomi", "axaliweli", "Aadzvisxe"]
for i in words:
    if i == i.lower():
        i.upper()
    elif i == i.capitalize():
        words.remove(i)
print(words)

# task2
word = "DeidAsHvilI"
new_list = []
for i in word:
    if i == i.capitalize():
        new_list.append(i.lower())
    else:
        new_list.append(i.upper())
print(new_list)

# tasak3
names = ["GOGA", "nuzari", "lela", "lika"]
new_names = []
for i in names:
    if i == i.lower():
        new_names.insert(0, i.upper())
    elif i == i.upper():
        new_names.append(i.lower())
print(new_names)

# task4
cities = ["TBILISI", "qutaisi", "BATUMI", "paris", "mcxeta"]
i = 0
while i < len(cities):
    if cities[i] == cities[i].upper():
        cities.remove(cities[i])
    else:
        cities[i] = cities[i].upper()
        i += 1
print(cities)

# task5
surnames = ["TSERETELI", "CHALAURI", "tchkadua", "kandelaki", "tsifiani"]
i = 0
while i < len(surnames):
    if i == len(surnames)-1 and surnames[i] == surnames[i].lower():
        surnames[i] = surnames[i].upper()
    elif i == 0 and surnames[i] == surnames[i].upper():
        surnames[i] = surnames[i].lower()
    elif surnames[i] == surnames[i].lower():
        surnames.remove(surnames[i])
        surnames.insert(i+1, surnames[i].upper())
    elif surnames[i] == surnames[i].upper():
        surnames.remove(surnames[i])
        surnames.insert(i-1, surnames[i].lower())
    i += 1
print(surnames)

# task6
wordz = "ManQaNeBi"
new_word = []
i = 0
while i < len(word):
    if word[i] == word[i].lower():
        word.append(new_word, "+")
    elif word[i] == word[i].upper():
        word.append(new_word, "-")
    elif :   

# task7
wordx = "me miyvars manqanebi"
new_wordx = []
new_wordx.append(i)
print(new_wordx)









