def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    #num1_lst = str(num1)
    
    num1_freq = {}
    for i in str(num1):
        if (i in num1_freq):
            num1_freq[i] += 1
        else:
            num1_freq[i] = 1

    num2_freq = {}
    for j in str(num2):
        if (j not in num2_freq):
            num2_freq[j] = 1
        else:
            num2_freq[j] += 1

    if sorted(num1_freq) == sorted(num2_freq):
        return True
    else:
        return False

print(same_frequency(551122, 221515))
print(same_frequency(321142, 3212215))
print(same_frequency(1212, 2211))