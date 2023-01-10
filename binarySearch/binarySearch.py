def binarySearch(theList, target):
    firstPosition= 0
    lastPosition = len(theList) - 1

    while firstPosition <= lastPosition:
        midpoint = (firstPosition + lastPosition) // 2
        print(midpoint)
        if theList[midpoint] == target:
            return midpoint #best case scenario
        elif theList[midpoint] > target:
            lastPosition = midpoint - 1
        else:
            firstPosition = midpoint + 1
    return -1


def verify():
    theList = [1,3,5,6,7,8,10,12,13]
    target = 5
    position = binarySearch(theList=theList, target=target)
    if position != -1 :
        print("target exists at position ", position)
    else: 
        print("target is not in the list")

verify()