function digitalRoot(n) {
  return n == 0 ? 0 : 1 + ((n - 1) % 9);
}

console.log(digitalRoot(0)); // 0
console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); //6
console.log(digitalRoot(493193)); //2
console.log(digitalRoot(19930221)); //9
