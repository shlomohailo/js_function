




function getMaxNumber(num1, num2) {
    let maxNumber;

    if (num1 > num2) {
        maxNumber = num1
    } else {
        maxNumber = num2
    }

    return maxNumber
}

console.log(getMaxNumber(10, 22));



function getSum(num1, num2) {
    return num1 + num2
}
console.log(getMaxNumber(5, 4));

function helloWorld(text) {
    console.log("hello world")

}
helloWorld()
helloWorld()
helloWorld()

function getsum(num1, num2) {

    var sum = num1 + num2;
    return sum;
}
console.log(getSum(2, 3))


function getmax(number1, number2) {
    var max;
    if (number1 > number2) {
        max = number1;
    }
    else {
        max = number2;
    }
    return max
}
console.log(getmax(8, 11))



function PositiveNumber(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum;

}
console.log(PositiveNumber(5))

var num1 = 0
var num2 = 1
function ChangeTwoValues() {

    num1 = 1
    num2 = 0

}
ChangeTwoValues();
console.log(num1);
console.log(num2);



function printHello() {
    console.log("hello")
}
printHello();
printHello();
printHello();
printHello();
printHello();


function minNumber(num1, num2) {
    var min;
    if (num1 < num2) {
        min = num1;
    }
    else {
        min = num2;
    }
    return min;
}

console.log(minNumber(2, 9));


function treeNambersMin(num1, num2, num3) {
    var min;
    if (num1 < num2 && num1 < num3) {
        min = num1;
    }
    if (num2 < num1 && num2 < num3) {
        min = num2;
    }
    if (num3 < num1 && num3 < num2) {
        min = num3;
    }
    return min;

}
console.log(treeNambersMin(7, 5, 9))



function treeMumbersSum(num1, num2, num3) {
    var avverge = 0;
    sum = (num1 + num2 + num3) / 3;
    return sum;
}

console.log(treeMumbersSum(5, 5, 10));

function getSum(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index]
    }
    return sum
}

console.log(getSum([1, 2, 3, 4]));

function getSum2(num1, num2, num3, num4) {
    // לא הגדרתי משתנה sum כי אני יכול גם להחזיר את הערך של החישוב ככה
    return num1 + num2 + num3 + num4
}
console.log(getSum2(1, 2, 3, 4));

function calcExponent(base, exponente) {
    return base ** exponente;
}



console.log(calcExponent(2, 3));




function numberSum(num) {
    var NumberStr = String(num);
    var sum = 0;
    for (var i = 0; i < NumberStr.length; i++) {
        var num2 = Number(NumberStr[i])
        sum = sum + num2;
    }
    return sum;
}
console.log(numberSum(123456))




function digit() {
    var num = parseInt(+prompt("sss"));
    while (num / 10 != 0) {
        var result = num % 10;
        console.log(result)

        num = (num - result) / 10;
    }

}
digit()




function sixumber(array) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] * 1 != Array[i]) {
            array[i] = "not_number"

        }

    }
}
conslesixumber(["sh", 2, "ksk"])


function stringS(mystring) {
    for (var i = 0; i < mystring.length; i++) {
        console.log(mystring[i] + [i]);
    }
    // return mystring;
}
stringS("hello");



function stringS(mystring) {
    var newstring = ""
    for (var i = 0; i < mystring.length; i++) {
        newstring += mystring + [i];
    }
    return newstring;
}
stringS("hello");


function stringNann(naan) {
    var newstring ="";
    for (var i = 0; i < naan.length; i++) {
        if (i % 2 == 0) {
            
             newstring +="2" ;

        }
        else {
            newstring += naan[i]; 
        }
        return newstring;
    }
}
stringNann("hello")




