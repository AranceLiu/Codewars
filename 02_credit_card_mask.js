function maskify(cc) {
  const n = cc.length;
  return n > 4 ? "#".repeat(n - 4) + cc.substring(n - 4) : cc;
}

console.log(maskify("Nananananananananananananananana Batman!")); //  ####################################man!
console.log(maskify("4556364607935616")); // ############5616
console.log(maskify("64607935616")); // #######5616
console.log(maskify("11111")); // #1111
console.log(maskify("1111")); // 1111
console.log(maskify("1")); // 1
console.log(maskify("")); //
console.log(maskify("A rance")); // ###ance
