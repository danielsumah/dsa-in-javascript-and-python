def recursiveBinarySearch(theList, target):
    if len(theList) == 0:
        return -1
    else:
        midpoint = len(theList) // 2

        if theList[midpoint] ==  target:
            return midpoint
        else:
            if theList[midpoint] <  target:
                recursiveBinarySearch(theList = theList[midpoint + 1 :], target = target)
            else:
                recursiveBinarySearch(theList = theList[: midpoint], target =target)

def verify():
    theList = [1,3,5,6,7,8,10,12,13]
    target = 5
    position = recursiveBinarySearch(theList=theList, target=target)
    print(position)
    if position != -1 :
        print("target exists at position ", position)
    else: 
        print("target is not in the list")

verify()