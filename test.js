function minDaysToBecomeEngineers(n, trTimes, sLTimes) {

    let joiners = trTimes.map((trTime, index) => ({
        trTime: trTime,
        sLTime: sLTimes[index]
    }));
    
  
    joiners.sort((a, b) => b.sLTime - a.sLTime);
    
    let currentDay = 0;
    let endDay = 0;
    
    for (let joiner of joiners) {
        currentDay += joiner.trTime;
        endDay = Math.max(endDay, currentDay + joiner.sLTime);
    }
    
    return endDay;
}

// Sample input
const n = 3;
const trainingTimes = [2, 5, 4];
const selfLearningTimes = [3, 4, 2];


console.log(minDaysToBecomeEngineers(n, trainingTimes, selfLearningTimes)); 
