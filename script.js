function firstWord(str) {
    // If the string is empty or does not contain any space, return the entire string
    if (!str || !str.includes(' ')) {
        return str;
    }
    
    // Otherwise, find the index of the first space and return the substring up to that index
    return str.substring(0, str.indexOf(' '));
}

// Example usage:
function firstWord(s) {
  // your code here
  if (!s || !s.includes(' ')) {
      return s;
  }
  
  return s.substring(0, s.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
