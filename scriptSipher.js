//Caesar Sipher
// a b c d e f g h i j k l m n o p q r s t u v w x y z
// shift number as input and text 
function CaesarSipher(number, text) {
   let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let numbers = ['1','2','3','4','5','6','7','8','9']
   let alphabet;
   text = [...text];
   for (let i = 0; i < text.length; i++){
      if (text[i] === ' ') {
         continue;
      }
      if (numbers.includes(text[i])) {
         if ((+text[i] + number) > 9) {
            text[i] = +text[i] + number - 9;
            continue;
         } else {
            text[i] = +text[i] + number;  
            continue;
         }
         
      }
      if (text[i] === text[i].toUpperCase()) {
         text[i] = text[i].toLowerCase();
         alphabet = text[i];
      }
      let IndexNow = alphabets.indexOf(text[i]);
      let indexShifted = IndexNow + number;
      if (indexShifted >=alphabets.length) {
         indexShifted = indexShifted - alphabets.length;
      } 
      if (alphabet === text[i]) {
           text[i] = alphabets.at(indexShifted).toUpperCase(); 
      } else {
         text[i] = alphabets.at(indexShifted);
         }
         
     
   }
   return text.join('');
}
// console.log(CaesarSipher(2, 'Ahmed2')); Encrypting using console node.js
let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', function (e) {
   e.preventDefault();
   let text = document.getElementById('text').value;
let encrypt = +document.getElementById('number').value;
   // console.log(text);
   result.innerHTML = CaesarSipher(encrypt,text);
   console.log(CaesarSipher(encrypt,text));
});