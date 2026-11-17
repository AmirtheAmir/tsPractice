function render(document: any) {
  console.log(document);
}

let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toExponential);

let user: [number, string] = [1, "Amir"];

enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function caculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1;
}
console.log(caculateTax(10_000, 2021));

type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Amir",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseFloat(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");

// Intersection Types in action
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}
greet(null);

type customer = {
  birthday: Date;
};
function getCustomer(id: number): customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let getCustomer1 = getCustomer(0);
if (getCustomer1 !== null && getCustomer1 !== undefined) {
  console.log(getCustomer1.birthday);
}
