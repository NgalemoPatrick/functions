function maxOfTwoNumbers(x,y) {
    if (x >= y){
        return x;
            }else{
                return y;
            }
 }

console.log(maxOfTwoNumbers(3,9));

// Test x = y
console.log(maxOfTwoNumbers(10,10));

// function maxOfThree
function maxOfThree(x,y,z) {
    if(x > y && x > z){
        return x;
    }else if(x < y && x < z && z > y) {
        return z;
    }else{
        return y;
    }
}

// test
console.log(maxOfThree(1,2,3));
console.log(maxOfThree(4,2,3));
console.log(maxOfThree(1,5,3));

// Define isCharAVowel function

function isCharAVowel(ch) {
    if(ch === 'a' || ch === 'e' || ch === 'o' || ch === 'u' || ch === 'i'){
        return true;
    }else{
        return false;
    }
}

// test isCharAVowel did not treat upper case
console.log(isCharAVowel('o'));
console.log(isCharAVowel('w'));

// Define function expression

const sumArray = (arr)=> {
    let result = 1;
    arr.forEach((num) =>{
        result *= num;
    })
    return result;
}

// testing
console.log(sumArray([5,9,10]));

// define a function arg
const numArgs = (... args) =>{
    console.log(args.length);
}

//testing

numArgs("patrick","fabrice");

//Define a reverse string
const reverseString = (word) =>{
    // declare an array to store the character from the string
    const arrWord = [];
    //declare a variable to store the reserve string
    let reserveStr = " ";
    //loop trought the string
    for(i = 0; i < word.length; i++){
        arrWord[i] = word.charAt(i);
    }
    //reserve the array into string in the reserve order
    const reserveArr = arrWord.reverse();
    // reserveStr = reserveArr.join();
    // loop throught the reserve array to get the reserve string
    for(i = 0; i < reserveArr.length; i++){
        reserveStr += arrWord[i];
    }
    // console.log(reserveArr);
    console.log(reserveStr);

}
// testing
reverseString("Patrick");

