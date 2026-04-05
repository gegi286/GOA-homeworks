# task1
# def multi_table(number):
#     result = ""
#     for i in range(1, 11):
#         result += str(i) + " * " + str(number) + " = " + str(i * number) + "\n"
#     return result[:-1]

# task2
# def to_csv_text(array):
#     result = ""
#     for i in array:
#         line = ""
#         for num in i:
#             line += str(num) + ","
#         result += line[:-1] + "\n"
#     return result[:-1]

# task3
# def first_non_consecutive(arr):
#     for i in range(1, len(arr)):
#         if arr[i] != arr[i-1] + 1:
#             return arr[i]

# task4
# words = str_.split()
#     result = []
#     for i in words:
#         result.append(i + " " + str(len(i)))
#     return result

# task5
# def reverse_list(l):
#     result = []
#     for i in range(len(l)-1, -1, -1):
#         result.append(l[i])
#     return result

# task6
# def human_years_cat_years_dog_years(human_years):
#     cat_years = 15
#     dog_years = 15
#     if human_years > 1:
#         cat_years += 9
#         dog_years += 9  
#     if human_years > 2:
#         cat_years += 4 * (human_years - 2)
#         dog_years += 5 * (human_years - 2)
#     return [human_years, cat_years, dog_years]

# task7
# def str_count(strng, letter):
#     return strng.count(letter)