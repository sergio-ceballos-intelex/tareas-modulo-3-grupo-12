let number = 1;

for (let number = 1; number <= 2000; number++) {
  const numStr = String(number);
  if (numStr.startsWith("2")) {
    console.log(numStr);
  }
}
