function stoogeSort(array, left, right) {
    if (!array.length) throw new Error('');
    left = left || 0;
    right = right || array.length;

    if (array[left] > array[right]) {
        tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
    }
    if ((left + 1) < right) {
        var k=parseInt((right-left+1)/3);
        stoogeSort(array,left, right-k);
        stoogeSort(array, left+k, right);
        stoogeSort(array, left, right-k);
    }
    return array;
}
