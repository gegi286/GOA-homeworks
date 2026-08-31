# task1
# def cat_mouse(map_, moves):
#     cat_row = -1
#     cat_col = -1
#     mouse_row = -1
#     mouse_col = -1

#     r = 0
#     for row in map_.split("\n"):
#         c = 0
#         for char in row:
#             if char == "C":
#                 cat_row = r
#                 cat_col = c
#             if char == "m":
#                 mouse_row = r
#                 mouse_col = c
#             c = c + 1
#         r = r + 1

#     if cat_row == -1 or mouse_row == -1:
#         return "boring without two animals"

#     dist_r = cat_row - mouse_row
#     if dist_r < 0:
#         dist_r = -dist_r

#     dist_c = cat_col - mouse_col
#     if dist_c < 0:
#         dist_c = -dist_c

#     if dist_r + dist_c <= moves:
#         return "Caught!"
    
#     return "Escaped!"

# task2
# def movie(card, ticket, perc):
#     n = 0
#     price_a = 0
#     price_b = card
#     biletis_fasi = ticket

#     while price_b + 1 >= price_a:
#         n = n + 1
#         price_a = price_a + ticket
#         biletis_fasi = biletis_fasi * perc
#         price_b = price_b + biletis_fasi

#     return n

# task3
# def growing_plant(up_speed, down_speed, desired_height):
#     days = 0
#     height = 0

#     while True:
#         days = days + 1
#         height = height + up_speed

#         if height >= desired_height:
#             return days

#         height = height - down_speed

# task4
# def pairs(arr):
#     count = 0
#     for i in range(0, len(arr) - 1, 2):
#         if abs(arr[i] - arr[i + 1]) == 1:
#             count += 1
#     return count

# task5
# def am_i_afraid(day, num):
#     if day == "Monday":
#         if num == 12:
#             return True
#         else:
#             return False

#     if day == "Tuesday":
#         if num > 95:
#             return True
#         else:
#             return False

#     if day == "Wednesday":
#         if num == 34:
#             return True
#         else:
#             return False

#     if day == "Thursday":
#         if num == 0:
#             return True
#         else:
#             return False

#     if day == "Friday":
#         if num % 2 == 0:
#             return True
#         else:
#             return False

#     if day == "Saturday":
#         if num == 56:
#             return True
#         else:
#             return False

#     if day == "Sunday":
#         if num == 666 or num == -666:
#             return True
#         else:
#             return False

#     return False

# task7
# def elevator_distance(array):
#     total_distance = 0
#     index = 0

#     while index < len(array) - 1:
#         current_floor = array[index]
#         next_floor = array[index + 1]

#         diff = current_floor - next_floor
#         if diff < 0:
#             diff = -diff

#         total_distance = total_distance + diff
#         index = index + 1

#     return total_distance