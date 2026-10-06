# task1
def modified_sum(a, n):
    sum = 0
    array = 0
    for i in a:
        sum += i ** n
        array += i
    return sum - array