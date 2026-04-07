# task1
# def string_clean(s):
#     w = ""
#     e = "0123456789"
#     for i in s:
#         if i not in e:
#             w += i
#     return w

# task2
# def reverse(st):
#     w = st.split()
#     s = ""
#     w.reverse()
#     for i in w:
#         s += i + " "
#     return s[0:-1]

# task3
# def quote(fighter):
#     if fighter.lower() == "george saint pierre":
#         return "I am not impressed by your performance."
#     else:
#         return "I'd like to take this chance to apologize.. To absolutely NOBODY!"

# task4
# def replace_exclamation(st):
#     vowels = "aeiouAEIOU"
#     result = ""
#     for i in st:
#         if i in vowels:
#             result += "!"
#         else:
#             result += i
#     return result

# task5
# def stringy(size):
#     result = ""
#     for i in range(size):
#         if i % 2 == 0:
#             result += "1"
#         else:
#             result += "0"
#     return result