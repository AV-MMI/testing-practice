export { analyzeArr };


function analyzeArr(arr){
    let obj = {
        average: undefined,
        min: arr[0],
        max: arr[0],
        length: arr.length,
    }

    let totalSum = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < obj.min){
            obj.min = arr[i];
        }

        if(arr[i] > obj.max){
            obj.max = arr[i];
        }

        totalSum += arr[i];
    }

    obj.average = totalSum / arr.length;

    return obj;
}