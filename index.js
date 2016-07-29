var generateShiftedAlphabets = function (array) {
    var head = array.shift();
    array.push(head);
    return array;
};

var cloneArray = function (array) {
    var newArray = [];
    newArray = array.map(function (value) {
        return value;
    });
    return newArray;
}