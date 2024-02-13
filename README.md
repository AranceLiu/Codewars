# Codewars practice

## 01 Sum of a Sequence

### Description

Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: `begin`, `end`, `step`.

If the `begin` value is greater than the `end`, your function should return `0`. If `end` is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below for clarification.

### Examples

- `sequenceSum(2, 2, 2)` should return `2`.
- `sequenceSum(2, 6, 2)` should return `12` (2 + 4 + 6).
- `sequenceSum(1, 5, 1)` should return `15` (1 + 2 + 3 + 4 + 5).
- `sequenceSum(1, 5, 3)` should return `5` (1 + 4).

This is the first kata in the series:

1. **Sum of a Sequence** (this kata)
2. [Sum of a Sequence [Hard-Core Version]](https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/javascript)

## 02 Credit Card Mask

### Description

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function `maskify`, which changes all but the last four characters into `#`.

### Examples

- `"4556364607935616"` should return `"############5616"`.
- `64607935616` should return `"#######5616"`.
- `"1"` should return `"1"`.
- `""` should return `""`.
- `"Skippy"` should return `"##ippy"`.
- `"Nananananananananananananananana Batman!"` should return `"####################################man!"`.

## 03 Square Every Digit

### Description

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run `9119` through the function, `811181` will come out, because 9<sup>2</sup> is 81 and 1<sup>2</sup> is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7<sup>2</sup> is 49, 6<sup>2</sup> is 36, and 5<sup>2</sup> is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

### Examples

- `9119` should return `811181`.
- `765` should return `493625`.

## 04 Sum of Digits / Digital Root

### Description

[Digital root](https://en.wikipedia.org/wiki/Digital_root) is the recursive sum of all the digits in a number.

Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

### Examples

- `16` should return `7` (1 + 6).
- `942` should return `6` since the first time will get 15 (9 + 4 + 2) and using the same method to get 6 (1 + 5).
- `132189` should return `6` since the first time will get 24 (1 + 3 + 2 + 1 + 8 + 9) and using the same method to get 6 (2 + 4).
- `493193` should return `6` since the first time will get 29 (4 + 9 + 3 + 1 + 9 + 3) and using the same method for second time to get 11 (2 + 9), and so on the last time will get 2 (1 + 1).

## 05 Highest and Lowest

### Description

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

### Examples

- `high_and_low("1 2 3 4 5")` should return `5 1`.
- `high_and_low("1 2 -3 4 5")` should return `5 -3`.
- `high_and_low("1 9 3 4 -5")` should return `9 -5`.

Notes

- All numbers are valid `Int32`, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.
