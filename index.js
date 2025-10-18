/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   // Step 1: Map of Roman numerals
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  let total = 0;

  // Step 2: Loop through the string
  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i]);
    const next = romanMap.get(s[i + 1]);

    // Step 3: If current < next → subtract, else add
    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
};
