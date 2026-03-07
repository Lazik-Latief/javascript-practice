function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// 

function setupButton(buttonId) {
  let clickCount = 0;

  document.getElementById(buttonId).addEventListener("click", () => {
    clickCount++;
    console.log("Button clicked", clickCount, "times");
  });
}

setupButton("myButton");
// 

function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    },

    getBalance() {
      return balance;
    },
  };
}

const account = bankAccount(100);

account.deposit(50);   // 150
account.withdraw(20);  // 130

console.log(account.getBalance());

