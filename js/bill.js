// Bill Number
let billNo = localStorage.getItem("billNo");

if(billNo == null){
    billNo = 1;
}
else{
    billNo = parseInt(billNo) + 1;
}

localStorage.setItem("billNo", billNo);

document.getElementById("billNo").innerHTML = billNo;


// Date & Time
let today = new Date();

document.getElementById("date").innerHTML =
today.toLocaleDateString();

document.getElementById("time").innerHTML =
today.toLocaleTimeString();


// Customer Details
document.getElementById("customer").innerHTML =
localStorage.getItem("customerName");

document.getElementById("phone").innerHTML =
localStorage.getItem("phoneNumber");


// Bill Values
document.getElementById("subtotal").innerHTML =
localStorage.getItem("subtotal");

document.getElementById("gst").innerHTML =
localStorage.getItem("gst");

document.getElementById("roundoff").innerHTML =
localStorage.getItem("roundoff");

document.getElementById("total").innerHTML =
localStorage.getItem("total");


// Items
let tbody = document.getElementById("billItems");

function addRow(item, qty, amount){

    let row = `
        <tr>
            <td>${item}</td>
            <td>${qty}</td>
            <td>₹${amount}</td>
        </tr>
    `;

    tbody.innerHTML += row;
}


// Pizza
let pizza = localStorage.getItem("pizza");
let category = localStorage.getItem("category");

let pizzaPrice = 0;

if(pizza=="Normal" && category=="Veg")
    pizzaPrice = 200;

else if(pizza=="Normal" && category=="Non-Veg")
    pizzaPrice = 250;

else if(pizza=="Deluxe" && category=="Veg")
    pizzaPrice = 350;

else if(pizza=="Deluxe" && category=="Non-Veg")
    pizzaPrice = 400;

addRow(pizza+" "+category,1,pizzaPrice);


// Cheese
if(localStorage.getItem("cheese")=="true")
    addRow("Extra Cheese",1,40);


// Topping
if(localStorage.getItem("topping")=="true")
    addRow("Extra Topping",1,30);


// Water
let water = parseInt(localStorage.getItem("water"));

if(water>0)
    addRow("Water Bottle",water,water*20);


// Ketchup
let ketchup = parseInt(localStorage.getItem("ketchup"));

if(ketchup>0)
    addRow("Ketchup",ketchup,ketchup*5);


// Soft Drink
let soft = parseInt(localStorage.getItem("softdrink"));

if(soft>0)
    addRow("Soft Drink",soft,soft*30);


// Take Away
if(localStorage.getItem("takeaway")=="true")
    addRow("Take Away Cover",1,10);
function goDashboard() {

    // Clear bill data
    localStorage.removeItem("customerName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("pizza");
    localStorage.removeItem("category");
    localStorage.removeItem("cheese");
    localStorage.removeItem("topping");
    localStorage.removeItem("water");
    localStorage.removeItem("ketchup");
    localStorage.removeItem("softdrink");
    localStorage.removeItem("takeaway");
    localStorage.removeItem("subtotal");
    localStorage.removeItem("gst");
    localStorage.removeItem("roundoff");
    localStorage.removeItem("total");

    window.location.replace("../html/dashboard.html");
}

// Prevent the browser Back button from showing the old bill
window.history.pushState(null, "", window.location.href);

window.addEventListener("popstate", function () {
    window.history.pushState(null, "", window.location.href);
    window.location.replace("../html/dashboard.html");
});