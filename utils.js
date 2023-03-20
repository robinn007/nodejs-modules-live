function calculateTotalPrice(cart,discountPct=0){
    let TotalPrice = 0;
    cart.forEach(function(item) {
        TotalPrice = TotalPrice + item.price * item.quantity;
    });
    let discountAmount = TotalPrice * discountPct / 100;
    let discountPrice = TotalPrice - discountAmount;
    return {TotalPrice, discountAmount, discountPrice}
}
module.exports = {calculateTotalPrice}



