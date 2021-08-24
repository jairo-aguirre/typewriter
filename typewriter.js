const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  // console.log(letter);
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}