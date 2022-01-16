def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    lst = []
    for char in phrase:
        lst.append(char)
    return(''.join(list(reversed(lst))))

print(reverse_string('Laura'))
