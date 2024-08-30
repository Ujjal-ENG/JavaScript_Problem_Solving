

function patternShowing(num) {
    let line = '*';
    for (let i = 1; i <=num; i++) {
        for (let j = 1; j <= i; j++){
            if (i == 1) {
                console.log('*');
            }
            else {
                let star = (j * 2) + 1;
                console.log('*'.repeat(star));
            }
        }
    }
}

patternShowing(4);
