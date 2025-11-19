# task1
# შექმენით სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიის ბოლოში დაამატე სიტყვა --> "ianvari" და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა.

list = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

list.append("ianvari")

print(list)

# task2
# შექმენი სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიაში მეორე ინდექსზე დაამატე სიტყვა ---> "bati" და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა.

list1 = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

list1.insert(2 , "bati")

print(list1)

# task3
# შექმენი სია ---->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე მე 5 ინდექსზე მდგომი ელემენტი და დაპრინტე საბოლოო სია ნახე ამოიშალა თუ არა.

list2 = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

list2.pop(5)

print(list2)

# task4
# შექმენი სია --->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე True და ასევე ამოშალე "kote" და დაპრინტე საბოლოო სია და ნახე ამოიშალა თუ არა.
list3 = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

list3.remove("kote")
list3.remove(True)

print(list3)