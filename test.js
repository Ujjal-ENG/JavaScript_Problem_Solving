function patternShowing(num) {
    let line = ' ';
    for (let i = 1; i <=num; i++) {
        for (let j = 0; j <= i; j++){
            console.log(line +'*')
        }
        console.log(line);
    }
}

patternShowing(4);
