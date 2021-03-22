//cart array to store cartItems objects!
var cart = [];
var showCurrent = [];
var count = 0;
var totalCost = 0;
var fruitMango = { item: "Mango", price: 7 };
var fruitLemon = { item: "Lemon", price: 6 };
var fruitCherry = { item: "Cherry", price: 4 };
var fruitPom = { item: "Pomegranate", price: 5 };
var fruitOrange = { item: "Orange", price: 3 };
var fruitApple = { item: "Apple", price: 1 };
var cost;
function addMango() {
    addItem(fruitMango, cart); //adding fruitMango item to cart array!
}
function addLemon() {
    addItem(fruitLemon, cart); //adding fruitLemon item to cart array!
}
function addCherry() {
    addItem(fruitCherry, cart); //adding fruitCherry item to cart array!
}
function addPom() {
    addItem(fruitPom, cart); //adding fruitPom item to cart array!
}
function addOrange() {
    addItem(fruitOrange, cart); //adding fruitOrange item to cart array!
}
function addApple() {
    addItem(fruitApple, cart); //adding fruitApple item to cart array!
}
function addItem(fruit, cart) {
    console.log('ADDING THIS ITEM TO CART : ', fruit);
    cart.push(fruit);
    showCurrent.push(fruit.item);
    console.log('CART NOW CONTAINS : ', cart);
    count++; //debugging purpose.
    showCurrentCartItems(showCurrent);
    localStorage.setItem('currentCart', JSON.stringify(showCurrent));
    localStorage.setItem('sessionCart', JSON.stringify(cart));
    console.log('AFTER STORING JSON, CART LOOKS LIKE : ', cart);
    localStorage.setItem('count', JSON.stringify(count));
}
function showCurrentCartItems(show) {
    document.getElementById("name").innerHTML = show.toString();
    console.log('This is showCurrent in show current items!! ', show);
    //console.log('This is cart in show current items!! ', cart);
    //  document.getElementById('itemHere').innerHTML=cart.item;
}
function displayCart(cart) {
    var cartArray = localStorage.getItem('sessionCart');
    console.log('CART STRING!! RETRIEVED : ', cartArray);
    var cartInfo = JSON.parse(cartArray);
    console.log('CART JSON : ', cartInfo);
    cartInfo.forEach(function (cartItem) {
        console.log(cartItem);
        var table = document.getElementById("allCart");
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow();
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = cartItem.price;
        var cell2 = newRow.insertCell(0);
        cell2.innerHTML = cartItem.item;
    });
    var table = document.getElementById("allTotal");
    var body = table.getElementsByTagName("thead")[0];
    var newRow = body.insertRow();
    cost = calculateTotal(cartInfo);
    var newCell = newRow.insertCell(0);
    newCell.innerHTML = cost.toString();
    //totalCost = calculateTotal(cartInfo);   //displays the cart total!
    //console.log();
    // insert(cartInfo); // html display hopefully..
}
function upload() {
    var current = JSON.parse(localStorage.getItem('currentCart'));
    if (current) {
        showCurrentCartItems(current);
        showCurrent = current;
    }
    var counter = JSON.parse(localStorage.getItem('count'));
    if (count) {
        count = counter;
    }
    var information = JSON.parse(localStorage.getItem('sessionCart'));
    if (information) {
        cart = information;
    }
}
function checkout() {
    var url = 'checkout.html';
    open(url);
}
function backHome() {
    var url = 'shoppingCart.html';
    open(url);
}
function insert(cartInfo) {
    cartInfo.forEach(function (cartItem) {
        document.getElementById('itemName').innerHTML = cartInfo.item;
        document.getElementById("itemCost").innerHTML = cartInfo.price;
    });
}
function calculateTotal(cartInfo) {
    cartInfo.forEach(function (Item) {
        var cost = Item.price;
        console.log('cost is: ', cost);
        totalCost = totalCost + parseInt(cost);
        console.log('Total Cost is now: ', totalCost);
    });
    return totalCost;
}
/*
var basket:string[];
var info:number[];

function cart(item: string, cost:number){
    console.log("item is "+item);
    console.log("cost of this is "+cost);
}

cart('potato', 23);

*/ 
