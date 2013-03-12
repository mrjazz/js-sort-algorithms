function heapSort(a) {
    var swap = function(a, x, y) {
        var tmp = a[x];
        a[x] = a[y];
        mystat.add(a)
        a[y] = tmp;
        mystat.add(a)
    };

    var siftDown = function(a, start, end) {
        var root = start;

        while (root * 2 + 1 <= end) {
            var child = root * 2 + 1;
            if (child + 1 <= end && a[child] < a[child + 1]) {
                child = child + 1;
            }
            if (a[child] > a[root]) {
                swap(a, root, child);                
                root = child;
            } else {
                return;
            }
        }
    };

	var heapify = function(a, len) {
        var start = (len - 1) / 2;

        for (; start >= 0; start--) {
            siftDown(a, start, len - 1);
        }
	};

    // main
    heapify(a, a.length);
    var end = a.length - 1;
    while (end > 0) {
        swap(a, end, 0);
        siftDown(a, 0, --end);
    }

    return a;
}


