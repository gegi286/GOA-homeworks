# task1
# def spin_words(sentence):
#     words = sentence.split()   
#     new_sentence = ""          
#     for word in words:
#         if len(word) >= 5:
#             word = word[::-1]  
#         new_sentence = new_sentence + word + " "
#     return new_sentence.strip() 

# task2
# def capitalize(s):
#     even = ""
#     odd = ""
#     for i in range(len(s)):
#         if i % 2 == 0:
#             even += s[i].upper()
#             odd += s[i].lower()
#         else:
#             even += s[i].lower()
#             odd += s[i].upper()
#     return [even, odd]

# task3
# def reverse_words(text):
#     words = text.split(" ")
#     reversed_words = []
    
#     for word in words:
#         reversed_words.append(word[::-1])
    
#     return " ".join(reversed_words)

# task4
# def vowel_indices(word):
#     vowels = "aeiouyAEIOUY"
#     result = []
    
#     for i in range(len(word)):
#         if word[i] in vowels:
#             result.append(i + 1)  
    
#     return result

# task5
# davafolove

# task6
# ver gavige

# task7
# def solution(digits):
#     max_num = 0
    
#     for i in range(len(digits) - 4):
#         part = digits[i:i+5]   
#         part_num = int(part)   
        
#         if part_num > max_num:
#             max_num = part_num
    
#     return max_num