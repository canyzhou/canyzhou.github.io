declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string

type T4 = ReturnType<typeof f1>;
// type T4 = {
//   a: number;
//   b: string;
// }