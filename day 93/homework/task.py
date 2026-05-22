# task1
# def solve(arr): 
#     elements = []
#     for x in reversed(arr):
#         if x not in elements:
#             elements.append(x)
#     return elements[::-1]

# task2
# def tail_swap(lst):
#     nawilebi1 = lst[0].split(":")
#     marcxena1 = nawilebi1[0]
#     marjvena1 = nawilebi1[1]
    
#     nawilebi2 = lst[1].split(":")
#     marcxena2 = nawilebi2[0]
#     marjvena2 = nawilebi2[1]
    
#     shedegi1 = marcxena1 + ":" + marjvena2
#     shedegi2 = marcxena2 + ":" + marjvena1
    
#     return [shedegi1, shedegi2]

# task3
# def is_pangram(st):
#     anbani = "abcdefghijklmnopqrstuvwxyz"
#     teqstis_aslebi = st.lower()
#     for aso in anbani:
#         if aso not in teqstis_aslebi:
#             return False
#     return True

# task4
# def to_camel_case(text):
#     result = ""
#     light = "off"
#     for i in text:
#         if i == "-" or i == "_":
#             light = "on"
#         else:
#             if light == "on":
#                 result = result + i.upper()
#                 light = "off"
#             else:
#                 result += i
#     return result

# task5
# def multi(l_st):
#     result = 1 
#     for i in l_st:
#         result = result * i
#     return result


# def add(l_st):
#     result = 0 
#     for i in l_st:
#         result = result + i
#     return result


# def reverse(text):
#     result = ""
#     for i in text:
#         result = i + result
#     return result

# task6
# def factorial(n):
#     result = 1
#     for i in range(1, n + 1):
#         result = result * i
#     return result