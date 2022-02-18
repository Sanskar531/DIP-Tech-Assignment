function CleanString(s) {
  /*
    Used Standard JS array to recreate a stack 
    Pushed alphabets onto the stack and removed the last element when "#"
    is encountered 
  */
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] != "#") stack.push(s[i]);
    else if (stack.length != 0) stack.pop();
  }
  return stack.join("");
}

console.log(CleanString("XyZ##@#####"));
