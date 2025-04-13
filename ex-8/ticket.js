function calculateTotal() {
    let adults = parseInt(document.getElementById("adults").value);
    let children = parseInt(document.getElementById("children").value);

    let totalAmount = (adults * 10) + (children * 5);
    
    document.getElementById("totalAmount").value = `₹${totalAmount}`;
}
