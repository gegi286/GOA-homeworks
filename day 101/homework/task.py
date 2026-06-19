# def solution(digits):
#     max_number = 0
    
#     while len(digits) >= 5:
#         five_digits = int(digits[0:5])
        
#         if five_digits > max_number:
#             max_number = five_digits
            
#         digits = digits[1:]
        
#     return max_number

# task2
# def break_chocolate(n, m):
#     if n <= 0 or m <= 0:
#         return 0
    
#     return (n * m) - 1

# task3
# write the function is_anagram
# def is_anagram(test, original):
#     test_sorted = sorted(test.lower())
#     original_sorted = sorted(original.lower())
    
#     return test_sorted == original_sorted

# task4
# def over_the_road(address, n):
#     total_houses = 2 * n
#     return (total_houses + 1) - address