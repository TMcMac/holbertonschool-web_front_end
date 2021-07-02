function countPrimeNumbers() {
    let primeCount = 1
    for (let i = 2; i < 101; i++) {
        for (let j = 2; j < 101; j++) {
            if (!(i % j === 0))
                primeCount++;
        }
    }
    return primeCount
}

    let start = performance.now();
    for(let count = 0; count < 100; count++){
        countPrimeNumbers();
    }
    let end = performance.now();
    let lapsed = end - start
    console.log("Execution time of calculating prime numbers 100 times was " + lapsed + " milliseconds.")