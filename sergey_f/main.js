 
function shellSort(data, spacing, shift){
	var k,n;
	for (k = shift+spacing; k<data.length; k+=spacing){
		key = data[k];
		n = k - spacing;
	    while (n >= shift && data[n] > key){
	    	data[n + spacing] = data[n];	    	
	    	mystat.add(data);
	    	n = n - spacing;
	    }
	    data[n + spacing] = key;	    
	   	mystat.add(data);
	}
	return data;
}

function insertionSort(data){
	return shellSort(data, 1, 0);
}

function shellSortFibo(data){
	var fiboArray = generateFibo(data.length);
	return shellSortData(data, fiboArray);
	//return shellSort(data, 1, 0);
}

function shellSortHibbard(data){
	var hibardArray = generateHibbard(data.length);
	return shellSortData(data, hibardArray);
}
function shellSortPratt(data){
	var prattArray = generatePratt(data.length);
	return shellSortData(data, prattArray);
	
}
function shellSortData(data, values){
	var k = values.length;
	var t = 0;
	while(k>=0){
		t = 0;
		while(t<=values[k]){
			data = shellSort(data, values[k], t);
			t++;
		}
		k--
	}
	return data;
}

function generateFibo(maxVal){
	var fibo = [];
	var i = 0;
	var j = 1;
	var val = 0;
	while(val <= maxVal/2){
		var val = i+j;
		fibo.push(val);
		if(val >= maxVal/2){
			return fibo;
		}
		i = j;
		j=val;
	}
}
function generatePratt(maxVal){
	var i, last2ind = 0, last3ind = 0;
	var pratt = [];
	pratt.push(1)
	for (i=1; i < maxVal; ++i) {
		if (pratt[last2ind]*2 < pratt[last3ind]*3) {
			pratt[i] = pratt[last2ind]*2;
			last2ind++;
		} else if (pratt[last2ind]*2 > pratt[last3ind]*3) {
			pratt[i] = pratt[last3ind]*3;
			last3ind++;
		} else {
			pratt[i] = pratt[last2ind]*2;
			last2ind++;
			last3ind++;
		}
		if(pratt[i] > maxVal/2){
			return pratt;
		}
	}
	return pratt;
}

function generateHibbard(maxVal){
	var hibbard = [];
	var i = 1;
	hibbard.push(i);
	while(i <= maxVal/2){
		if(i >= maxVal/2){
			return hibbard;
		}
		i*=2;
		hibbard.push(i);
	}
	return hibbard;
}
/*
Array.prototype.exchange = function (a, b) {
	var c = this[a];
	this[a] = this[b];
	this[b] = c;
	return this
};
*/
