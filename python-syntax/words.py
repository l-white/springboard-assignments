"""
For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!"""
list = ["hello", "hey", "goodbye", "yo", "yes"]
for item in list:
  print(item.upper())

"""Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)

Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).
"""
def to_upper_case(array):
  # prints items that start with "e"
  for item in array:
    if item[0] == 'e' or item[0] == "E":
      print(item.upper())
print(to_upper_case(list))

"""
Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.

For example:

# this should print "HELLO", "HEY", "YO", and "YES"

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})
                   """
def print_upper_words(array, must_start_with):
  for item in array:
    for element in must_start_with:
      if item.startswith(element):
        print(item.upper())
print(print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with=["h", "y"]))