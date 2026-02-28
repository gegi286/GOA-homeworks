# task1
def changelist(string1):
    word = ""
    for i in string1:
        if i not in "aeiouAEIOU":
            word += i.upper()
    return word
print(changelist("my name is anton"))