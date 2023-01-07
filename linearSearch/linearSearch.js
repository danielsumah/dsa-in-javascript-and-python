var linearSearch = function (list, target) {
    // should return the position of the target if found else return -1
    for (var index = 0; index < list.length; index++) {
        if (list[index] === target) {
            return target;
        }
    }
    return -1;
};
var verify = function () {
    var theList = [1, 3, 5, 6, 7];
    var target = 7;
    var position = linearSearch(theList, target);
    if (position != -1) {
        console.log("target exists at position ", position);
    }
    else {
        console.log("target does not exisit in the list");
    }
};
verify();
