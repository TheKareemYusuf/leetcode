// Write a function to checks if a number is a palindrome and return true or false

var isPalindrome = function(x) {
    // Convert the integer to a string
    const x_str = x.toString();
    
    // Check if the string is equal to its reverse
    return x_str === x_str.split('').reverse().join('');
};


result = isPalindrome('121')
console.log(result);