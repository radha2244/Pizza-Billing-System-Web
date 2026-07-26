CREATE DATABASE pizzapoint;

USE pizzapoint;

CREATE TABLE orders (
    bill_no INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    phone VARCHAR(15),
    pizza_type VARCHAR(20),
    category VARCHAR(20),
    cheese VARCHAR(5),
    topping VARCHAR(5),
    takeaway VARCHAR(5),
    water INT,
    ketchup INT,
    softdrink INT,
    subtotal DECIMAL(10,2),
    gst DECIMAL(10,2),
    roundoff DECIMAL(10,2),
    total DECIMAL(10,2),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);