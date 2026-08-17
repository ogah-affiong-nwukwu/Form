// we validate the form
// 1. we will take the elements that we want to validate into JavaScript
let form = document.getElementById(`form`)
let emailInput = document.getElementById(`email`)
let passwordInput = document.getElementById(`password`)
let emailError = document.getElementById(`emailError`)
let passwordError = document.getElementById(`passwordError`)
let button = document.getElementById(`btn`)
let formMessage = document.getElementById(`formMsg`)
let r1 = document.getElementById(`r1`)
let r2 = document.getElementById(`r2`)
let r3 = document.getElementById(`r3`)
let r4 = document.getElementById(`r4`)

// 2. validating the email: (a) in validating email, we look at format; we check if there is "@" and "." to know if its a valid email address. (b) we trim; trimming removes the empty spaces before and after writing the email address. (c) we make sure the user does not leave the field empty.
function checkEmail(){

    // we trim the email
    let emailValue = emailInput.value.trim()

    // we now check if the user put in an empty string(no data)
    // ("") is used to check if something is empty
    // if it is empty,...
    if(emailValue === ""){
        // ...this message will display from the empty paragraph tag in HTML that is for error message
        emailError.textContent = `Email is required`
        // ...and the border color will turn red from the setting in CSS
        emailInput.className = `invalid`
        // if the "if statement" is true we return a false value so everything will pause until it is corrected and we can moved to the next step
        return false
    }

    // we want to check if the email has an "@" symbol
    // "indexOf" is used to check the position of a value in an array:so we are using it to check if there is an "@" in the user email.
    // "||" represents "or" and "-1" means "not there/not found"
    if(emailValue.indexOf(`@`) === -1 || emailValue.indexOf(`.`) === -1){
        // if the above statement is true then we write an error message
        emailError.textContent = `Enter a valid email address`
        // ...and then the border color will turn red from the setting in CSS
        emailInput.className = `invalid`
        return false
    }

    // the below means don't dispaly anything if the two checks are passed meaning the user meets the standard of a correct email
    emailError.textContent = ""
    // then we will set it to valid after we are sure that the email the user put is correct
    emailInput.className = `valid`

}

// 3. Using helper functions to validate the paswword
// validating the password: (1)we check if the password meets the four listed requirement. (2)we check if the password field is empty

// uppercase helper function:to check if the password has uppercase
function hasUpperCase(text){

    // this is saying, if the password(text) the user writes is converted to lowercase and the coverted text(lowercase) is not the same as text(written password) that means there is an uppercase and it has been passed
    if(text.toLowerCase() !== text){
        // if the above is true, we return true:meaning everything is fine
        return true
    }else{
        // this means if the coverted text(lowercase) is the same thing as the text(password): that means everything is lowercase and there is no uppercase
        return false
    }
}

// lowercase helper function:to check if the password has lowercase
function hasLowerCase(text){

    // this is saying, if the password(text) the user writes is converted to uppercase and the coverted text(uppercase) is not the same as text(written password) that means there is an lowercase and it has been passed
    if(text.toUpperCase() !== text){
        // if the above is true, we return true:meaning everything is fine
        return true
    }else{
        // this means if the coverted text(uppercase) is the same thing as the text(password): that means everything is uppercase and there is no lowercase
        return false
    }
}

// number helper function: to check if the password has a number
function hasNumber(text){
    // when creating a while loop, we have to initialize it first before setting a condition
    let i = 0;

    // this is telling i to keep looping/going as long as it is smaller than the text length and keep extracting a character out of the password
    while(i < text.length){
        
        // tells i to keep running and keep checking character of the password. remember javascript treats strings as arrays(incase the value it brings out is an alphabet)
        let ch = text[i]

        // we have to check the extracted data is a number to confirm if it meets the standard
        // so we will check if the character is between 0 and 9 and it will tell if it is a number
        if(ch >= `0` && ch <= `9`){
            // if it is a number...; once it is confirmed that there is a number this function ends here and move to the next part
            return true
        }

        // this is i doing an increment of 1 as the loop runs. this is written towards the end of the loop(the while loop)
        i++

    }

    // if the text(password) does not contain a number. This is will only activate if the "return true" above is not activated.
    return false
}

// checking the password: we are going to combine the helper functions to activate the password requirements
function checkPassword(){

    let passwordValue = passwordInput.value

    // we check if passwordValue length is >= 8
    if(passwordValue.length >= 8){

        // if the password is >= 8 then we use "req ok" in the CSS code(changing it to green)
        r1.className = `req ok`
        // if it is not >= 8, then we leave it at "req"
    }else{
        r1.className = `req`
    }

    // we check for uppercase
    if(hasUpperCase(passwordValue)){
        // if the password has uppercase, then we use `req ok`
        r2.className = `req ok`
    }
}