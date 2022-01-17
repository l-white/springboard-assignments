def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
    if command == 'remove' and location == 'end' and value == None:
        lst.pop()
    elif command == 'remove' and location == 'beginning' and value == None:
        del lst[0]
    elif command == 'add' and location == 'end' and value != None:
        lst.append(value)
    elif command == 'add' and location == 'beginning' and value != None:
        lst.insert(0, value)
    else:
        return None
    return lst

ls = [1, 2, 3]
print(list_manipulation(ls, 'remove', 'end'))
print(list_manipulation(ls, 'remove', 'beginning'))
print(list_manipulation(ls, 'add', 'end', 30))
print(list_manipulation(ls, 'add', 'beginning', 20))
print(list_manipulation(ls, 'add', 'dunno'))
print(list_manipulation(ls, 'foo', 'end'))