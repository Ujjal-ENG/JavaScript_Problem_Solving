function patternShowing(num) {
    for (let i = 1; i <= num; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += i;
        }
        console.log(line);
    }
}

patternShowing(4);
