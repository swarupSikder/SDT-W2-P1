const payments = [1000, 2000, 3000];
const livingCost = 5400;

const monthlySavings = (payments, livingCost) => {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }


    let savings = 0;
    let tax = 0;

    payments.map(payment=> {
        savings = savings + payment;

        if(payment >= 3000){
            tax = tax + payment*20/100;
        }
    })

    savings = savings - tax - livingCost;

    if(savings>=0){
        return savings;
    }
    else {
        return "earn more";
    }
}

console.log(monthlySavings(payments, livingCost));