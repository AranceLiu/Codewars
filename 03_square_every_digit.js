function squareDigits(num) {
  return (
    String(num)
      .split("")
      .map((x) => Number(x) ** 2)
      .join("") * 1
  );
}

console.log(squareDigits(9119)); // 911181
console.log(squareDigits(765)); // 493625
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(1111)); // 1111
console.log(squareDigits(1234321)); // 14916941
console.log(squareDigits(0)); // 0
