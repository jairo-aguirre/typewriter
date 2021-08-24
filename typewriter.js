const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  // console.log(letter);
  setTimeout(() => {
    process.stdout.write(char); 
  }, 1000);
}