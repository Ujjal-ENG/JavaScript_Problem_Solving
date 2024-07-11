function duplicateBrackets(bracs){
    let stack = [];
    let result = [];
    
    for(let i = 0; i < bracs.length; i++){
        if(bracs[i] === '('){
            stack.push(i);
            console.log(peek(stack));
        } else if(bracs[i] === ')'){
            if(stack.length > 0){
                result.push([stack.pop(), i]);
            }
        }
    }
    return result;
}

function peek(arry){
    return arry[arry.length - 1];
}

console.log(duplicateBrackets("(1+2)+((1+2))"));