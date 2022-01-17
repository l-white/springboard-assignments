def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    counts = {}
    for i in phrase:
        if i in counts:
            counts[i] += 1
        else:
            counts[i] = 1
    return counts

print(multiple_letter_count('Yay'))
print(multiple_letter_count('yay'))