var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;

//Get the element that has ana id of usersign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Get the element that has ana id of tiles then update its content
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has ana id of subtotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get the element that has ana id of shipping then update its contents
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

//Get the element that has ana id of grandtotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;



