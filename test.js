function patternShowing(num) {
    let line = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i; j++){
            line += "*";
        }
        console.log(line);
    }
}

patternShowing(4);
