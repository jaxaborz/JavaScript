function calcFunction (number) {
    return function () {
        console.log(10 * number)
    }
    
}

const calc = calcFunction (number=8);
console.log(calc ())
calc()
//calculyator