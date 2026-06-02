# task1
# def spacey(array):
#     pasuxi = []
#     shewawebuli = ""  

    
#     for i in array:
#         shewawebuli = shewawebuli + i  
#         pasuxi.append(shewawebuli)   

#     return pasuxi

# task2
# def cube_odd(arr):
#     jami = 0
#     for x in arr:
#         if type(x) == bool:
#             return None
#         if type(x) == str:
#             return None
#         kubshi = x * x * x
#         if kubshi % 2 != 0:
#             jami = jami + kubshi  
#     return jami

# task3
# def solve(s):
#     didi_asoe_bi = 0
#     patara_asoe_bi = 0
#     cifrebi = 0
#     specialurebi = 0
#     for i in s:
#         if i.isupper():
#             didi_asoe_bi = didi_asoe_bi + 1
#         elif i.islower():
#             patara_asoe_bi = patara_asoe_bi + 1
#         elif i.isdigit():
#             cifrebi = cifrebi + 1
#         else:
#             specialurebi = specialurebi + 1
#     return [didi_asoe_bi, patara_asoe_bi, cifrebi, specialurebi]

# task4
# ar mushaobs


# task5
# def solution(value):
#     teksti = str(value)
#     sigrdze = len(teksti)
#     nulebi = 5 - sigrdze
#     wina_nulebi = "0" * nulebi
#     pasuxi = "Value is " + wina_nulebi + teksti
#     return pasuxi


# task6
# def last(s):
#     words = s.split()
#     alphabet = "abcdefghijklmnopqrstuvwxyz"
#     sorted_words = []

#     for letter in alphabet:
#         for word in words:
#             if word[-1] == letter:
#                 sorted_words.append(word)
                
#     return sorted_words

# task7
# def last_survivor(string, arr): 
#     asoebis_sia = list(string)
    
#     for index in arr:
#         asoebis_sia.pop(index)
        
#     return asoebis_sia[0]

# task8
# def solve(s):
#     vowels = "aeiou"
#     max_len = 0
#     current_len = 0
    
#     for char in s:
#         if char in vowels:
#             current_len += 1
#             if current_len > max_len:
#                 max_len = current_len
#         else:
#             current_len = 0
            
#     return max_len

# task9
# def password(string):
#     if len(string) < 8:
#         return False
#     has_upper = False
#     has_lower = False
#     has_digit = False
#     for char in string:
#         if char.isupper():
#             has_upper = True
#         if char.islower():
#             has_lower = True
#         if char.isdigit():
#             has_digit = True
#     return has_upper and has_lower and has_digit

# task10

# def is_nice(arr):
#     if len(arr) == 0:
#         return False
#     for n in arr:
#         has_neighbor = False
#         for other in arr:
#             if other == n - 1 or other == n + 1:
#                 has_neighbor = True
#         if has_neighbor == False:
#             return False
#     return True