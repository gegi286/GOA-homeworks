# task1
u = input("enter what you want: ")
print(len(u))
for i in u:
    print(i)

# task2
my_list = ["gegi", "nika", "goga", "saba"]
for i in range(len(my_list)):
    name = my_list[i]
    print(len(name))
    if len(my_list[i]) % 2 == 1:
        print("კენტია")
    elif len(my_list[i]) % 2 == 0:
        print("ლუწია")
