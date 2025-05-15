// TS - 6

interface Address {
  city: string;
}

export interface User {
  name: string;
  address?: Address;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
