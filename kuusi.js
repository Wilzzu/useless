let len = 21

for(i = 0; i < len; i++) {
    console.log(" ".repeat(Math.ceil((len - (i + 1)) / 2)) + "*".repeat((len + (i + 1)) - len));
}
console.log(" ".repeat(len / 2) + "*".repeat(2))
console.log(" ".repeat(len / 2) + "*".repeat(2))
