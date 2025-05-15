export interface Settings {
  darkMode: boolean;
  fontSize: number;
  language: string;
}

export interface Currency {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}

export interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

export interface CreateAcc {
  name: string;
  age: number;
  isAdmin?: boolean;
}

interface Address {
  city: string;
}

export interface UserSix {
  name: string;
  address?: Address;
}
