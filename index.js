var cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCartDisplay();
    updateCartTotal();
    $("#cartModal").modal("show");

    // Manually set the position of the modal
    $("#cartModal").css({
        "top": "50px", // Adjust this value as needed
        "right": "20px", // Adjust this value as needed
        "position": "fixed"
    });

    $("#viewCartBtn").show();
}

function updateCartDisplay() {
    var cartItemsContainer = $("#cart-items-modal");
    cartItemsContainer.empty();

    cartItems.forEach(function (item) {
        cartItemsContainer.append(`<p>${item.name} - $${item.price.toFixed(2)}</p>`);
    });
}

function updateCartTotal() {
    var total = cartItems.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);
    $("#cart-total-modal").text("$" + total.toFixed(2));
}

function clearCart() {
    cartItems = [];
    updateCartDisplay();
    updateCartTotal();
    $("#viewCartBtn").hide();
}

$(document).ready(function () {
    $("#viewCartBtn").hide();
});
function subscribe() {
    // Get the entered email
    const email = document.getElementById('emailInput').value;

    // Validate the email (you may want to use a more robust validation)
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show a thank you message
    alert('Thank you for subscribing. Keep shopping with us!');
}

function isValidEmail(email) {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}