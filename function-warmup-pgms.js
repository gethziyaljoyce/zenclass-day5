//addfive function

var addFive = function (num) {
    return 5 + num;
}
var result = addFive(5);
var result1 = addFive(0);
var result2 = addFive(-5);
console.log(result);
console.log(result1);
console.log(result2);

//getOpposite-function

var getOpposite = function (x) {
    if (x % 1 == 0) {
        return x - (2 * x);
    } else {
        return -1;
    }
}
var result = getOpposite(5);
var result1 = getOpposite(0);
var result2 = getOpposite(-5);
var result3 = getOpposite("5a");
var result4 = getOpposite(5.5);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//toSeconds-function

var toSeconds = function (min) {
    return min * 60;
}
var result = toSeconds(5);
console.log(result);

//toInteger function

var toInteger = function (num) {
    return parseInt(num);
}
var result = toInteger("5");
console.log(result);

//nextNumber-function

var myint = 0;
function nextNumber(myint) {
    return myint + 1;
}
var myNextint = nextNumber(2);
console.log(myNextint);

//return 1st element

var arr = [5, 2, 3];
function getFirstelement(arr) {
    return arr[0];
}
var data = getFirstelement(arr);
console.log(data);

//converts hour into seconds

var hour = 2;
function hourTosecond(hour) {
    return hour * 3600;
}
var seconds = hourTosecond(hour);
console.log(seconds);

//perimeter of tectangle

function findPerimeter(l, b) {
    return l * b;
}
var perimeter = findPerimeter(10, 8);
console.log(perimeter);

//compare two numbers

function compare(x, y) {
    if ((x + y) < 100) {
        return true;
    } else {
        return false;
    }
}
var result = compare(30, 50);
console.log(result);

//find remainder


function getRemainder(a, b) {
    return a % b;
}
var result = getRemainder(1, 3);
console.log(result);

//count legs

function totalLegs(x, y, z) {
    return (2 * x) + (4 * y) + (4 * z);
}
var legs = totalLegs(2, 3, 5);
console.log(legs);

//frames

function frames(q, r) {
    return (q * r * 60);
}
var minutes = frames(10, 25);
console.log(minutes);

//check if divisible by 5

function bydiv(num) {
    if (num % 5 == 0) {
        return true;
    } else {
        return false;
    }
}
var result = bydiv(55);
console.log(result);

//isEven

function isEven(a) {
    console.log(a % 2);
    if (a % 2 == 0) {
        return true;
    } else if (a % 2 == NaN) {
        return -1;
    } else {
        return false;
    }
}
var result = isEven("3h");
console.log(result);

//areBothOdd

function areBothOdd(x, y) {
    if (x % 2 != 0 && y % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
var result = areBothOdd(1, 3);
console.log(result);

//getFullName

function getFullName(x, y) {
    return x + " " + y;
}
var fullName = getFullName("GUVI", "GEEK");
console.log(fullName);

//getLengthOfword

function getLengthOfword(a) {
    if (typeof (a) == "string") {
        var word = a.split("");
        return word.length;
    } else {
        return -1;
    }
}
var result = getLengthOfword(1);
console.log(result);

//isSameLength

function isSameLength(word1, word2) {
    if (word1.length == word2.length) {
        return true;
    } else {
        return false;
    }
}
var result = isSameLength("GUVI", "GEEK");
console.log(result);

//distance


function distance(x1, y1, x2, y2) {
    var obj1 = {};
    obj1.xvalue = x2 - x1;
    obj1.yvalue = y2 - y1;
    return obj1;

}
var result = distance(100, 100, 400, 300);
console.log(result);

//getNthElement

function getNthElement(arr, n) {
    if (arr.lengh == 0) {
        return 0;
    } else {
        return arr[n];
    }
}
var result = getNthElement([1, 3, 5, 8], 3);
console.log(result);

//getLastElement

function getLastElement(arr) {
    var l = arr.length;
    if (arr.length == 0) {
        return -1;
    } else {
        return arr[l - 1];
    }
}
var result = getLastElement([1, 2, 3, 4]);
console.log(result);

//getProperty

var markObj = {
    mark: 80
};
function getProperty(obj, key) {

    return obj[key];
}
var ans = getProperty(markObj, "mark");
console.log(ans);

//addProperty

var markobj = {
    mark: 80
}
function addProperty(obj, key) {
    obj.key = "Tamil";
    return obj;
}
var result = addProperty(markobj, "subject");
console.log(result);

//remove property

var list = { name1: "joyce", name2: "gethziyal" }
function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}
var remove = removeProperty(list, "name2");
console.log(remove);

//count positive sum negative

var userInput = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var cpsn = function (userInput) {
    var count = 0;
    var sum = 0;
    var arr = [];
    for (i = 0; i < userInput.length; i++) {
        if (userInput[i] > 0) {
            count++;
        } else {
            sum = sum + userInput[i];
        }
    }
    arr.push(count);
    arr.push(sum);
    return arr;
}
var ans = cpsn(userInput);
console.log(ans);

//powersOfTwo

var num = 3;
function powerOfTwo(x) {
    var arr = [];
    for (i = 0; i <= num; i++) {
        arr.push(Math.pow(2, i));
    }
    return arr;
}
var power = powerOfTwo(num);
console.log(power);

//maximum number

var arr = [2, 3, 4];
var maxNumber = function (arr) {
    var greatestNum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > greatestNum) {
            greatestNum = arr[i];
        }
    }
    return greatestNum;
}
var ans = maxNumber(arr);
console.log(ans);

//print 100 primenumbers
function primeNums() {
    var primeCount = 0;
    var primenumbers = [];
    for (j = 2; primeCount < 100; j++) {
        var count = 0;
        for (i = 0; i < j; i++) {
            if (j % i == 0) {
                count++;
            }
        }
        if (count <= 2) {
            primeCount++;
            primenumbers.push(j);
        }
    }
    return primenumbers;
}
var result = primeNums();
console.log(result);



//nprime numbers from certain number

function primes(n, start) {
    var primeCount = 0;
    var primenumbers = [];
    for (j = start; primeCount < n; j++) {
        var count = 0;
        for (i = 0; i < j; i++) {
            if (j % i == 0) {
                count++;
            }
        }
        if (count <= 2) {
            primeCount++;
            primenumbers.push(j);
        }
    }
    return primenumbers;
}
var result = primes(10, 100);
console.log(result);

//reverse string

var str = ("Javascript").split("");
var reverseStr = function (str) {
    var str1 = [];
    for (i = str.length; i > 0; i--) {

        str1.push(str[i - 1]);
    }
    return str1;
}
var string = reverseStr(str);
console.log(string.join(""));

//merge arrays

var arr1 = [1, 2, 3];
var arr2 = [6, 5, 4];
var ar = function (arr1, arr2) {
    var newarr = [];
    for (i = 0; i < arr1.length; i++) {
        newarr.push(arr1[i]);
    }
    for (j = 0; j < arr2.length; j++) {
        newarr.push(arr2[j]);
    }
    return newarr;
}
var newar = ar(arr1, arr2);
console.log(newar);

//sumCSV

var num = "1,2,3,4";
var num1 = num.split(",");
function sumCSV(num1) {
    var sum = 0;
    for (i = 0; i < num1.length; i++) {
        sum = sum + (+num1[i]);
    }
    return sum;
}
var sum = sumCSV(num1);
console.log(sum);