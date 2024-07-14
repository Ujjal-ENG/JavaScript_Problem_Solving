function duplicateBrackets(exp){
    let stack = [];

    for(let ch of exp){
       if(ch === ")"){
        if(stack[stack.length-1] ==="("){
            return true;
        }else{
            while(stack.length > 0 && stack[stack.length-1] !=="("){
                stack.pop();
            }
            if(stack.length > 0){
                stack.pop();
            }
        }
       }else{
        stack.push(ch);
       }
    }
    return false;
}
// Example usage:
console.log(duplicateBrackets("(1+2)+((1+2))")); // Output: true
console.log(duplicateBrackets("(1+2) + (3+4)")); // Output: false
console.log(duplicateBrackets("((a + b))"));     // Output: true
console.log(duplicateBrackets("(a + (b + c))")); // Output: false