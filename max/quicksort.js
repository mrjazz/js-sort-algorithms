/**
 * Quick sort wrapper.
 * @param a
 * @return {*}
 */
function quickSort(a) {
    quick_sort(a, 0, a.length - 1);
    return a;
}

/**
 * Quick sort.
 * @param array a
 * @param int   low
 * @param int   high
 */
function quick_sort(a, low, high) {
    if (high <= low) return;

    var left = low;
    var right = high;
    var x = a[Math.floor((low + high) / 2)];
    while (left < right) {
        while (a[left] < x) left++;
        while (a[right] > x) right--;
        if (left <= right) {
            var t = a[left];
            a[left] = a[right];
            mystat.add(a)
            a[right] = t;
            mystat.add(a)
            left++;
            right--;
        }
    }
    if (low < right) quick_sort(a, low, right);
    if (left < high) quick_sort(a, left, high);    
}

/**
 * Quick sort wrapper.
 * @param a
 * @return {*}
 */
function cocktailSort(a) {
    cocktail_sort(a);
    return a;
}

/**
 * Cocktail sort.
 * @param a
 */
function cocktail_sort(a) {
    var  left = 0, right = a.length - 1, last = a.length - 1;

    while (left <= right) {
        for (var i = right; i >= left; i--) {
            if (a[i - 1] > a[i]) {
                var t = a[i - 1];
                a[i - 1] = a[i];
                mystat.add(a)
                a[i] = t;
                mystat.add(a)
                last = i;
            }
        }
        left = last + 1;
        for (var i = left; i <= right; i++) {
            if (a[i - 1] > a[i]) {
                var t = a[i - 1];
                a[i - 1] = a[i];
                mystat.add(a)
                a[i] = t;
                mystat.add(a)
                last = i;
            }
        }
        right = last - 1;
    }
}

/**
 * Quick 3 sort wrapper.
 * @param a
 * @return {*}
 */
function quick3Sort(a) {
    quick_sort(a, 0, a.length - 1);
    return a;
}

/**
 * Quicksort with 3-way partitioning.
 * @param a
 * @param low
 * @param high
 */
function quick3_sort(a, low, high) {
    if (high <= low) return;
    var i = low - 1;
    var j = high;
    var p = low - 1;
    var q = high;
    var v = a[high];
    while (true) {
        while (a[++i] < v);
        while (v < a[--j]) if (j == low) break;
        if (i >= j) break;
        var t = a[i];
        a[i] = a[j];
        mystat.add(a)
        a[j] = t;
        mystat.add(a)
        if (a[i] == v) {
            p++;
            var t = a[p];
            a[p] = a[i];
            mystat.add(a)
            a[i] = t;
            mystat.add(a)
        }
        if (v == a[j]) {
            q--;
            var t = a[j];
            a[j] = a[q];
            mystat.add(a)
            a[q] = t;
            mystat.add(a)
        }
    }
    var t = a[i];
    a[i] = a[high];
    mystat.add(a)
    a[high] = t;
    mystat.add(a)
    j = i - 1;
    i++;
    for (var k = low; k < p; k++, j--) {
        var t = a[k];
        a[k] = a[j];
        mystat.add(a)
        a[j] = t;
        mystat.add(a)
    }
    for (var k = high - 1; k > q; k--, i++) {
        var t = a[k];
        a[k] = a[i];
        mystat.add(a)
        a[i] = t;
        mystat.add(a)
    }
    quick3_sort(a, low, j);
    quick3_sort(a, i, high);
}