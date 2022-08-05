// Program 4- Write a function that accepts interest, principle, and tenure and calculates EMI.

function calculateEMI(principal,interest_rate,tenure)
{

    const interest = (principal * (interest_rate * 0.01)) / tenure;

    let payment = (principal / tenure + interest_rate).toFixed(2);

    console.log("EMI:"+payment);

}

calculateEMI(1000,5,2);