function numInput(num){
	var number = document.getElementById("display");
	display.value += num;
};
function clearDisplay(){
	var clear = document.getElementById("display");
	display.value = "";
};
function Calculate(){
	var cal = document.getElementById("display");
	display.value = eval(display.value);
};
function square(){
	var x = document.calculator.display.value;
	var sq = x*x;
	document.calculator.display.value = sq;
};
function cube(){
	var x = document.calculator.display.value;
	var cub = x*x*x;
	document.calculator.display.value = cub;
};
function squareroot(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.sqrt(x);
};
function sine(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.sin(x);
};
function cose(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.cos(x);
};
function tane(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.tan(x);
};
function fact() {
  var x = document.calculator.display.value;
  var i, f = 1;
  for (i = 1; i <= x; i++)
    f = f * i;
  document.calculator.display.value = f;
};
function delet(){
	var x = document.calculator.display.value;
	document.calculator.display.value = eval(x.slice(0,-1));
};
function pii(){
	var x = document.calculator.display.value;
	var pi = x * Math.PI; 
	document.calculator.display.value = pi;
};
function log(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.log(x);
};
function deg() {
  var x = document.calculator.display.value;
  var deg = x * (180 / 3.14);
  document.calculator.display.value = deg;
};
function exponent(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.exp(x);
};
function power(){
	var x = document.calculator.display.value;
	var y = document.calculator.display.value;
	document.calculator.display.value = Math.pow(x,y);
};
function rad() {
  var x = document.calculator.display.value;
  var rad = x * (3.14 / 180);
  document.calculator.display.value = rad;
};
function half(){
	var x = document.calculator.display.value;
	var half = 1/x;
	document.calculator.display.value = half;
};
function absolute(){
	var x = document.calculator.display.value;
	document.calculator.display.value = Math.abs(x);
};