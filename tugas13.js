functionBuah = () => {
  let buah = ["pisang", "jeruk"];
  console.log(buah);
  buah.unshift("apel", "mangga");
  return buah;
};
console.log(functionBuah());
