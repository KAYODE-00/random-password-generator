const paasswordBox = document.getElementById("password");
const lenght = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '$!@#%^&*+_-<>,.?/|`~()[]{}';

const createPassword = document.getElementById('passG')
const allChars = upperCase + lowerCase + numbers + symbols;
const copy = document.getElementById('copy');



createPassword.addEventListener('click',()=>{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    console.log( password += upperCase[Math.floor(Math.random() * upperCase.length)]);
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];


    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    paasswordBox.value = password;
});


copy.addEventListener('click',()=>{
    paasswordBox.select();
    document.execCommand('copy');
    window.alert(`you copied "${paasswordBox.value}" as a password` );
})