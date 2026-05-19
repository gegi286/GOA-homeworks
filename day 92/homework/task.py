# task1
# def add(num1, num2):
    # s1 = str(num1)
    # s2 = str(num2)
    
    # while len(s1) < len(s2):
    #     s1 = "0" + s1
    # while len(s2) < len(s1):
    #     s2 = "0" + s2
        
    # result = ""
    # for i in range(len(s1)):
    #     result += str(int(s1[i]) + int(s2[i]))
        
    # return int(result)

# task2 
# def palindrome_chain_length(n):
    # steps = 0
    # while str(n) != str(n)[::-1]:
    #     n = n + int(str(n)[::-1])
    #     steps += 1
    # return steps

# task3
# def nth_smallest(arr, pos):
#     # return sorted(arr)[pos-1]

# task4
# def solution(start, finish):  
#     diff = finish - start
#     return (diff // 3) + (diff % 3)

# task5
# def incrementer(nums):
#     result = []
#     for i in range(len(nums)):
#         new_digit = (nums[i] + (i + 1)) % 10
#         result.append(new_digit)
#     return result

# task6
# def sum_of_n(n):
#     result = []
#     current_sum = 0
    
#     for i in range(abs(n) + 1):
#         if n >= 0:
#             current_sum = current_sum + i
#         else:
#             current_sum = current_sum - i
#         result.append(current_sum)
        
#     return result


# task7
# def largest(n, xs):
#     shedegi = []
#     for i in range(n):
#         yvelaze_didi = max(xs)
#         shedegi.append(yvelaze_didi)
#         xs.remove(yvelaze_didi)
#     axali_shedegi = []
#     for i in range(len(shedegi)):
#         axali_shedegi.insert(0, shedegi[i])
#     return axali_shedegi