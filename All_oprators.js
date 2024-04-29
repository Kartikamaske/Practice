let text1 = "20";
let text2 = "40";
let result = text1 < text2;
// console.log(result);

// string addition
let text3 = text1 + " " + text2;
// console.log("String Addition " +text3);

// num+string=string
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
// console.log(z)



// logical oprators
let isSunny = true;
let isWarm = true;

// Using AND
if (isSunny && isWarm) {
  console.log("It's a sunny and warm day!");
} else {
  console.log("The weather is not ideal.");
}

// Using OR
let hasRaincoat = false;
if (isSunny || hasRaincoat) {
  console.log("You might not need a raincoat today!");
} else {
  console.log("Consider bringing a raincoat, just in case.");
}

// Using NOT
let hasUmbrella = false;
if (!hasUmbrella) {
  console.log("You might want to bring an umbrella with you.");
} else {
  console.log("You have an umbrella, you're good to go!");
}
