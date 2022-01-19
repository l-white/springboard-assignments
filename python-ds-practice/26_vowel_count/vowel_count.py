def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    phrase = phrase.lower()
    obj = {}
    vowels = 'aeiou'
    for letter in phrase:
        if letter in vowels and letter not in obj:
            obj[letter] = 1
        elif letter in vowels and letter in obj:
            obj[letter] +=1
    return obj

print(vowel_count('HOW ARE YOU? i am great!'))
print(vowel_count('rithm school'))