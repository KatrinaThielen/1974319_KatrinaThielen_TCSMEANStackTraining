interface Item {
    item:string;
    price:number;
}

//cart array to store cartItems objects!
var cart:Array<any> = [];
var showCurrent:Array<string> = [];
var count:number = 0;
let totalCost:number = 0;
let fruitMango:Item={item:"Mango", price:7};
let fruitLemon:Item={item:"Lemon", price:6};
let fruitCherry:Item={item:"Cherry", price:4};
let fruitPom:Item={item:"Pomegranate", price:5};
let fruitOrange:Item={item:"Orange", price:3};
let fruitApple:Item={item:"Apple", price:1};
let cost:number;

function addMango(){
    addItem(fruitMango, cart);    //adding fruitMango item to cart array!
}
function addLemon (){
    addItem(fruitLemon, cart);    //adding fruitLemon item to cart array!
}
function addCherry (){
    addItem(fruitCherry, cart);    //adding fruitCherry item to cart array!
}
function addPom (){
    addItem(fruitPom, cart);    //adding fruitPom item to cart array!
}
function addOrange (){
    addItem(fruitOrange, cart);    //adding fruitOrange item to cart array!
}
function addApple (){
    addItem(fruitApple, cart);    //adding fruitApple item to cart array!
}

function addItem (fruit, cart){
    console.log('ADDING THIS ITEM TO CART : ', fruit);
    cart.push(fruit);
    showCurrent.push(fruit.item);
    console.log('CART NOW CONTAINS : ',cart);
    count++;    //debugging purpose.
    showCurrentCartItems(showCurrent);
    localStorage.setItem('currentCart',JSON.stringify(showCurrent));
    localStorage.setItem('sessionCart', JSON.stringify(cart));
    console.log('AFTER STORING JSON, CART LOOKS LIKE : ',cart);
    localStorage.setItem('count', JSON.stringify(count));


}

function showCurrentCartItems (show){
    document.getElementById("name").innerHTML = show.toString();
    console.log('This is showCurrent in show current items!! ', show);
    //console.log('This is cart in show current items!! ', cart);
    //  document.getElementById('itemHere').innerHTML=cart.item;

}

function displayCart(cart){
    var cartArray = localStorage.getItem('sessionCart');
    console.log('CART STRING!! RETRIEVED : ',cartArray);
    var cartInfo = JSON.parse(cartArray);
    console.log('CART JSON : ',cartInfo);
    cartInfo.forEach(cartItem  => {console.log(cartItem)

        var table = document.getElementById("allCart")
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow();

        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = cartItem.price;

        var cell2 = newRow.insertCell(0);
        cell2.innerHTML = cartItem.item;

    });

    var table = document.getElementById("allTotal")
    var body = table.getElementsByTagName("thead")[0];
    var newRow = body.insertRow();
    
    cost = calculateTotal(cartInfo);

    var newCell = newRow.insertCell(0);
    newCell.innerHTML = cost.toString();
    //totalCost = calculateTotal(cartInfo);   //displays the cart total!
    //console.log();
   // insert(cartInfo); // html display hopefully..
}

function upload(){
var current =  JSON.parse(localStorage.getItem('currentCart'));
if (current){
    showCurrentCartItems(current);
    showCurrent = current;
}
var counter =  JSON.parse(localStorage.getItem('count'));
if (count){
    count = counter;
}
var information =  JSON.parse(localStorage.getItem('sessionCart'));
if (information){
    cart = information;
}
}

function checkout(){
    let url = 'checkout.html';   
    open(url);
}

function backHome(){
    let url = 'shoppingCart.html';
    open(url);
}
function insert (cartInfo){
    cartInfo.forEach(cartItem => {
        document.getElementById('itemName').innerHTML=cartInfo.item;
		document.getElementById("itemCost").innerHTML=cartInfo.price;
    });
}

function calculateTotal (cartInfo){

    cartInfo.forEach(Item => {
        var cost = Item.price;
        console.log('cost is: ',cost);
        totalCost = totalCost + parseInt(cost);
        console.log('Total Cost is now: ',totalCost);
    })

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