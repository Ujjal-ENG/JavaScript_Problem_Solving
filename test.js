function patternShowing(num) {
    for (let i = num; i >=0; --i) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += i;
        }
        console.log(line);
    }
}

patternShowing(4);
