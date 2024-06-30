var addTwoPromises = async function(promise1, promise2) {
    const result1 = await promise1.then((res)=>res)
    const result2 = await promise2.then((res)=>res)
    console.log(result1+result2)
};
let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

console.log(addTwoPromises(promise1,promise2))