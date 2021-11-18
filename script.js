// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    let new_string = ""
    for(let i = 0; i < string.length; i++){
        new_string += (string[string.length-i-1]);
    }
    return new_string;
}

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    let new_string = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            new_string += string[i].toUpperCase();
        }
        else { 
            new_string += string[i].toLowerCase()
        }
    }
    return new_string; 
}

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    let cArray = array.map(function(t){
        t = t - 32;
        return t * (5/9)
    });
    return cArray;
}


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    let passArray = array.map(function(element){ 
        if(element >= 75){
            return true; 
        } 
        return false; 
    })
    return passArray;
}

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let numbers = [];
    for(let i = 0; i < cardinalNumbers.length; i++){
        let phrase = "";
        phrase += cardinalNumbers[i];
        phrase += " is ";
        phrase += germanNumbers[i];
        numbers[i] = phrase;
    }
    return numbers;
}

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let primes = numbers.filter(function(num){
        if(num == 1){
            return;
        }
        if(num == 2){
            return true;
        }
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    });
    return primes;
}

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function printer(){
    for(let v = 1; v <=100; v++){
        if((v % 3 != 0) && (v % 5 != 0)){
            console.log(v)            
        }
        else if ((v % 3 == 0) && (v % 5 == 0)){
            console.log("CSC225 RULES I LOVE JAVASCRIPT")
        }
        else if((v % 3 == 0)){
            console.log("CSC225 RULES")
        }
        else if((v % 5 == 0)){
            console.log("I LOVE JAVASCRIPT")
        }
    }
}

/* 
Tests:
console.log(reverseThisString("Hello"));
console.log(swapCase("Hello World"));
console.log(toCelcius([23, 32, 41, 50, 59]));
console.log(passOrFail([20, 30, 50, 80, 90, 100]))
console.log(germanNumbers());
console.log(returnPrimeNumbers());
printer();
*/

/*
Output: 
olleH
hELLO wORLD
[ -5, 0, 5, 10, 15 ]
[ false, false, false, true, true, true ]
[ '2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs' ]
[ 2, 3, 5, 7, 11, 13 ]
1
2
CSC225 RULES
4
I LOVE JAVASCRIPT
CSC225 RULES
7
8
CSC225 RULES
I LOVE JAVASCRIPT
11
CSC225 RULES
13
14
CSC225 RULES I LOVE JAVASCRIPT
16
17
CSC225 RULES
19
I LOVE JAVASCRIPT
CSC225 RULES
22
23
CSC225 RULES
I LOVE JAVASCRIPT
26
CSC225 RULES
28
29
CSC225 RULES I LOVE JAVASCRIPT
31
32
CSC225 RULES
34
I LOVE JAVASCRIPT
CSC225 RULES
37
38
CSC225 RULES
I LOVE JAVASCRIPT
41
CSC225 RULES
43
44
CSC225 RULES I LOVE JAVASCRIPT
46
47
CSC225 RULES
49
I LOVE JAVASCRIPT
CSC225 RULES
52
53
CSC225 RULES
I LOVE JAVASCRIPT
56
CSC225 RULES
58
59
CSC225 RULES I LOVE JAVASCRIPT
61
62
CSC225 RULES
64
I LOVE JAVASCRIPT
CSC225 RULES
67
68
CSC225 RULES
I LOVE JAVASCRIPT
71
CSC225 RULES
73
74
CSC225 RULES I LOVE JAVASCRIPT
76
77
CSC225 RULES
79
I LOVE JAVASCRIPT
CSC225 RULES
82
83
CSC225 RULES
I LOVE JAVASCRIPT
86
CSC225 RULES
88
89
CSC225 RULES I LOVE JAVASCRIPT
91
92
CSC225 RULES
94
I LOVE JAVASCRIPT
CSC225 RULES
97
98
CSC225 RULES
I LOVE JAVASCRIPT
*/