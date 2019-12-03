// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
  let timePassed = 0;
  let tillsArray = [];
  let doneShopping = false;

  // No Customers in Line
  if (customers.length === 0) return 0;

  // Start Shopping
  for (let i = 0; i < n; i++) {
    tillsArray[i] = customers[i];
  }

  // Continue Shopping
  while (!doneShopping) {
    let newTillsArray = tillsArray.map((custTimeLeft, idx, arr) => {
      custTimeLeft--;

      if (custTimeLeft === 0) {
        n++;
        if (customers[n - 1] !== undefined) {
          return (custTimeLeft = customers[n - 1]);
        } else {
          return arr.splice(idx, 1);
        }
      }
    });

    timePassed++;

    if (newTillsArray === 0) {
      doneShopping = true;
    } else {
      tillsArray = [];
      tillsArray = [...newTillsArray];
    }
  }

  return timePassed;
}
