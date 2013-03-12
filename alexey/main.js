
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
