// task1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0)
        console.log(nums[i])
}

// task2
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < nums.length; i++){
    if(nums[i] % 2 != 0)
        console.log(nums[i])
}

// task3
let names = ["goga", "gegi", "luka", "nika", "mate"]
for (i = 0; i < nums.length; i++){
    if(nums[i][0] === "g")
        console.log(nums[i])
}

// task4
let names1 = ["goga", "gegi", "luka", "nika", "mate", "giorgi", "giurza"]
for (i = 0; i < nums.length; i++){
    if(nums[i][0] === "g" || nums[i].length === 5)
        console.log(nums[i])
}

// task5
let both = [22, "giorgi", 19, "goga", 16, "gegi"]
for (i = 0; i < nums.length; i++){
    if(typeof both[i] === "string")
        console.log(nums[i])
}