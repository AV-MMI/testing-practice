export { reverseStr };


function reverseStr(str){
    let outputStr = "";

    for(let i = str.length-1; i >= 0 ; i--){
        outputStr += str[i];
    }

    return outputStr;
}