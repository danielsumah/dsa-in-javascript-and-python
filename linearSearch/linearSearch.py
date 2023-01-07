def linearSearch(list, target):
    """"
        Returns the index position of the target in the list if found else return -1
    """
    for  i in range(len(list)):
        # note that len(list) runs in constant time
        if list[i] == target:
            return i
    return -1

def verify():
    theList = [1,3,5,6,7]
    target = 12
    position = linearSearch(list=theList, target=target)
    if position != -1 :
        print("target exists at position ", position)
    else: 
        print("target is not in the list")

verify()