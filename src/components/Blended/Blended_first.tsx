import { Settings, Currency, User, CreateAcc, UserSix } from "./types";

export default function Blended_first() {
  // TS - 1
  // const settings: Settings = {
  //   darkMode: true,
  //   fontSize: 16,
  //   language: "en",
  // };

  // TS - 2
  // function convertCurrency({ amount, currency }: Currency): void {
  //   console.log(`Converting ${amount} to ${currency}`);
  // }

  // TS - 3
  // const user: User = { id: "1", name: "Charlie", age: 25, active: true };

  // TS - 4
  // const dimensions: number[] = [1920, 1080];

  // TS - 5

  // function createUser({ name, age }: CreateAcc): CreateAcc {
  //   return {
  //     name,
  //     age,
  //     isAdmin: false,
  //   };
  // }
  // console.log(createUser({ name: "Alice", age: 30 }));

  // TS - 6
  // const user: UserSix = {
  //   name: "Alice",
  //   address: {
  //     city: "Kyiv",
  //   },
  // };

  // console.log(user.address?.city);

  // TS - 7

  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];

  // TS - 8
  // TS - 9
  // TS - 10

  return <div></div>;
}
