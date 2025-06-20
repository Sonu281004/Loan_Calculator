document.getElementById('calculateBtn').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const interestRate = parseFloat(document.getElementById('InterestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        document.getElementById('result').textContent = "Please enter valid positive numbers.";
        return;
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = 
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('result').innerHTML = `
        Monthly Payment: ₹${monthlyPayment.toFixed(2)}<br>
        Total Payment: ₹${totalPayment.toFixed(2)}<br>
        Total Interest: ₹${totalInterest.toFixed(2)}
    `;
});
