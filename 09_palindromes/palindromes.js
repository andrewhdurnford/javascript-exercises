const palindromes = function (string) {
  return (
    string
      .toLowerCase()
      .replace(/[^\w\s\']|_/g, "")
      .replace(/\s+/g, "") ===
    string
      .toLowerCase()
      .replace(/[^\w\s\']|_/g, "")
      .replace(/\s+/g, "")
      .split("")
      .reverse()
      .join("")
  );
};

// Do not edit below this line
module.exports = palindromes;
