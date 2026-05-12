# task1
# def reverse_number(n):
#     text = str(n)
#     if n < 0:
#         text = text[1:]
#         reversed_text = text[::-1]
#         return -int(reversed_text)
#     reversed_text = text[::-1]
#     return int(reversed_text)

# task2
# def most_frequent_item_count(collection):
#     if len(collection) == 0:
#         return 0
#     biggest = 0
#     for number in collection:
#         how_many = collection.count(number)
#         if how_many > biggest:
#             biggest = how_many
#     return biggest

# task3
# def has_unique_chars(string):
#     seen = set()
#     for i in string:
#         if i in seen:
#             return False
#         seen.add(i)
#     return True

# task4
# def flatten(lst):
#     result = []
    
#     for item in lst:
#         if isinstance(item, list):
#             result.extend(item)
#         else:
#             result.append(item)
    
#     return result

# task5
# ver gavige

# task6
# def pairs(arr):
#     count = 0
#     for i in range(0, len(arr) - 1, 2):
#         if abs(arr[i] - arr[i + 1]) == 1:
#             count += 1
#     return count

# task7
# def descending_order(num):
#     nums = sorted(str(num), reverse = True)
#     return int("".join(nums))

# task8
# def difference_of_squares(n):
#     sum_numbers = 0
#     sum_squares = 0
#     for i in range(1, n + 1):
#         sum_numbers += i
#         sum_squares += i * i
#     square_of_sum = sum_numbers * sum_numbers
#     return square_of_sum - sum_squares

# task9
# ver gavige

# task10
# def high(x):
#     words = x.split()
#     best_word = ""
#     best_score = 0
#     for word in words:
#         score = 0
#         for char in word:
#             score += ord(char) - 96
#         if score > best_score:
#             best_score = score
#             best_word = word
#     return best_word