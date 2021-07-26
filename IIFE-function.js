//odd numbers in an array

(function () {
    var userinput = [1, 2, 3, 4, 5];
    var arr = [];
    for (i = 0; i < userinput.length; i++) {
        if (userinput[i] % 2 != 0) {
            arr.push(userinput[i]);
        }
    }
    console.log(arr);
    // return arr;
})();

//strings

(function(){
    var str = "geek for geeks"
    
    console.log(
    
    str.split(' ')
       .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
       .join(' ')
    
    )
    })
    ();
   

//sumNumbers
(function(){
    var arr = [1, 2, 3];
    console.log(arr[0] + arr[1] + arr[2]);
})();

//return all the primenumbers

(function () {
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
})();


//palindroms
(function(){
    var arr = [11, 22, 33];
    
    for (i = 0; i < arr.length; i++) {
        var narr = [];
        arr[i] = arr[i] + "";
        narr.push(arr[i].split("").reverse().join(""));
        if (narr == arr[i]) {
            console.log(arr[i]);
        }
    }
    })();

    //median of two arrays
(function(){
    var arr1 = [7, 8, 9];
    var arr2 = [4, 5, 6];
    var newarray = [];
    for (i = 0; i < arr1.length; i++) {
        newarray.push(arr1[i]);
    }
    for (j = 0; j < arr2.length; j++) {
        newarray.push(arr2[j]);
    }
    newarray.sort();
    var result = (newarray[(newarray.length / 2) - 1] + newarray[(newarray.length / 2)]) / 2;
    console.log(result);
    })
    ();

    //remove duplicates

(function(){
    var arrx=[1,2,1,2,3];
    for(i=0;i<arrx.length;i++){
        var dummy=arrx[i];
        var org=[];
        if(dummy!=arrx[i+1]){
    org.push(dummy);
        }
    }
    console.log(org);
    })();

    //rotate an array
(function () {
    var array=[1,3,5];
    var k=3;
    for(k=0;k<3;k++){
    
        var newarray1 = [];
        for (i = array.length; i > 0; i--) {
    
            newarray1.push(array[i - 1]);
        }
        console.log(newarray1.join(","));
    }
    })
    ();