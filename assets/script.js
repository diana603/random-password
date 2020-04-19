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
        var alphabet = confirm("Would you like a letters in your password? ")
        console.log(alphabet)
        var upperAlpha = confirm("would you like a capital letters? ")
        console.log(upperAlpha)
        var num = confirm("Would you like a numbers in your password? ")
        console.log(num)
        var character = confirm("Would you like a special characters?")
        console.log(character)
    }
    var userObject = {
        length: length,
        lowerCase: alphabet,
        upperCase: upperAlpha,
        num: num,
        character: character,
    }
    console.log(userObject);

    var randomPassword = getRandom(userObject)

    return randomPassword
}

function getRandom(userObject) {
    var combinedPassword = ""
    if (userObject.lowerCase) {
        combinedPassword += alphabet;
    }

    if (userObject.upperAlpha) {
        combinedPassword += upperAlpha;
    }

    if (userObject.num) {
        combinedPassword += num;
    }

    if (userObject.character) {
        combinedPassword += character;
    }

    var password = "";

    for (var i = 1; i <= userObject.length; i++) {

        console.log("for loop ", i);

        var randomCharactNumber = Math.floor(Math.random() * combinedPassword.length);

        password += combinedPassword.charAt(randomCharactNumber);

    }
    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
