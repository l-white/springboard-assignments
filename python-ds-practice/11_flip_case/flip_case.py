def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    new_phrase = ''
    for letter in phrase:
        if letter.islower() and letter == to_swap:
            new_phrase += letter.upper()
        elif letter.isupper() and letter == to_swap:
            new_phrase += letter.lower()
        elif letter.isupper() and letter == to_swap.upper():
            new_phrase += letter.lower()
        elif letter.islower() and letter == to_swap.lower():
            new_phrase += letter.upper()
        else:
            new_phrase += letter
    return new_phrase

print(flip_case('Aaaahhh', 'a'))
print(flip_case('Aaaahhh', 'A'))
print(flip_case('Aaaahhh', 'h'))
string = 'a'
print('b'.islower())
print('A'.lower() == 'a')
