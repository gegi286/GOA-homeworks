# task1
def movie(card, ticket, perc):
    n = 0
    system_b = card
    current_ticket = ticket
    
    while True:
        n += 1
        system_a = n * ticket
        current_ticket *= perc
        system_b += current_ticket
        
        ceil_b = int(system_b) if system_b == int(system_b) else int(system_b) + 1

# task2
import math
def reduce_fraction(fraction):
    num, den = fraction
    common = math.gcd(num, den)
    return (num // common, den // common)

# task3
def triangular(n):
    if n <= 0:
        return 0
    return n * (n + 1) // 2

# task4
import datetime
def age_in_days(year, month, day):
    today = datetime.date.today()
    
    birth_date = datetime.date(year, month, day)
    
    days = (today - birth_date).days
    
    return f"You are {days} days old"

# task5
def closest_multiple_10(i):
    remainder = i % 10  
    
    if remainder >= 5:
        return i + (10 - remainder) 
    else:
        return i - remainder

# task6
def prev_mult_of_three(n):
    while n > 0:
        if n % 3 == 0:
            return n
        n //= 10  
    
    return None

# task7
def next_happy_year(year):
    year += 1
    while len(set(str(year))) != len(str(year)):
        year += 1
    return year

# task8
def is_divisible(n, *args):
    return all(n % arg == 0 for arg in args)

# the end 