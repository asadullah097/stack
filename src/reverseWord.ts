function reverseWords(str: any) {
  let reverseStack = "";
  console.log(str);

  for (let i = str.length - 1; i >= 0; i--) {
    let ele = str[i];
    reverseStack += ele;
  }
  return reverseStack;
}
console.log(reverseWords("asad"));
