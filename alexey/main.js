
function selectionSort(a) {
	var l = a.length
	for (var i = 0; i < l - 1; i++) {
		var min = i
		for (var j = i + 1; j < l; j++) {
			if (a[j] < a[min]) {
				min = j
			}
		}
		if (min != i) {
			var t = a[i]
			a[i] = a[min]
			mystat.add(a);
			a[min] = t
			mystat.add(a);
		}
	}
	return a
}

function combSort(a) {
	var gap = a.length, swapped = true
	while (gap > 1 || swapped) {
		if (gap > 1) {
			gap = Math.floor(gap / 1.3)
		}
		var i = 0
		swapped = false
		while (i + gap < a.length) {
			if (a[i] > a[i + gap]) {
				var t = a[i]
				a[i] = a[i + gap]
				mystat.add(a);
				a[i + gap] = t
				mystat.add(a);
				swapped = true
			}
			i++
		}
	}
	return a
}


/* radix sort */

function radixSortSimple(a) {
	var k, m = 10, l = a.length
	var min = 1, max = 12
	var i = min
	var temp = {}, output = []
	do {
		temp[i++] = 0
	} while (i <= max)
	i = 0
	for (; i < l; i++) {
		temp[a[i]]++
	}
	for (i in temp) {
		if (temp[i] == 1) {
			output.push(i)
		} else {
			while (temp[i]--) {
				output.push(i)
			}
		}
	}
	console.log(output)
}

function digit_at(n, position) {
	return n / (Math.pow(10, position)) % 10 | 0
}
function radixSort(a) {
	var i,
		k = 0, // количество разрядов в самом длинном ключе
		m = 10, // разрядность данных: количество возможных значений разряда ключа (0..9 -> 10)
		l = a.length,
		ix1 = 0
	for (i in a) {
		t = (a[i]).toString().length
		if (k < t) {
			k = t
		}
	}

	for (; ix1 < k; ix1++) {
		var store = {};
		for (i = 0; i < l; i++) {
			var digit = digit_at(a[i], ix1)
			if (!store[digit]) {
				store[digit] = []
			}
			store[digit].push(a[i])
		}
		a = []
		for (i = 0; i < m; i++) {
			if (store[i]) {
				for (x in store[i]) {
					a.push(store[i][x])
				}
			}
		}
	}
	return a
}
radixSort(a)