// TS - 2

interface Currency {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}

function convertCurrency({ amount, currency }: Currency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 2, currency: "USD" });
