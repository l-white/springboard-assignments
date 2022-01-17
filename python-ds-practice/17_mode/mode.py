def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    dict_of_items = {}
    
    for num in nums:
        if num in dict_of_items:
            dict_of_items[num] += 1
        else:
            dict_of_items[num] = 1
    
    all_vals = dict_of_items.values()
    max_val = max(all_vals)
    return dict_of_items[max_val]

print(mode([2, 2, 3, 3, 2]))
print(mode([1, 2, 1]))
