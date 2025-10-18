/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let currentPrefix = strs[0];
    const length = strs.length;

    for(let i=1; i<length;i++){
      currentPrefix = findCommonPrefix(currentPrefix, strs[i]);

      if(currentPrefix.length == 0)
         break;
    }
    
    return currentPrefix;
};

function findCommonPrefix(str1, str2){
   let result = "";
   let length = Math.min(str1.length, str2.length);

   for(let i=0;i<length;i++){
      if(str1[i] == str2[i])
         result += str[i];
      else
         break;
   }

   return result;
}
