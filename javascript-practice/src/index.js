let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}

console.log("text:::::", text);

let a = 10;
let b = 20;
let c = (a+=b);
console.log(c+a);
