
const price = {
    normalVeg: 200,
    normalNonVeg: 250,
    deluxeVeg: 350,
    deluxeNonVeg: 400,
    cheese: 40,
    topping: 30,
    water: 20,
    ketchup: 5,
    softDrink: 30,
    takeaway: 10,
    gst: 5
};
function calculateBill() {
    let subtotal = 0;
    if (document.getElementById("normal").checked &&
        document.getElementById("veg").checked) {
        subtotal += price.normalVeg;
    }
    else if (document.getElementById("normal").checked &&
        document.getElementById("nonveg").checked) {
        subtotal += price.normalNonVeg;
    }
    else if (document.getElementById("deluxe").checked &&
        document.getElementById("veg").checked) {
        subtotal += price.deluxeVeg;
    }
    else if (document.getElementById("deluxe").checked &&
        document.getElementById("nonveg").checked) {
        subtotal += price.deluxeNonVeg;
    }
    if (document.getElementById("cheese").checked) {
        subtotal += price.cheese;
    }
    if (document.getElementById("topping").checked) {
        subtotal += price.topping;
    }

    let water = parseInt(document.getElementById("water").value) || 0;
    subtotal += water * price.water;

    let ketchup = parseInt(document.getElementById("ketchup").value) || 0;
    subtotal += ketchup * price.ketchup;

    let softDrink = parseInt(document.getElementById("softdrink").value) || 0;
    subtotal += softDrink * price.softDrink;
    if (document.getElementById("takeaway").checked) {
        subtotal += price.takeaway;
    }
    let gst = subtotal * price.gst / 100;

    let total = subtotal + gst;

    let finalTotal = Math.round(total);

    let roundOff = finalTotal - total;

    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("gst").innerHTML = gst.toFixed(2);
    document.getElementById("roundoff").innerHTML = roundOff.toFixed(2);
    document.getElementById("total").innerHTML = finalTotal;

    document.getElementById("subtotalInput").value = subtotal;
    document.getElementById("gstInput").value = gst.toFixed(2);
    document.getElementById("roundoffInput").value = roundOff.toFixed(2);
    document.getElementById("totalInput").value = finalTotal;
}
function generateBill() {
    calculateBill();
    // Customer Details
    localStorage.setItem("customerName",
        document.getElementById("customerName").value);

    localStorage.setItem("phoneNumber",
        document.getElementById("phoneNumber").value);

    // Pizza
    let pizza = "";
    if (document.getElementById("normal").checked)
        pizza = "Normal";
    else if (document.getElementById("deluxe").checked)
        pizza = "Deluxe";

    localStorage.setItem("pizza", pizza);

    // Category
    let category = "";
    if (document.getElementById("veg").checked)
        category = "Veg";
    else if (document.getElementById("nonveg").checked)
        category = "Non-Veg";

    localStorage.setItem("category", category);

    // Extras
    localStorage.setItem("cheese",
        document.getElementById("cheese").checked);

    localStorage.setItem("topping",
        document.getElementById("topping").checked);

    localStorage.setItem("takeaway",
        document.getElementById("takeaway").checked);

    // Quantities
    localStorage.setItem("water",
        document.getElementById("water").value);

    localStorage.setItem("ketchup",
        document.getElementById("ketchup").value);

    localStorage.setItem("softdrink",
        document.getElementById("softdrink").value);

    // Bill Values
    localStorage.setItem("subtotal",
        document.getElementById("subtotal").innerHTML);

    localStorage.setItem("gst",
        document.getElementById("gst").innerHTML);

    localStorage.setItem("roundoff",
        document.getElementById("roundoff").innerHTML);

    localStorage.setItem("total",
        document.getElementById("total").innerHTML);

    document.getElementById("orderForm").submit();
}
