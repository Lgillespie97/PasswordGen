//validate to make sure at least or more of the selection criteria is selected.
function validateCriteria()
{
    if(useUpperCase() == false && useLowerCase() == false && useNumbers() == false && useSpecialCharacters() == false)
    {
        alert("Error: Must select one or more character types");

        return false;
    }

    return true;
}

//function to determine if the uppercase checkbox is checked
function useUpperCase()
{
    var flag = document.getElementById("uppercase").checked; 
    
    return flag;
}

//function to determine if the lowercase checkbox is checked
function useLowerCase()
{
    var flag = document.getElementById("lowercase").checked;

    return flag;
}

//function to determine if the use numeric characters checkbox is checked
function useNumbers()
{
    var flag = document.getElementById("numbers").checked;
    
    return flag;
}
 
//function to determine if the use special characters checkbox is checked
function useSpecialCharacters()
{
    var flag = document.getElementById("specialcharacters").checked;
    
    return flag;
}

//function to determin the value of the passwordlength field and validate the range.
function getPasswordLength()
{
    var passwordLength = Number(document.getElementById("passwordLength").value);

    if(passwordLength < 8 || passwordLength > 128)
    {
        alert("Error: Invalid password length. Reseting to 8 characters");
        
        passwordLength = 8;

        document.getElementById("passwordLength").value = passwordLength;
     }

    return passwordLength;
}

function updatePasswordRange()
{
    var passwordLength = getPasswordLength();

   document.getElementById("passwordLengthRange").value = passwordLength;
}

function updatePasswordLength()
{
    var passwordLength = Number(document.getElementById("passwordLengthRange").value);

    document.getElementById("passwordLength").value = passwordLength;
}

function generatePassword()
{
    var passwordLength = Number(getPasswordLength());
    
    var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var specialCharacters = '@#$!';

    var characters = '';

    if(useUpperCase())
    {
        characters = characters + upperCaseCharacters;    
    }

    if(useLowerCase())
    {
        characters = characters + lowerCaseCharacters;
    }

    if(useNumbers())
    {    
        characters = characters + numbers;       
    }

    if(useSpecialCharacters())
    {
           characters = characters + specialCharacters;           
    }

    var generatedPassword = '';

    for (i = 0; i < passwordLength; i++) 
    { 
        var char = Math.floor(Math.random() * characters.length); 
        
        generatedPassword += characters.charAt(char); 
    } 

    return generatedPassword;
}

function getGeneratedPassword()
{
    if(!validateCriteria())
        return;

    var generatedPassword = generatePassword();
    
    //alert(generatedPassword);
    
    document.getElementById("generatedpassword").value = generatedPassword;
}

function copyGeneratedPassword()
{
    var generatedPassword = document.getElementById("generatedpassword");

    generatedPassword.select();

    document.execCommand("copy");

    alert("Copied Password: " + generatedPassword.value);
}