# # task1
# # str - aris nebismieri ram rac aris brchyalebshi chasmuli
# # int - aris nebismieri mteli ricxvi
# # float - airs ricxvi ogond mteli ara igi aris atwiladi ricxvi
# # boolean - es aris True da False

# # task2
# # < , >  , <= , >= , == 
# r = 5 < 5 
# print(r)

# # task3
# # and da or

# # task4
# r = "i love goa"
# for i in r:
#     if i == "i" or i == "b":
#         print("i love goa")
#     elif i == "k" or i == "l":
#         print("i love py")
#         # daprintavs "i love goasac"

# # task5
# my_list = 7
# if my_list % 2 == 0:
#     print("ეს რიცხვი ლუწია")
# elif my_list % 2 == 1:
#     print("ეს რიცხვი კენტია")
# else:
#     print("უცნობია")

# # task6
# # + , - , * , / , **  , // , %

# # ** - xarisxshi ayvana
# #  // - mteli gayofa
# # % - es aris ai rodesac ricxvi avigot da es magalitad davuwerot 12 % 7 da es gamoitans nashts anu 5

# # task7
# for i in range(5,100, 10):
#     print(i)

# i = 5
# while i < 100:
#     print(i)
#     i += 10
    
# # task8
# for i in range(0,20):
#     if i % 2 == 0:
#         print(i)

# # # task7
# list = ["gio", "mari", "goga", "mari" "nika", "gegi", "mari"]
# # list.append("elizbari")
# # list.insert(2, "givi")
# # # list.remove("nika")
# # list.pop(-3)
# # print(list)
# # list.count("mari")
# # print(list)
# print(list.index("gegi"))

# # task8
# def multifly(num1, num2):
#     return num1 * num2
# print(multifly(7, 9))
# print(multifly(2, 1))


def position(letter):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    print("Position of alphabet: " + str(alphabet.index(letter) + 1))
