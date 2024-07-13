function duplicateBrackets(bracs){
    let stack = [];
    let result = [];
    
    for(let i = 0; i < bracs.length; i++){
        if(bracs[i] === '('){
            stack.push(i);
        } else{
            if(peek(bracs) === '('){
                return true;
            }
            else {
               console.log(peek(stack));
            }
        }
    }
    return false;
}

function peek(arry){
    return arry[arry.length - 1];
}

console.log(duplicateBrackets("(1+2)+((1+2))"));