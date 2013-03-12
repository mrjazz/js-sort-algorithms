function mergeArrayParts(leftArrayPart, rightArrayPart){
    var functionResult  = [],
        leftIndex = 0,
        rightIndex = 0;
    while (leftIndex < leftArrayPart.length && rightIndex < rightArrayPart.length){
        if (leftArrayPart[leftIndex] < rightArrayPart[rightIndex]){
            functionResult.push(leftArrayPart[leftIndex++]);
        } else {
            functionResult.push(rightArrayPart[rightIndex++]);
        }
        mystat.add(functionResult);
    }
    return functionResult.concat(leftArrayPart.slice(leftIndex)).concat(rightArrayPart.slice(rightIndex));
}

function mergeSort(data){
    if (data.length < 2) {
        return data;
    }
    var middle = Math.floor(data.length / 2),
        leftArrayPart    = data.slice(0, middle),
        rightArrayPart   = data.slice(middle),
        params = mergeArrayParts(mergeSort(leftArrayPart), mergeSort(rightArrayPart));
    params.unshift(0, data.length);
    data.splice.apply(data, params);
    mystat.add(data);
    return data;
}