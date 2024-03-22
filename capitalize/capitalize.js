export { capitalize };


function capitalize(str){
    let outputStr = str[0].toUpperCase() + str.slice(1, str.length);
    return outputStr;
}