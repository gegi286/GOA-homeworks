# def add_binary(a,b):
#     jami = a + b
#     return bin(jami)[2:]

# def interlockable(a, b):
#     return (a & b) == 0

# def word_to_bin(word):
#     ascii_dict = {
#         'a': 97, 'b': 98, 'c': 99, 'd': 100, 'e': 101, 'f': 102, 'g': 103,
#         'h': 104, 'i': 105, 'j': 106, 'k': 107, 'l': 108, 'm': 109, 'n': 110,
#         'o': 111, 'p': 112, 'q': 113, 'r': 114, 's': 115, 't': 116, 'u': 117,
#         'v': 118, 'w': 119, 'x': 120, 'y': 121, 'z': 122,
#         'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71,
#         'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78,
#         'O': 79, 'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85,
#         'V': 86, 'W': 87, 'X': 88, 'Y': 89, 'Z': 90
#     }
    
#     result = []
    
#     for char in word:
#         num = ascii_dict[char]
#         binary = ""
#         for p in [128, 64, 32, 16, 8, 4, 2, 1]:
#             if num >= p:
#                 binary += "1"
#                 num -= p
#             else:
#                 binary += "0"
#         result.append(binary)
        
#     return result

# def binary_pyramid(m,n):
#     total = 0
#     for i in range(m, n + 1):
#         total += int(bin(i)[2:])
#     return bin(total)[2:]


# def row_sum_odd_numbers(n):
#     return n ** 3