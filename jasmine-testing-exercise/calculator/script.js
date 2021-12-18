  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
    form.reset();
  }

  const submitButton = document.getElementById('calc-submit');
  console.log(`The submit button id is ${submitButton.id}`)
  const monthlyPaymentArea = document.getElementById('monthly-payment');
  const paymentArea = document.getElementById('payment-area'); 
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
      const userLoanAmt = Number(document.getElementById('loan-amount').value);
      const userYearsAmt = Number(document.getElementById('loan-years').value);
      const userRate = Number(document.getElementById('loan-rate').value);
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const currentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIValues));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const principle = getCurrentUIValues().amount;
    const years = getCurrentUIValues().years;
    const rate = (getCurrentUIValues().rate /100) / 12;
    const n = Math.floor(years * 12)
    return (
      (rate * principle) / (1 - Math.pow((1 + rate), -n))).toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    // submit button calls this function
    const monthlyUI = document.getElementById("monthly-payment");
    monthlyUI.innerText = "$" + monthly;
  }
  