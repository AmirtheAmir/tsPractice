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

let employee: { readonly id: number; name?: string } = { id: 1 };
employee.name = "Amir";

