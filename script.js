let value = prompt("inter value hear");

let d = palindrome(value);

console.log(d);

function palindrome(){
    let change = value.split('');

    let revorse = change.reverse();

    let string = revorse.join('');
    
    if (value == string){
        console.log("palindrome");
    }else{
        console.log("not palindrome");
    }
}
