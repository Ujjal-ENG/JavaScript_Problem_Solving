function patternShowing(num) {
    let c = 0;
    for (let i = 1; i <= num; i++) {
        c++;
        for (let j = 1; j <= i; j++) { 
            console.log(c+'/n');
        }
    }
} 

console.log(patternShowing(4));