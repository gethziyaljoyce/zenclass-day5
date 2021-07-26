//odd numbers in an array

var oddNumbers = () =>{
    var userinput = [1, 2, 3, 4, 5];
    var arr = [];
    for (i = 0; i < userinput.length; i++) {
        if (userinput[i] % 2 != 0) {
            arr.push(userinput[i]);
        }
    }
    console.log(arr);
}
oddNumbers();


//strings
var str = "geek for geeks"

console.log(

str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')

)

//sumNumbers

var sumNumbers =  ()=> {
    var arr = [1, 2, 3];
    console.log(arr[0] + arr[1] + arr[2]);
}
sumNumbers();


//return all the primenumbers

var pn =  ()=> {
    var num = [2, 3, 4];

    var arr = [];
    for (i = 0; i < num.length; i++) {
        var count = 0;
        for (j = 1; j <= num[i]; j++)
            if (num[i] % j == 0) {
                count++;
            }
        if (count == 2) {
            arr.push(num[i]);
        }
    }

    console.log(arr);
}
pn();

//palindroms
var palindrome=()=>{
var arr = [11, 22, 33];

for (i = 0; i < arr.length; i++) {
    var narr = [];
    arr[i] = arr[i] + "";
    narr.push(arr[i].split("").reverse().join(""));
    if (narr == arr[i]) {
        console.log(arr[i]);
    }
}
}
palindrome();