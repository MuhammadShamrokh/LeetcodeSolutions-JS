/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0)
        return false;

    return x == getOppoNum(x);
};

function getOppoNum(num){
    let oppoNum = 0;

    while(num != 0){
        oppoNum = oppoNum * 10 + (num % 10);
        num = Math.floor(num/10);
    }

    return oppoNum;
}