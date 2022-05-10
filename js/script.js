let num1= (window.prompt('Inserisci un numero'));
let num2= (window.prompt('Inserisci un secondo numero'));
num1=parseInt(num1);
num2=parseInt(num2);
document.getElementById('num1').innerHTML=num1;
console.log(num1);
document.getElementById('num2').innerHTML=num2;
console.log(num2);

let z; 

if(num1%2 == 0){
    z= 'sì'
} else{z='no'}
document.getElementById('even').innerHTML=z;
console.log(z);

if(num2%2 == 1){
    z= 'sì'
} else{z='no'}
document.getElementById('odd').innerHTML=z;
console.log(z);

z= num1 + num2;
document.getElementById('sum').innerHTML=z;
console.log(z);

z= num1 / num2;
document.getElementById('divide').innerHTML=z;
console.log(z);

