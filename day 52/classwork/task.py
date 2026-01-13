# task1
word = "i love GOA"
new_word = ""
for i in word:
    if i in "aeiouAEIOU":
        new_word += "!"
    else:
        new_word += i
print(new_word)