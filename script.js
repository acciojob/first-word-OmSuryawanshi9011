function firstWord(s) {
  // your code here
  if (!s) {
    // If the string is empty, return it
    return s;
  }
  
  // Trim leading and trailing spaces
  s = s.trim();
  
  // Find the first space in the trimmed string
  const spaceIndex = s.indexOf(" ");
  
  if (spaceIndex === -1) {
    // If no space is found, return the entire string
    return s;
  }
  
  // Return the substring up to the first space
  return s.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

