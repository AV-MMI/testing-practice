export { caesarCipher };

function caesarCipher(str, shift){
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let outStr = "";

    // conserve case
    // deal with puntuation
    

    for(let i = 0; i < str.length; i++){
        // only shift is there is a word
        if( abc.includes( str[i].toLowerCase() ) ){
            let newIdx = abc.indexOf(str[i].toLowerCase()) + shift;
            // in case the newIdx go out of our length
            if(newIdx >= abc.length){
                newIdx = newIdx - abc.length; 
            }

            if(newIdx < 0){
                newIdx = newIdx + abc.length;
            }

            // conserve case
                // uppercase
            if( str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 ){
                outStr += abc[newIdx].toUpperCase();
            } else {
                // lowercase
                outStr += abc[newIdx];
            }

        } else {
            outStr += abc[i];
        }

    }

    return outStr;
}