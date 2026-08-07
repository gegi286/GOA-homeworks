# def to_binary(n):
#     return int(bin(n)[2:])

# task2
binary_str = input("შეიყვანეთ ორობითი სტრინგი (მაგ. 101): ")
decimal_number = 0
for char in binary_str:
    decimal_number = decimal_number * 2 + int(char)
return decimal_number


