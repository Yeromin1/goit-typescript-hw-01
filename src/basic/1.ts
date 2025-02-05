type User = {
  age: number;
  username: string;
  toggle: boolean;
  empty: null;
  callback: (a: number) => number;
};

const age = 50;
const username = "Max";
const toggle = true;
const empty = null;
const callback: (a: number) => number = (a) => {
  return 100 + a;
};

const user: User = {
  age,
  username,
  toggle,
  empty,
  callback,
};

export { user };
