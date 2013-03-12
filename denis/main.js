function increment(inc, size) {
    var p1, p2, p3, s;
    p1 = p2 = p3 = 1;
    s = -1;
    do {
        if (++s % 2) {
            inc[s] = 8*p1 - 6*p2 + 1;
        } else {
            inc[s] = 9*p1 - 9*p3 + 1;
            p2 *= 2;
            p3 *= 2;
        }
        p1 *= 2;
    } while(3*inc[s] < size);
    return s > 0 ? --s : 0;
}

function sortShell(a) {
    //console.log(a);
    var size = a.length;
    var inc, i, j, s;
    var seq = [];
    s = increment(seq, size);
    
    //console.log(seq);
    
    while (s >= 0) {                           
        inc = seq[s--];
        //console.log("--------> " + inc + " <--------");
        for (i = inc; i < size; i++) {            
            var temp = a[i];
            //console.log('-> ' + i);
            for (j = i-inc; (j >= 0) && (a[j] > temp); j -= inc) {                
                //console.log((j+inc)+ " = " + j);
                a[j+inc] = a[j];
                mystat.add(a)
            }
            //console.log((j+inc) + "<-");
            a[j+inc] = temp;
            mystat.add(a)
            //console.log(a);
        }
    }
    return a;
}

function sortNative(data) {
    return data.sort(function(a,b){return a>b?1:-1});
}

function sortPyramid2(a) {
    var k = 0;
    var len = a.length;    
    var tmp;    
    var val;
    var cycles = Math.floor(len / 2);
    do {               
        val = {
            'max': a[k],
            'min': a[len - 1 - k],
            'max_idx':k,
            'min_idx':len - 1 - k
        };
                
        for(var i = k; i < len - k; i++) {
            if(val.max < a[i]) {
                val.max = a[i];
                val.max_idx = i;
            } else if(val.min > a[i]) {
                val.min = a[i];
                val.min_idx = i;
            }
        }                
        
        tmp = a[k];        
        a[k] = val.min;
        a[val.min_idx] = tmp;

        mystat.add(a)        

        tmp = a[len - 1 - k];
        a[len - 1 - k] = val.max;
        
        if(k == val.max_idx) {                    
            a[val.min_idx] = tmp;
        } else {            
            a[val.max_idx] = tmp;
        }

        mystat.add(a)

        k++;
    } while(cycles > k);
    return a;
}

function sortPyramid(a) {
    var L = a.length;
    var maxI = (L / 2) - 1; //for L =(10,11)  half = (4,4)
    for(var i=0; i <=maxI; i++) {        
        var maxJ = L - 1 - i; //for L=(10,11) maxJ = (9,10)... for i=4 maxJ=(5,6)
        var j=i;

        var val = [a[i],a[i],a[i],a[i]];
        var idx = [i, i, i, i];

        val[2] = a[i];
        idx[2] = i;
        for(; j<=maxJ; j++) {
            if(a[j]>val[0]) {
                val[0] = a[j];
                idx[0] = j;
            } else if (a[j]<val[1]) {
                val[1] = a[j];
                idx[1] = j;
            }
        }
        j--;
        val[3] = a[j];
        idx[3] = j;

        /**
        FOLLOWING CODE IS INTERESTING TOO and PART OF THE MAGIC IS DONE HERE.
        */

        //Here i remove duplicated indices by setting them to -1
        var count = 0;
        var val_stack = [];
        var idx_stack = [];

        for(var k=0; k<4; k++) {
            for(var m=k+1; m<4; m++) {
                //assert(m!=k);

                if(idx[k]==idx[m]) {
                    if(idx[m]!=-1) {
                        idx[m]=-1;
                    }
                }
            }

            if(idx[k]!=-1) {
                val_stack[count]  = val[k];
                idx_stack[count++]= idx[k];
            }
        }

        //count now contains the number of values that are not duplicated.
        for(var k=0; k<count; k++) {
            for(var m=k+1; m<count; m++) {
                //BUBBLE SORT. Sound hugly? I found that a nice choice.
                //Using bubbleSort for going faster than BubbleSort
                //is something a lot funny!
                if(val_stack[k]>val_stack[m]) {
                    var temp = val_stack[k];
                    val_stack[k] = val_stack[m];
                    val_stack[m] = temp;
                }

                //even if you expect indices to be already sorted, don't comment out
                //this code! :). Because I remove duplicated indices by setting them to -1
                //and so additional sorting is required.
                if(idx_stack[k]>idx_stack[m]) {
                    var temp = idx_stack[k];
                    idx_stack[k] = idx_stack[m];
                    idx_stack[m] = temp;
                }
            }
            
            a[idx_stack[k]] = val_stack[k]; //put values in the right place.
            mystat.add(a)
        }
    }
    return a;
}