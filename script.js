function firstWord(str) {
  // Trim leading and trailing spaces
  str = str.trim();
  
  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');
  
  // If no space is found or the string is empty, return the entire string
  if (spaceIndex === -1 || str === '') {
    return str;
  }
  
  // Return the substring from the start of the string up to the first space
  return str.substring(0, spaceIndex);
}

// Test cases
console.log(firstWord('see and stop')); // Output: 'see'
console.log(firstWord(' Hello World!')); // Output: 'Hello'
console.log(firstWord('12345')); // Output: '12345'
console.log(firstWord('')); // Output: ''
