def any7(nums):
    res = any(element == 7 for element in nums)
    return res    

print("should be true", any7([1, 2, 7, 4, 5]))
print("should be false", any7([1, 2, 4, 5]))

