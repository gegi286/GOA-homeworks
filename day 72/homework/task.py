# task1
# def maskify(cc):
#     masked = ""
#     for i in range(len(cc)):
#         if i < len(cc) - 4: 
#             masked += "#"
#         else:            
#             masked += cc[i]
#     return masked

# task2
# def get_sum(a,b):
#     total = 0
#     if a < b:
#         for i in range(a, b + 1):
#             total += i
#     else:
#         for i in range(b, a + 1):
#             total += i
#     return total

# task3
# def is_isogram(string):
#     string = string.lower()
#     seen = ""
    
#     for letter in string:
#         if letter in seen:
#             return False
#         seen += letter
        
#     return True

# task4
# def well(x):
#     good_count = 0

#     for idea in x:
#         if idea == "good":
#             good_count += 1

#     if good_count == 0:
#         return "Fail!"
#     elif good_count <= 2:
#         return "Publish!"
#     else:
#         return "I smell a series!"

# task5
# ver gavige

# task6
# def sum_digits(number):
#     if number < 0:
#         number = -number

#     num = str(number)
    
#     total = 0
#     for i in num:
#         total += int(i)
    
#     return total

# task7
# def number(lines):
#     numbers = []
#     li = 1
#     for i in lines:
#         number = str(li) + ": " + i
#         numbers.append(number)
#         li += 1
#     return numbers

# task8
# def remove_url_anchor(url):
#     if '#' in url:
#         index = 0
#         for i in range(len(url)):
#             if url[i] == '#':
#                 index = i
#                 break
#         return url[:index]
#     else:
#         return url

# task9
