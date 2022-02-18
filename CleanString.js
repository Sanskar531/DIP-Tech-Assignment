function CleanString(s) {
  const queue = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] != "#") queue.push(s[i]);
    else if (queue.length != 0) queue.pop();
  }
  return queue.join("");
}

console.log(CleanString("XyZ##@#####"));
