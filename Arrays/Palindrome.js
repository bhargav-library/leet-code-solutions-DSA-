function isPalindrome(num) {
    if (num < 0) return false;

    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

/*Remember these three operations:

% 10 → Extract the last digit.

reversed * 10 + digit → Append that digit to the reversed number.

Math.floor(num / 10) → Remove the last digit from the original number.*/