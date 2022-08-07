

function isPrime(num) {
    let divisor = 2; 
    console.log('Call')

    while (num > divisor) {
        if (num % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}

isPrime(237);