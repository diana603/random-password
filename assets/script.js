var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstquvxyz";
var upperAlpha = alphabet.toUpperCase();
var num = "0123456789"
var character = "!@#$%^&*?<>"



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var length = prompt("How long would you like this password to be?")
    console.log(length)
    if (length < 8) {
        alert("Please select a longer password")

    } else if (length > 128) {
        alert("Please select a shorter password")

    } else {
        console.log(length)
        var alphabet = prompt("Would you like a letter in your password? ")
        console.log(alphabet)
        var upperAlpha = prompt("would you like a capital letter? ")
        console.log(upperAlpha)
        var num = prompt("Would you like a number in your password? ")
        console.log(num)
        var character = prompt("Would you like a special character?")
        console.log(character)


    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);