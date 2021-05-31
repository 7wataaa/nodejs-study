"use strict";

const number = process.argv[2] || 0;

let result = 0;

for (let i = 0; i < number; i++) {
  result += i;
}

console.log(result);
