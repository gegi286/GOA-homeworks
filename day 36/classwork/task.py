# task1
word = input("enter word: ")
print("A" in word)
print("a" in word)
print("car" not in word)
# task2
words = input("enter word: ")
for i in words:
    if "a" or "A" in words:
        continue
    else:
        print(words[i])
    