
function test() {
  let node = { a : 1, b : 2 };
  return { a, b } = node;
}

console.log(test()); // { a: 1, b: 2 }
console.log(a); // 1
console.log(b); // 2

// that's upset :(
