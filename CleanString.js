function CleanString(s) {
  //Sorry! Misnamed var in a hurry!
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] != "#") stack.push(s[i]);
    else if (queue.length != 0) stack.pop();
  }
  return stack.join("");
}

console.log(CleanString("XyZ##@#####"));
