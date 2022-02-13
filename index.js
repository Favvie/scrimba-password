let passwordEl1 = document.getElementById("password-el1");
let passwordEl2 = document.getElementById("password-el2");
let passwordEl3 = document.getElementById("password-el3");
let passwordEl4 = document.getElementById("password-el4");
let toolTipText1 = document.getElementById("tooltiptext1");
let toolTipText2 = document.getElementById("tooltiptext2");
let toolTipText3 = document.getElementById("tooltiptext3");
let toolTipText4 = document.getElementById("tooltiptext4");

let passwordLength = document.getElementById("password-length");
let possibleChar = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	0,
	",",
	".",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"{",
	"}",
	"\\",
	":",
	"?",
];

function randomChar() {
	let index = Math.floor(Math.random() * possibleChar.length);
	return possibleChar[index];
}

function generatePassword() {
	let str = "";
	let length = passwordLength.value;
	for (let count = 0; count < length; count++) {
		str = str + randomChar();
	}

	return str;
}

function inputPassword() {
	passwordEl1.value = generatePassword();
	passwordEl2.value = generatePassword();
	passwordEl3.value = generatePassword();
	passwordEl4.value = generatePassword();
}

passwordEl1.addEventListener("click", function () {
	navigator.clipboard.writeText(passwordEl1.value);
	// alert("Copied the text: " + passwordEl1.value);
	toolTipText1.textContent = "copied!";
});

passwordEl2.addEventListener("click", function () {
	navigator.clipboard.writeText(passwordEl2.value);
	// alert("Copied the text: " + passwordEl1.value);

	toolTipText2.textContent = "copied!";
});

passwordEl3.addEventListener("click", function () {
	navigator.clipboard.writeText(passwordEl3.value);
	toolTipText3.textContent = "copied!";
});

passwordEl4.addEventListener("click", function () {
	navigator.clipboard.writeText(passwordEl4.value);
	toolTipText4.textContent = "copied!";
});

function outFunc1() {
	// var tooltip = document.getElementById("myTooltip");
	toolTipText1.textContent = "Copy to clipboard";
}
function outFunc2() {
	// var tooltip = document.getElementById("myTooltip");
	toolTipText2.textContent = "Copy to clipboard";
}
function outFunc3() {
	// var tooltip = document.getElementById("myTooltip");
	toolTipText3.textContent = "Copy to clipboard";
}
function outFunc4() {
	// var tooltip = document.getElementById("myTooltip");
	toolTipText4.textContent = "Copy to clipboard";
}
