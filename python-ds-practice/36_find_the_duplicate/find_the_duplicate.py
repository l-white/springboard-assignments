def find_the_duplicate(nums):
    """Find duplicate number in nums.

    Given a list of nums with, at most, one duplicate, return the duplicate.
    If there is no duplicate, return None

        >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
        1

        >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
        9

        >>> find_the_duplicate([2, 1, 3, 4]) is None
        True
    """
    for num in set(nums):
        nums.remove(num)
    nums = list(set(nums))
    if len(nums) > 0:
        return nums[0]
    else:
        return None

print(find_the_duplicate([1, 2, 1, 4, 3, 12]))
print(find_the_duplicate([6, 1, 9, 5, 3, 4, 9]))
print(find_the_duplicate([2, 1, 3, 4]))

print([1, 2, 1, 4, 3, 12].count(1))
array = []
array.append(1)
print(array[0])
