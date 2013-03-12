var barWidth = 20;
var barHeight = 150;
var space = 20;

Array.prototype.inArray = function(needle) {
    for(var i in this) {
        if(this[i] == needle) return true;
    }
    return false;
};

Stat = function() {    
    if (typeof Stat.instance === 'object') {
        return Stat.instance;
    }
    // cache
    Stat.instance = this;

    this._data = [];
    this._stat = [];

    this.add = function(data) {
        this._data.push(data.slice())
    }

    this.getData = function() {
        return this._data
    }

    this.print = function() {
        console.log('[')
        for(var i in this._data) {
            console.log("\t[" + this._data[i].join(',') + "],");
        }
        console.log(']')
    }

    this.save = function() {
        this._stat.push(this._data);
        this._data = [];
    }

    this.getDump = function(id) {
        return this._stat[id];        
    }

    this.curId = function() {
        return this._stat.length;
    }

    // implicit return:
    // return this;
}

var mystat = new Stat();

function drawArray(arr, canvasId) {

    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");


    console.log(arr.length);
    canvas.height = space + (arr.length * barHeight)
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    function draw(arr, j, idxs) {
        var height = (barHeight - space) / Math.max.apply(null, arr);            
        for(var i = 0; i < arr.length; i++) {                             
            if(idxs.inArray(i)) {
                context.fillStyle = "#ff0000";
            } else {
                context.fillStyle = "#888888";
            }
            //console.log(j * (barHeight + 10));
            //console.log(space + (j * barHeight ));
            context.fillRect(50 + i*barWidth, space + (j * barHeight), barWidth-1, arr[i] * height);

            context.font = "11px consolas";
            context.fillText(arr[i], 50 + i*barWidth, space + (j * barHeight ));
        }
    }

    function drawDiff(arr1, arr2, j) {
        var idxs = [];
        for(var i = 0; i < arr1.length; i++) {
            if(arr1[i] != arr2[i]) idxs.push(i);
        }
        draw(arr1, j, idxs);
    }

    var prev = false;        
    for(var j = 0; j < arr.length; j++) {
        context.font = "bold 22px consolas";
        context.fillStyle = "#888888";
        context.fillText(j, 10, (j * barHeight) + 30);

        if(prev) {
            drawDiff(arr[j], prev, j)
        } else {
            draw(arr[j], j, []);
        }
        prev = arr[j];            
    }        
}

