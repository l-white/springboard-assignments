def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    new_phrase = ''
    new_phrase += phrase[0].upper()
    new_phrase += phrase[1:].lower()
    new_phrase = new_phrase.title()
    return new_phrase

print(titleize('this is awesome'))
print(titleize('oNLy cAPITALIZe fIRSt'))


