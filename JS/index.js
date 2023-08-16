document.getElementById('btn-apply').addEventListener('click', function(){
    const btnoldAmount = document.getElementById('old-amount');
    const oldAmounttext = btnoldAmount.innerText;
    const amountnum = parseFloat(oldAmounttext);
    const newAmount = amountnum - (0.3 * amountnum);
    btnoldAmount.innerText = newAmount;
    
    this.disabled = true;
})
document.getElementById('coupon-btn').addEventListener('click', function(){
    const newinput = document.getElementById('input');
    const inputvalue = newinput.value;
    // output section
    const oldCouponAmount = document.getElementById('old-coupon-amount');
    const oldCouponAmountText = oldCouponAmount.innerText;
    const oldAmountnum = parseFloat(oldCouponAmountText);
    const newCouponAmount = oldAmountnum - (0.3 * oldAmountnum);

    newinput.value = '';

    if(inputvalue === 'DISC30'){
        oldCouponAmount.innerText = newCouponAmount;

        this.disabled = true;
    }
    else{
        alert('Please elter valid Code');
    }
    
})