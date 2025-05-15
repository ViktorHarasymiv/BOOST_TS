// TS - 5

interface CreateAcc {
  name: string;
  age: number;
  isAdmin?: boolean;
}

function createUser({ name, age }: CreateAcc): CreateAcc {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
