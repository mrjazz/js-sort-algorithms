function bogoSort(array) {
    if (!array.length) throw new Error('');

    function shuffle(array) {
        for (var i = 0, l = array.length, k = l - 1; i < l; i++) {
            var tmpPos = getRandomInt(i, k),
                tmp = array[i];
            array[i] = array[tmpPos];
            array[tmpPos] = tmp;
        }
        return array;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function inOrder(array) {
        for (var i = 0, l = array.length - 1; i < l; i++) {
            if (array[i] > array[i + 1]) return false;
        }
        return true;
    }

    while (!inOrder(array)) {
        array = shuffle(array);
    }
    return array;
}